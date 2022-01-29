import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Wykonawca} from "../wykonawca.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LastfmService} from "../../api/lastfm.service";
import {SpotifyService} from "../../api/spotify.service";

@Component({
  selector: 'app-wykonawca-edycja',
  templateUrl: './wykonawca-edycja.component.html',
  styleUrls: ['./wykonawca-edycja.component.scss']
})
export class WykonawcaEdycjaComponent implements OnInit {

  @Output() nowy_wykonawca: EventEmitter<Wykonawca> = new EventEmitter();
  @Input() wykonawca_do_edycji: Wykonawca = new Wykonawca("", "", "", "", "");
  wykonawcaForm = new FormGroup({
    idWykonawcy: new FormControl(''),
    nazwaWykonawcy: new FormControl('', [Validators.required]),
    krajWykonawcy: new FormControl('', [Validators.required]),
    zdjecieWykonawcy: new FormControl('', [Validators.required]),
    opisWykonawcy: new FormControl('', [Validators.required]),
  })

  constructor(private LastFm: LastfmService, private Spotify: SpotifyService) { }

  ngOnInit(): void {
    this.Refresh();
  }
  ngOnChanges(): void {
    this.Refresh();
  }

  Refresh(): void {
    if (this.wykonawca_do_edycji) {
      this.wykonawcaForm.get('idWykonawcy')?.setValue(this.wykonawca_do_edycji.id);
      this.wykonawcaForm.get('nazwaWykonawcy')?.setValue(this.wykonawca_do_edycji.name);
      this.wykonawcaForm.get('krajWykonawcy')?.setValue(this.wykonawca_do_edycji.country);
      this.wykonawcaForm.get('zdjecieWykonawcy')?.setValue(this.wykonawca_do_edycji.photo);
      this.wykonawcaForm.get('opisWykonawcy')?.setValue(this.wykonawca_do_edycji.description);

    } else {
      this.wykonawcaForm.get('idWykonawcy')?.setValue('');
      this.wykonawcaForm.get('nazwaWykonawcy')?.setValue('');
      this.wykonawcaForm.get('krajWykonawcy')?.setValue('');
      this.wykonawcaForm.get('zdjecieWykonawcy')?.setValue('');
      this.wykonawcaForm.get('opisWykonawcy')?.setValue('');
    }
  }

  pobierzDaneZApi() {
    // pobiera okladke ze spotify i opis z lastfm
    let nazwa = this.wykonawcaForm.get('nazwaWykonawcy')?.value;

    let info = this.LastFm.informacjeWykonawca(nazwa).subscribe(
      data => {
        var opis = (<any>data).artist.bio.summary
        this.wykonawcaForm.get('opisWykonawcy')?.setValue(striplinks(opis));
      },
      error => {
        alert("Błąd przy pobieraniu danych z API, zobacz konsolę");
        console.log(error);
      }
    );

    let info2 = this.Spotify.szukajWykonawca(nazwa).subscribe(
      data => {
        var zdjecie = (<any>data).artists.items[0].images[0].url
        this.wykonawcaForm.get('zdjecieWykonawcy')?.setValue(zdjecie);
      },
      error => {
        alert("Błąd przy pobieraniu danych z API, zobacz konsolę");
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.nowy_wykonawca.emit(new Wykonawca (
      this.wykonawcaForm.get('idWykonawcy')?.value,
      this.wykonawcaForm.get('nazwaWykonawcy')?.value,
      this.wykonawcaForm.get('krajWykonawcy')?.value,
      this.wykonawcaForm.get('zdjecieWykonawcy')?.value,
      this.wykonawcaForm.get('opisWykonawcy')?.value
  ));
  }
  wyczyscForm() {
    this.wykonawcaForm.get('idWykonawcy')?.setValue('');
    this.wykonawcaForm.get('nazwaWykonawcy')?.setValue('');
    this.wykonawcaForm.get('krajWykonawcy')?.setValue('');
    this.wykonawcaForm.get('zdjecieWykonawcy')?.setValue('');
  }


}
function striplinks(text: string) {
  var re = /<a\s.*?href=[\"\'](.*?)[\"\']*?>(.*?)<\/a>/g;
  var str = text;
  var subst = '$2';
  var result = str.replace(re, subst);
  return result;
}

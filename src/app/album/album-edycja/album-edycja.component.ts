import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Album} from "../album.model";
import {Wykonawca} from "../../wykonawca/wykonawca.model";
import {WykonawcaService} from "../../wykonawca/wykonawca.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SpotifyService} from "../../api/spotify.service";
import {LastfmService} from "../../api/lastfm.service";

@Component({
  selector: 'app-album-edycja',
  templateUrl: './album-edycja.component.html',
  styleUrls: ['./album-edycja.component.scss']
})
export class AlbumEdycjaComponent implements OnInit {

  @Output() nowy_album: EventEmitter<Album> = new EventEmitter();
  @Input() album_do_edycji: Album = new Album("", "","", "", "", "", "", "")

  public wykonawcy: Wykonawca[] = [];


  albumForm = new FormGroup({
    idAlbumu: new FormControl(''),
    nazwaAlbumu: new FormControl('', [Validators.required]),
    idArtysty: new FormControl('', [Validators.required]),
    gatunek: new FormControl('', [Validators.required]),
    rokWydania: new FormControl('', [Validators.required]),
    iloscPiosenek: new FormControl('', [Validators.required]),
    opis: new FormControl('', [Validators.required]),
    okladka: new FormControl('', [Validators.required])
  })



  constructor(private wykonawcyService: WykonawcaService, private Spotify: SpotifyService,
              private LastFm: LastfmService) {
    this.wykonawcyService.pobierzWykonawcow().subscribe(wykonawcy => this.wykonawcy = wykonawcy);
  }

  ngOnInit(): void {
    this.Refresh();
  }
  ngOnChanges(): void {
    this.Refresh();
  }

  Refresh() : void {
    if (this.album_do_edycji) {
      this.albumForm.get('idAlbumu')?.setValue(this.album_do_edycji.id)
      this.albumForm.get('nazwaAlbumu')?.setValue(this.album_do_edycji.name)
      this.albumForm.get('idArtysty')?.setValue(this.album_do_edycji.artistId)
      this.albumForm.get('gatunek')?.setValue(this.album_do_edycji.genre)
      this.albumForm.get('rokWydania')?.setValue(this.album_do_edycji.yearOfRelease)
      this.albumForm.get('iloscPiosenek')?.setValue(this.album_do_edycji.tracks)
      this.albumForm.get('opis')?.setValue(this.album_do_edycji.description)
      this.albumForm.get('okladka')?.setValue(this.album_do_edycji.cover)
    } else {
      this.albumForm.get('idAlbumu')?.setValue("")
      this.albumForm.get('nazwaAlbumu')?.setValue("")
      this.albumForm.get('idArtysty')?.setValue("")
      this.albumForm.get('gatunek')?.setValue("")
      this.albumForm.get('rokWydania')?.setValue("")
      this.albumForm.get('iloscPiosenek')?.setValue("")
      this.albumForm.get('opis')?.setValue("")
      this.albumForm.get('okladka')?.setValue("")
    }
  }
  onSubmit() {
    this.nowy_album.emit(new Album (
      this.albumForm.get('idAlbumu')?.value,
      this.albumForm.get('nazwaAlbumu')?.value,
      this.albumForm.get('idArtysty')?.value,
      this.albumForm.get('gatunek')?.value,
      this.albumForm.get('rokWydania')?.value,
      this.albumForm.get('iloscPiosenek')?.value,
      this.albumForm.get('opis')?.value,
      this.albumForm.get('okladka')?.value,
    ))
  }
  wyczyscForm() {
    this.albumForm.get('idAlbumu')?.setValue("")
    this.albumForm.get('nazwaAlbumu')?.setValue("")
    this.albumForm.get('idArtysty')?.setValue("")
    this.albumForm.get('gatunek')?.setValue("")
    this.albumForm.get('rokWydania')?.setValue("")
    this.albumForm.get('iloscPiosenek')?.setValue("")
    this.albumForm.get('opis')?.setValue("")
    this.albumForm.get('okladka')?.setValue("")
  }

  pobierzDaneZApi() {
    const id_wykonawcy = this.albumForm.get('idArtysty')?.value;
    // @ts-ignore
    let wykonawca = this.wykonawcy.find(x => x.id == id_wykonawcy).name;
    let nazwa_albumu = this.albumForm.get('nazwaAlbumu')?.value;
    let query = nazwa_albumu + " " + wykonawca;

    this.Spotify.szukajAlbum(query).subscribe(
      data => {
        var okladka = (<any>data).albums.items[0].images[0].url;
        var ile_utworow = (<any>data).albums.items[0].total_tracks;
        var rok_wydania = (<any>data).albums.items[0].release_date;

        this.albumForm.get('okladka')?.setValue(okladka);
        this.albumForm.get('iloscPiosenek')?.setValue(ile_utworow);
        this.albumForm.get('rokWydania')?.setValue(rok_wydania.substring(0,4));
      },
      error => {
        alert("Błąd przy pobieraniu danych z API Spotify, zobacz konsolę");
        console.log(error);
      }
    );

    this.LastFm.informacjeAlbum(wykonawca, nazwa_albumu).subscribe(
      data => {
        var opis = (<any>data).album.wiki.summary;
        this.albumForm.get('opis')?.setValue(striplinks(opis));
      },
      error => {
        alert("Błąd przy pobieraniu danych z API LastFM, zobacz konsolę");
        console.log(error);
      }
    );

  }

}
function striplinks(text: string) {
  var re = /<a\s.*?href=[\"\'](.*?)[\"\']*?>(.*?)<\/a>/g;
  var str = text;
  var subst = '$2';
  var result = str.replace(re, subst);
  return result;
}


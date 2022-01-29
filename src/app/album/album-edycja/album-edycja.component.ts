import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Album} from "../album.model";
import {Wykonawca} from "../../wykonawca/wykonawca.model";
import {WykonawcaService} from "../../wykonawca/wykonawca.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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



  constructor(private wykonawcyService: WykonawcaService) {
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

  }



}

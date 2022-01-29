import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Album} from "../album.model";

@Component({
  selector: 'app-album-przeglad',
  templateUrl: './album-przeglad.component.html',
  styleUrls: ['./album-przeglad.component.scss']
})
export class AlbumPrzegladComponent implements OnInit {

  @Input() tablica_albumow_do_wyswietlenia : Album[] = [];
  @Output() id_wybranego_albumu_do_edycji = new EventEmitter<string>();
  @Output() id_wybranego_albumu_do_usuniecia = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  zmodyfikuj_wybrany_album(id: string) {
    this.id_wybranego_albumu_do_edycji.emit(id);
  }
  usun_wybrany_album(id: string) {
    this.id_wybranego_albumu_do_usuniecia.emit(id);
  }

  czySortowanoAlfabetycznie: boolean = false;
  czySortowanoPoDacie: boolean = false;

  sortujAlbumyAlfabetycznie() {
    this.czySortowanoAlfabetycznie == false ? this.czySortowanoAlfabetycznie = true : this.czySortowanoAlfabetycznie = false;
    this.tablica_albumow_do_wyswietlenia.sort((a,b) => a.name.localeCompare(b.name))
    if (!this.czySortowanoAlfabetycznie)
      this.tablica_albumow_do_wyswietlenia.reverse()
  }

  sortujAlbumyPoDacie() {
    this.czySortowanoPoDacie == false ? this.czySortowanoPoDacie = true : this.czySortowanoPoDacie = false;
    this.tablica_albumow_do_wyswietlenia.sort((a,b) => a.yearOfRelease > b.yearOfRelease ? 1 : -1);
    if (!this.czySortowanoPoDacie)
      this.tablica_albumow_do_wyswietlenia.reverse()
  }

}

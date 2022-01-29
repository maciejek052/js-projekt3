import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Album} from "../album.model";

@Component({
  selector: 'app-album-przeglad-bez-usuwania',
  templateUrl: './album-przeglad-bez-usuwania.component.html',
  styleUrls: ['./album-przeglad-bez-usuwania.component.scss']
})
export class AlbumPrzegladBezUsuwaniaComponent implements OnInit {
  @Input() tablica_albumow_do_wyswietlenia : Album[] = [];

  constructor() { }

  ngOnInit(): void {
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

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

}

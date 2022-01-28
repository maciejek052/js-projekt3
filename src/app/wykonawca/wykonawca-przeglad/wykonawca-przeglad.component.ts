import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Wykonawca} from "../wykonawca.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-wykonawca-przeglad',
  templateUrl: './wykonawca-przeglad.component.html',
  styleUrls: ['./wykonawca-przeglad.component.scss']
})
export class WykonawcaPrzegladComponent implements OnInit {

  @Input() tablica_wykonawcow_do_wyswietlenia: Wykonawca[] = [];
  @Output() id_wybranego_wykonawcy_do_edycji = new EventEmitter<string>();
  @Output() id_wybranego_wykonawcy_do_usuniecia = new EventEmitter<string>();

  zmodyfikuj_wybranego_wykonawce(id: string) {
    this.id_wybranego_wykonawcy_do_edycji.emit(id);
  }

  usun_wybranego_wykonawce(id: string) {
    this.id_wybranego_wykonawcy_do_usuniecia.emit(id);
  }

  podejrzyjWykonawce(id: string) {
    this.router.navigate(['/wykonawcy', id]);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}

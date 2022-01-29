import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Wykonawca} from "../wykonawca.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-wykonawca-przeglad-bez-usuwania',
  templateUrl: './wykonawca-przeglad-bez-usuwania.component.html',
  styleUrls: ['./wykonawca-przeglad-bez-usuwania.component.scss']
})
export class WykonawcaPrzegladBezUsuwaniaComponent implements OnInit {

  @Input() tablica_wykonawcow_do_wyswietlenia: Wykonawca[] = [];




  podejrzyjWykonawce(id: string) {
    this.router.navigate(['/wykonawcy', id]);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  czySortowanoPoWykonawcy: boolean = false;
  czySortowanoPoKraju: boolean = false;

  sortujPoWykonawcy() {
    this.czySortowanoPoWykonawcy == false ? this.czySortowanoPoWykonawcy = true : this.czySortowanoPoWykonawcy = false;
    this.tablica_wykonawcow_do_wyswietlenia.sort((a,b) => a.name.localeCompare(b.name))
    if (!this.czySortowanoPoWykonawcy)
      this.tablica_wykonawcow_do_wyswietlenia.reverse()
  }

  sortujPoKraju() {
    this.czySortowanoPoKraju == false ? this.czySortowanoPoKraju = true : this.czySortowanoPoKraju = false;
    this.tablica_wykonawcow_do_wyswietlenia.sort((a,b) => a.country.localeCompare(b.country))
    if (!this.czySortowanoPoKraju)
      this.tablica_wykonawcow_do_wyswietlenia.reverse()
  }
}

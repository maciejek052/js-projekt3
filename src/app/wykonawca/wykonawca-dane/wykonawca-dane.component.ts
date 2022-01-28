import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Wykonawca} from "../wykonawca.model";
import {WykonawcaService} from "../wykonawca.service";

@Component({
  selector: 'app-wykonawca-dane',
  templateUrl: './wykonawca-dane.component.html',
  styleUrls: ['./wykonawca-dane.component.scss']
})
export class WykonawcaDaneComponent implements OnInit {
  private wykonawcy: Wykonawca[] = [];
  private wybrany_wykonawca: number = -1;
  @Output() wykonawcy_do_wyswietlenia: EventEmitter<Wykonawca[]> = new EventEmitter();
  @Output() wykonawca_do_edycji: EventEmitter<Wykonawca> = new EventEmitter();
  @Input() wykonawca_do_dodania: Wykonawca = new Wykonawca("", "", "", "", "");

  wyslijWybranegoWykonawceDoEdycji(id_wybranego_wykonawcy_do_edycji: string) {
    for (let wykonawca of this.wykonawcy) {
      if (wykonawca.id == id_wybranego_wykonawcy_do_edycji) {
        this.wybrany_wykonawca = this.wykonawcy.indexOf(wykonawca);
        window.scrollTo(0,0);
        break;
      }
    }
  }

  wyslijWybranegoWykonawceDoUsuniecia(id_wybranego_wykonawcy_do_usuniecia: string) {
    for (let wykonawca of this.wykonawcy) {
      if (wykonawca.id == id_wybranego_wykonawcy_do_usuniecia) {
        this.wykonawcyService.usunWykonawce(this.wykonawcy[this.wykonawcy.indexOf(wykonawca)].id)
          .subscribe( ret => this.wykonawcy.splice(this.wykonawcy.indexOf(wykonawca), 1))
        break;
      }
    }
  }

  dodanyZostalNowyWykonawca(nowy_wykonawca: Wykonawca) {
    this.wykonawcyService.dodajWykonawce(nowy_wykonawca).subscribe( ret => this.wykonawcy.push(nowy_wykonawca));
  }

  dodanyZostalZmodyfikowanyWykonawca(nowy_wykonawca: Wykonawca) {
    for (let wykonawca of this.wykonawcy) {
      if (wykonawca.id == nowy_wykonawca.id) {
        this.wykonawcyService.zmienWykonawce(nowy_wykonawca).subscribe( ret => this.wykonawcy[this.wykonawcy.indexOf(wykonawca)] = nowy_wykonawca);
        break;
      }
    }
    this.wybrany_wykonawca = -1;
  }

  constructor(private wykonawcyService: WykonawcaService) {
    this.wykonawcyService.pobierzWykonawcow().subscribe(wykonawcy => this.wykonawcy = wykonawcy);
    console.log(this.Wykonawcy);
  }

  ngOnInit(): void {
  }
  public get Wykonawcy(): Wykonawca[] {
    return this.wykonawcy;
  }
  public get Wybrany_wykonawca(): number {
    return this.wybrany_wykonawca;
  }
  public set Wybrany_wykonawca(wybrany_wykonawca) {
    this.wybrany_wykonawca = wybrany_wykonawca;
  }

}

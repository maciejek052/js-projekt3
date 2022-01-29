import {Component, Input, OnInit} from '@angular/core';
import {Wykonawca} from "../wykonawca.model";
import {Router} from "@angular/router";
import {WykonawcaService} from "../wykonawca.service";

@Component({
  selector: 'app-wykonawca-pojedynczy',
  templateUrl: './wykonawca-pojedynczy.component.html',
  styleUrls: ['./wykonawca-pojedynczy.component.scss']
})
export class WykonawcaPojedynczyComponent implements OnInit {

  @Input() wykonawca!: Wykonawca;
  private _id: string;

  constructor(private router: Router, private wykonawcaService: WykonawcaService) {
    this._id = this.router.url;
    this._id = this._id.replace("/wykonawcy/", "");
  }

  ngOnInit(): void {
    this.wykonawcaService.pobierzWykonawceODanymId(Number(this._id)).subscribe(
      (wykonawca) => this.wykonawca = wykonawca
    )
  }

  get id (): string {
    return this._id;
  }
  set id (id: string) {
    this._id = id;
  }

}

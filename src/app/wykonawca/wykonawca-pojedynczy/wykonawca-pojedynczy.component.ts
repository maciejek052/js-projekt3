import {Component, Input, OnInit} from '@angular/core';
import {Wykonawca} from "../wykonawca.model";
import {Router} from "@angular/router";
import {WykonawcaService} from "../wykonawca.service";
import {Album} from "../../album/album.model";
import {AlbumService} from "../../album/album.service";

@Component({
  selector: 'app-wykonawca-pojedynczy',
  templateUrl: './wykonawca-pojedynczy.component.html',
  styleUrls: ['./wykonawca-pojedynczy.component.scss']
})
export class WykonawcaPojedynczyComponent implements OnInit {

  @Input() wykonawca!: Wykonawca;
  private albumy: Album[] = [];
  private _id: string;

  constructor(private router: Router, private wykonawcaService: WykonawcaService,
              private albumService: AlbumService) {
    this._id = this.router.url;
    this._id = this._id.replace("/wykonawcy/", "");
  }

  ngOnInit(): void {
    this.wykonawcaService.pobierzWykonawceODanymId(Number(this._id)).subscribe(
      (wykonawca) => this.wykonawca = wykonawca
    )
    this.albumService.pobierzAlbumyWykonawcy(Number(this._id)).subscribe(
      (albumy) => this.albumy = albumy
    )

  }

  get id (): string {
    return this._id;
  }
  set id (id: string) {
    this._id = id;
  }

  public get Albumy(): Album[] {
    return this.albumy;
  }

}

import { Component, OnInit } from '@angular/core';
import {Album} from "../album/album.model";
import {Wykonawca} from "../wykonawca/wykonawca.model";
import {AbstractControl, FormControl, FormGroup, ValidatorFn} from "@angular/forms";
import {WykonawcaService} from "../wykonawca/wykonawca.service";
import {AlbumService} from "../album/album.service";

@Component({
  selector: 'app-wyszukiwanie',
  templateUrl: './wyszukiwanie.component.html',
  styleUrls: ['./wyszukiwanie.component.scss']
})
export class WyszukiwanieComponent implements OnInit {

  pustoArtysci = false;
  pustoAlbumy = false;

  private albumy :Album[] = [];
  private wykonawcy :Wykonawca[] = [];

  szukajWykonawcow = new FormGroup({
    kraj: new FormControl('', [this.krajValidator()])
  });

  szukajAlbumow = new FormGroup({
    gatunek: new FormControl('', [this.gatunekValidator()])
  });


  constructor(private wykonawcyService: WykonawcaService,
              private albumyService: AlbumService) { }

  ngOnInit(): void {
    this.pobierzWykonawcow("")
  }

  krajValidator() : ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      var szukanyKraj = control.value;
      this.pobierzWykonawcow(szukanyKraj)
      return null;
    }
  }
  gatunekValidator() : ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      var szukanyGatunek = control.value;
      console.log(szukanyGatunek)
      this.pobierzAlbumy(szukanyGatunek)
      return null;
    }
  }

  pobierzWykonawcow(kraj: string) {
    this.wykonawcyService.pobierzWykonawcowZKraju(kraj).subscribe(wykonawcy => {
      this.wykonawcy = wykonawcy;
      wykonawcy.length == 0 ? this.pustoArtysci = true : this.pustoArtysci = false;
    })
  }
  pobierzAlbumy(gatunek: string) {
    this.albumyService.pobierzAlbumyGatunku(gatunek).subscribe(albumy => {
      this.albumy = albumy;
      albumy.length == 0 ? this.pustoAlbumy = true : this.pustoAlbumy = false;
    })
  }

  public get Albumy() {
    return this.albumy;
  }
  public get Wykonawcy() {
    return this.wykonawcy;
  }

}

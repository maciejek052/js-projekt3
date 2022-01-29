import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Album} from "../album.model";
import {AlbumService} from "../album.service";


@Component({
  selector: 'app-album-dane',
  templateUrl: './album-dane.component.html',
  styleUrls: ['./album-dane.component.scss']
})
export class AlbumDaneComponent implements OnInit {

  private albumy: Album[] = [];
  private wybrany_album: number = -1;
  @Output() albumy_do_wyswietlenia: EventEmitter<Album[]> = new EventEmitter();
  @Output() album_do_edycji: EventEmitter<Album> = new EventEmitter();
  @Input() album_do_dodania: Album = new Album("", "", "", "", "", "", "", "");

  wyslijWybranyAlbumDoEdycji(id_wybranego_albumu_do_edycji: string) {
    for (let album of this.albumy) {
      if (album.id == id_wybranego_albumu_do_edycji) {
        this.wybrany_album = this.albumy.indexOf(album);
        window.scrollTo(0,0);
        break;
      }
    }
  }

  wyslijWybranyAlbumDoUsuniecia(id_wybranego_albumu_do_usuniecia: string) {
    for (let album of this.albumy) {
      if (album.id == id_wybranego_albumu_do_usuniecia) {
        this.albumyService.usunAlbum(this.albumy[this.albumy.indexOf(album)].id)
          .subscribe( ret => this.albumy.splice(this.albumy.indexOf(album), 1))
        break;
      }
    }
  }

  dodanyZostalNowyAlbum(nowy_album: Album) {
    this.albumyService.dodajAlbum(nowy_album).subscribe( ret => this.albumy.push(nowy_album));
  }

  dodanyZostalZmodyfikowanyAlbum(nowy_album: Album) {
    for (let album of this.albumy) {
      if (album.id == nowy_album.id) {
        this.albumyService.zmienAlbum(nowy_album).subscribe( ret => this.albumy[this.albumy.indexOf(album)] = nowy_album);
        break;
      }
    }
    this.wybrany_album = -1;
  }

  constructor(private albumyService: AlbumService) {
    this.albumyService.pobierzAlbumy().subscribe(albumy => this.albumy = albumy);
    console.log(this.Albumy);
  }

  ngOnInit(): void {
  }
  public get Albumy(): Album[] {
    return this.albumy;
  }
  public get Wybrany_album(): number {
    return this.wybrany_album;
  }
  public set Wybrany_album(wybrany_album) {
    this.wybrany_album = wybrany_album;
  }

}

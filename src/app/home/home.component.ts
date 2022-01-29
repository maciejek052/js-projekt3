import { Component, OnInit } from '@angular/core';
import {Album} from "../album/album.model";
import {AlbumService} from "../album/album.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  albumy :Album[] = [];
  losowyAlbum!: Album;

  constructor(private albumyService: AlbumService) {
    this.albumyService.pobierzAlbumy().subscribe(data => {
      this.albumy = data;
      var ktory_album = Math.floor(Math.random() * this.albumy.length);
      this.losowyAlbum = this.albumy[ktory_album];
    })
  }

  ngOnInit(): void {
  }

}

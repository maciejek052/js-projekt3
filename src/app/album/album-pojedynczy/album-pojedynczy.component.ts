import {Component, Input, OnInit} from '@angular/core';
import {Wykonawca} from "../../wykonawca/wykonawca.model";
import {Album} from "../album.model";
import {ActivatedRoute, Router} from "@angular/router";
import {WykonawcaService} from "../../wykonawca/wykonawca.service";
import {AlbumService} from "../album.service";
import {SpotifyService} from "../../api/spotify.service";
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-album-pojedynczy',
  templateUrl: './album-pojedynczy.component.html',
  styleUrls: ['./album-pojedynczy.component.scss']
})
export class AlbumPojedynczyComponent implements OnInit {

  album! : Album
  wykonawca! : Wykonawca
  id : number = 0
  spotify_id_albumu: string = "";
  kod_embed : any;

  constructor(private router: Router, private albumService: AlbumService,
              private wykonawcaService: WykonawcaService, private route: ActivatedRoute,
              private Spotify :SpotifyService, private sanitizer: DomSanitizer) {
    this.route.params.subscribe(res => {
      this.id = res['id'];
      this.albumService.pobierzAlbumODanymId(res['id']).subscribe(album => {
        this.album = album;
        console.log(this.album);
        this.wykonawcaService.pobierzWykonawceODanymId(Number(album.artistId)).subscribe(wykonawca => {
          this.wykonawca = wykonawca;
          var query = this.wykonawca.name + " " + this.album.name;
          this.Spotify.szukajAlbum(query).subscribe(wyszukanie => {

            this.spotify_id_albumu = "https://open.spotify.com/embed/album/" + (<any>wyszukanie).albums.items[0].id;
            this.kod_embed = this.sanitizer.bypassSecurityTrustResourceUrl(this.spotify_id_albumu);
          })

        })
      })
    });

  }

  ngOnInit(): void {
    console.log(this.id)
  }



}

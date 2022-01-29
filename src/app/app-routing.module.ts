import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WykonawcaDaneComponent} from "./wykonawca/wykonawca-dane/wykonawca-dane.component";
import {AlbumDaneComponent} from "./album/album-dane/album-dane.component";
import {WykonawcaPojedynczyComponent} from "./wykonawca/wykonawca-pojedynczy/wykonawca-pojedynczy.component";
import {AlbumPojedynczyComponent} from "./album/album-pojedynczy/album-pojedynczy.component";
import {HomeComponent} from "./home/home.component";
import {WyszukiwanieComponent} from "./wyszukiwanie/wyszukiwanie.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'wykonawcy', component: WykonawcaDaneComponent},
  {path: 'albumy', component: AlbumDaneComponent},
  {path: 'wykonawcy/:id', component: WykonawcaPojedynczyComponent},
  {path: 'albumy/:id', component: AlbumPojedynczyComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'szukaj', component: WyszukiwanieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WykonawcaDaneComponent} from "./wykonawca/wykonawca-dane/wykonawca-dane.component";
import {AlbumDaneComponent} from "./album/album-dane/album-dane.component";
import {GatunekDaneComponent} from "./gatunek/gatunek-dane/gatunek-dane.component";
import {WykonawcaPojedynczyComponent} from "./wykonawca/wykonawca-pojedynczy/wykonawca-pojedynczy.component";
import {AlbumPojedynczyComponent} from "./album/album-pojedynczy/album-pojedynczy.component";
import {GatunekPojedynczyComponent} from "./gatunek/gatunek-pojedynczy/gatunek-pojedynczy.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'wykonawcy', component: WykonawcaDaneComponent},
  {path: 'albumy', component: AlbumDaneComponent},
  {path: 'gatunki', component: GatunekDaneComponent},
  {path: 'wykonawcy/:id', component: WykonawcaPojedynczyComponent},
  {path: 'albumy/:id', component: AlbumPojedynczyComponent},
  {path: 'gatunki/:id', component: GatunekPojedynczyComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { AlbumEdycjaComponent } from './album/album-edycja/album-edycja.component';
import { AlbumPojedynczyComponent } from './album/album-pojedynczy/album-pojedynczy.component';
import { AlbumDaneComponent } from './album/album-dane/album-dane.component';
import { AlbumPrzegladComponent } from './album/album-przeglad/album-przeglad.component';
import { WykonawcaEdycjaComponent } from './wykonawca/wykonawca-edycja/wykonawca-edycja.component';
import { WykonawcaPojedynczyComponent } from './wykonawca/wykonawca-pojedynczy/wykonawca-pojedynczy.component';
import { WykonawcaDaneComponent } from './wykonawca/wykonawca-dane/wykonawca-dane.component';
import { WykonawcaPrzegladComponent } from './wykonawca/wykonawca-przeglad/wykonawca-przeglad.component';
import { GatunekDaneComponent } from './gatunek/gatunek-dane/gatunek-dane.component';
import { GatunekPrzegladComponent } from './gatunek/gatunek-przeglad/gatunek-przeglad.component';
import { GatunekPojedynczyComponent } from './gatunek/gatunek-pojedynczy/gatunek-pojedynczy.component';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    AlbumEdycjaComponent,
    AlbumPojedynczyComponent,
    AlbumDaneComponent,
    AlbumPrzegladComponent,
    WykonawcaEdycjaComponent,
    WykonawcaPojedynczyComponent,
    WykonawcaDaneComponent,
    WykonawcaPrzegladComponent,
    GatunekDaneComponent,
    GatunekPrzegladComponent,
    GatunekPojedynczyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

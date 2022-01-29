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
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import { HomeComponent } from './home/home.component';
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import { WyszukiwanieComponent } from './wyszukiwanie/wyszukiwanie.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { AlbumPrzegladBezUsuwaniaComponent } from './album/album-przeglad-bez-usuwania/album-przeglad-bez-usuwania.component';
import { WykonawcaPrzegladBezUsuwaniaComponent } from './wykonawca/wykonawca-przeglad-bez-usuwania/wykonawca-przeglad-bez-usuwania.component';


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
    NavbarComponent,
    HomeComponent,
    WyszukiwanieComponent,
    AlbumPrzegladBezUsuwaniaComponent,
    WykonawcaPrzegladBezUsuwaniaComponent,
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
    MatTableModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

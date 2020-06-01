import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { textosDin } from './perfil-usuario/perfilUsuario.component';
import { MaterialModule } from './material/material.module';
import { InformacionLaboralComponent } from './informacion-laboral/informacion-laboral.component';
import { IdiomasComponent } from './idiomas/idiomas.component';




@NgModule({
  declarations: [
    AppComponent,
    textosDin,
    InformacionLaboralComponent,
    IdiomasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



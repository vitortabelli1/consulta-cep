import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { AppComponent } from './app.component';
import { CepConsultaComponent } from './cep-consulta/cep-consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    CepConsultaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule // Adicione o FormsModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

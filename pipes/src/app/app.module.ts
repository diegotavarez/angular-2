import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

export function locale(){
  return new SettingsService().getLocale();
}

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    /*{
      provide: LOCALE_ID,
      useValue: 'pt-BR',
      useClass: '',
      useFactory: ''
    }*/

    SettingsService,

    {

      provide: LOCALE_ID,
      deps:[SettingsService],
      useFactory: locale
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

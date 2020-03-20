import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routeComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './list/edit/edit.component';
import { CategoriaComponent } from './list/categoria/categoria.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { FormCatComponent } from './list/categoria/form/form.component';
//import { FormComponent } from './list/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    routeComponent,
    EditComponent,
    CategoriaComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    FormCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ ListComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }

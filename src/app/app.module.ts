import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DeletePageComponent } from './delete-page/delete-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { PipesPipe } from './filter/pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    PageNotFoundComponent,
    ViewPageComponent,
    AddPageComponent,
    DeletePageComponent,
    EditPageComponent,
    PipesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

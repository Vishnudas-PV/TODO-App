import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DeletePageComponent } from './delete-page/delete-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'mainComponent', pathMatch: 'full'
  },
  {
    path: 'mainComponent', component: MainPageComponent
  },
  {
    path: 'mainComponent/addPage', component: AddPageComponent
  },
  {
    path: 'mainComponent/viewPage/:id', component: ViewPageComponent
  },
  {
   path:'mainComponent/editPage/:editTodoid',component:EditPageComponent
  },

  {
    path: '**', component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

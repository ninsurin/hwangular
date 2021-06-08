import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HomeComponent} from './home/home.component';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms'
import { CountingComponent } from './counting/counting.component';
import {lab4Component} from './Lab4Component/lab4Component'
import {Navbar} from './Navbar/navbar.component'
import {Topbanner} from './Topbanner/topbanner.component '
import {category} from './category/category.component'
import {search} from './Navbar/search/search.component'
import {Todolist} from './ToDoListComponent/ToDoListComponent'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountingComponent,
    lab4Component,
    Navbar,
    Topbanner,
    category,
    search,
    Todolist
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

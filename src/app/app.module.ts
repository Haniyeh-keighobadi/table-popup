import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {LoginComponent} from "./login/login.component";
import { FormsModule } from '@angular/forms';
import {DatatableComponent} from "./datatable/datatable.component";
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from "@angular/material/form-field";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatTableModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatSelectModule, MatOptionModule, MatButtonModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule,
MatCheckboxModule,
    MatListModule,
    MatButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';



import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { DialogContentExample, DialogContentExampleDialog } from './dialog-content-example';
import { WidgetComponent } from './widget/widget.component';
import { CatchComponent } from './catch/catch.component';
import { SummaryComponent } from './summary/summary.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    DialogContentExample,
    DialogContentExampleDialog,
    WidgetComponent,
    CatchComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

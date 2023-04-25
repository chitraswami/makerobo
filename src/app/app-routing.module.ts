import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { WidgetComponent } from './widget/widget.component';
import { CatchComponent } from './catch/catch.component';
import { ChatComponent } from './chat/chat.component';
import { SummaryComponent } from './summary/summary.component';



const routes: Routes = [

{path:"", component:WidgetComponent},
{path:"chat", component:ChatComponent},
{path:"catch", component:CatchComponent},
{path:"summary", component:SummaryComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes),MatDialogModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

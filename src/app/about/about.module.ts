import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './about.page';
import { KnightComponent } from '../knight/knight.component';
import { SquareComponent } from '../square/square.component';
import { BoardComponent } from '../board/board.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AboutPage }])
  ],
  declarations: [AboutPage, KnightComponent, SquareComponent, BoardComponent]
})
export class AboutPageModule { }

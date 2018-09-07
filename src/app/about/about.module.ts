import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './about.page';
import { KnightComponent } from '../knight/knight.component';
import { SquareComponent } from '../square/square.component';
import { BoardComponent } from '../board/board.component';
import { BoardSquareComponent } from '../board-square/board-square.component';
import { GameService } from '../game.service';

import { SkyhookDndModule } from 'angular-skyhook';
import { default as HTML5Backend } from 'react-dnd-html5-backend';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SkyhookDndModule.forRoot({ backend: HTML5Backend }),
    RouterModule.forChild([{ path: '', component: AboutPage }])
  ],
  declarations: [AboutPage, KnightComponent, SquareComponent, BoardComponent, BoardSquareComponent],
  providers: [GameService]
})
export class AboutPageModule { }

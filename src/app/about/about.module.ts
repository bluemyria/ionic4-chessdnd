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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SkyhookDndModule, DRAG_DROP_BACKEND } from 'angular-skyhook';

import { customMultiBackend } from '../customMultiBackend';
//import { default as HTML5Backend } from 'react-dnd-html5-backend';
//import { default as TouchBackend } from 'react-dnd-touch-backend';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SkyhookDndModule.forRoot({ backendFactory: customMultiBackend }),
    //SkyhookDndModule.forRoot({ backend: HTML5Backend }),
    //SkyhookDndModule.forRoot({ backend: TouchBackend }),
    RouterModule.forChild([{ path: '', component: AboutPage }])
  ],
  declarations: [AboutPage, KnightComponent, SquareComponent, BoardComponent, BoardSquareComponent],
  providers: [GameService]
})
export class AboutPageModule { }

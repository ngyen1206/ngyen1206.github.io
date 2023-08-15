import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { CommentComponent } from './comment/comment.component';
import { CardMovieSmallComponent } from '../home/components/card-movie-small/card-movie-small.component';
import { CardMovieSmallModule } from '../home/components/card-movie-small/card-movie-small.module';
import { CommentModule } from './comment/comment.module';



@NgModule({
  declarations: [
    MovieComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    CardMovieSmallModule,
    CommentModule
  ]
})
export class MovieModule { }

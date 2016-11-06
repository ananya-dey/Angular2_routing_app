import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';

import { AppComponent }      from '../component/app.component';
import { NavComponent }      from '../component/nav.component';
import { HomeComponent }     from '../component/home.component';
import { PostComponent }     from '../component/post.component';
import { CommentComponent }  from '../component/comment.component';

import { AppRouting }        from '../routing/app.routing';
import { Http,HttpModule }   from '@angular/http';
@NgModule({
  imports:      [
      BrowserModule,
      AppRouting,
      HttpModule
  ],

  declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      PostComponent,
      CommentComponent
  ],

  bootstrap:    [ 
      AppComponent 
  ],

  providers:[

  ]
})

export class AppModule { }

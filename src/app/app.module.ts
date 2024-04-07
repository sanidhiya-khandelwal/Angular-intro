import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { AppendPipe } from './Pipes/append.pipes';
import { AppendCLIPipe } from './Pipes/append-cli.pipe';
import { PipeTransformPipe } from './pipe-transform.pipe';
import { PostList1Component } from './post-list-1/post-list-1.component';
import { PostService } from './Services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    AppendPipe,
    AppendCLIPipe,
    PipeTransformPipe,
    PostList1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(), PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

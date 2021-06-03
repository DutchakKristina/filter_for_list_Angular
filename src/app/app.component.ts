import {Component} from '@angular/core';
export interface Post {
  title: string
  text: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  e: number = Math.E;

  str = 'hello world';

  date: Date = new Date();

  search = '';
  searchFilter = 'title';

  posts: Post[] = [
    {title: 'Angular', text: 'best of the world'},
    {title: 'Bread', text: ' best2 of the world'},
    {title: 'JS', text: ' best3 of the world'},
  ];
  addPosts() {
  this.posts.unshift({
    title : 'Angular',
    text: 'Kristina'
  });
  }
}

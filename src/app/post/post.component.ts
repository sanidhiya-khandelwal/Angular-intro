import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  title: string = "List of posts";
  postParentMessage: string = 'Message coming from the post parent' //step1 creating variable

  childMessage: string = 'From Child Component' //step1 view ki creating childmessage to be passed

  //step 3 In your child component, define an Input property to receive the string data from the parent.
  @Input()
  fromParent!: string; //! is imp else we get error... X [ERROR] TS2564: Property 'fromParent' has no initializer and is not definitely assigned in the constructor. [plugin angular-compiler]
}

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'; //step2 Output Decorator.... import Output, EventEmitter
import { log } from 'console';
import { PostService } from '../Services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  // providers: [PostService] //for this DI to work we need to tell angular that this service class "PostService" is a injectable class so we did this using "providers" parameters for this component decorator
})
export class PostComponent implements OnInit {
  posts: Array<any> = [];
  constructor(
    private postService: PostService //Dependency injection
  ) {
    // let postService = new PostService(); //created instance of PostService
    this.posts = postService.postList
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title: string = "List of posts";
  postParentMessage: string = 'Message coming from the post parent' //step1 creating variable

  childMessage: string = 'From Child Component' //step1 view ki creating childmessage to be passed

  outputChildMessage: string = 'Message from child component via output' //step1 Output Decorator....set up a variable


  //step 3 In your child component, define an Input property to receive the string data from the parent.
  @Input()
  fromParent!: string; //! is imp else we get error... X [ERROR] TS2564: Property 'fromParent' has no initializer and is not definitely assigned in the constructor. [plugin angular-compiler]

  @Output() messageEvent = new EventEmitter<string>(); //step3: Output Decorator.... Aise decorator use krte and then create button in "post.component.html" which is our step4
  // we want to emit this mssg in variable "outputChildMessage" to this EventEmitter on clicking of this button

  sendMessage() { //stp5: Output Decorator... function defined
    console.log('evnt');
    this.messageEvent.emit(this.outputChildMessage);//now we need to capture this event from parent component so go to parent component html file (app.component.html)whihc is step6
  }


}

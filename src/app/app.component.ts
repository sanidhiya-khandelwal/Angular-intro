import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component'; //step2 view ki..import compoenent
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit { //step 5 view ki.. implement interface
  stepForm!: string;
  title = '01AgIntro';
  parentMessage: string = 'Message coming from parent component'; //step 1 creating variable in parent that needs to be passed to child component using @input decorator 
  displayChildMssg: string | undefined; //step3view ki.. creating variable
  fromChildOutput!: string; //step8 Output decorator....creating variable for string interpolation
  //ViewChild ki help se Child k saare variables/data accessible h
  @ViewChild(PostComponent) childComp: any; //step1 view ki.. view child takes parent component and name of variable u can give any name

  // constructor() { //step6 view ki.. to  understabd th need of ngAfterViewInit()
  //   console.log(this.childComp); // yh dega undefined "constructor run jb ho rha tha tb childComp m kuch nhi tha it was not intialized so undefined print ho rha tha"
  // }
  ngAfterViewInit() { //step7 view ki.. lifecycle hook -> coz in constructor run jb ho rha tha tb childComp m kuch nhi tha it was not intialized so undefined print ho rha tha so we used this hook coming from interface "AfterViewInit" yh last m run hota yh tb call hota h jb pura wave initlaized hojaata h
    console.log(this.childComp); // display in console
    this.displayChildMssg = this.childComp.childMessage //step8 store the variable and do string interpolation
  }


  // step7 Output decorator ..creating fucntion tht will recive message
  reciveMessage($event: any) {
    console.log($event);
    this.fromChildOutput = $event;

  }

  // Step 1 : property binding
  imgUrl: String = "https://images.pexels.com/photos/17991284/pexels-photo-17991284/free-photo-of-empty-seats-on-ferry.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"

  // Step1: class binding
  bool: boolean = true;

  // Event binding
  buttonClick() {
    console.log('Button Click event');
  }
  // ***********************************************************
  // *******  2 way data binding **********
  userName!: string;
  twoWayDataBinding1() {
    console.log(this.userName);
  }
  /* **************************************************** */

  /*************** 2 way vs 1 way Data binding **************/
  // ONE WAY Data Binding (when u hit enter whatever is preset in "textvalue" is printed
  // and if u make change in input field then also same data present in "textvalue" will be displayed in console)

  // TWO WAY Data Binding (when u hit enter whatever is preset in "textvalue" is printed
  // and if u make change in input field then modified data present in "textvalue" will be displayed in console)

  textvalue: string = "one way data biding and value coming from component"
  OneWayDataBinding() {
    console.log(this.textvalue);
  }


  // ************************** EVENT FILTERING **************************************************
  // Normal event filtering
  onKeyUp($event: any) {
    console.log($event.keyCode);
    if ($event.keyCode === 13) {
      console.log('Enter key pressed');

    }
  }

  // ANGULAR EVENT FILTERING
  onKeyUpUsingAngularEventFiltering() {
    console.log('Enter key pressed using Angular Event filtering');
  }

  // **********************************  TEMPLATE VARIABLE  ***********************************************************
  //  without Template variable
  withoutTemplateVariable($event: any) {
    console.log($event.target.value); //when u hit eneter then typed value will be displayed on console
  }

  //  with Template variable
  withTemplateVariable(username: any) {
    console.log(username); //when u hit eneter then typed value will be displayed on console

  }

  // Task 1: play with events and binding
  postTitle!: string;
  postDetails!: string;
  imageURL!: string;
  postURL!: string;
  addBackground!: boolean;

  // ngFor
  postArray: Array<string> = ['post 1', 'post 2', 'post 3', 'post 4'];

  //method 2:  looping thru javascript
  constructor() {
    for (let i = 0; i < this.postArray.length; i++) {
      console.log(this.postArray[i]);

    }
  }

  // Fetch Object Array
  objArray: Array<any> = [
    { id: 1, postTitle: 'post 1' },
    { id: 2, postTitle: 'post 2' },
    { id: 3, postTitle: 'post 3' },
    { id: 4, postTitle: 'post 4' }
  ]

  addNew() {
    this.objArray.push({ id: 6, postTitle: 'post 6' })
  }
  onDelete(post: any) {
    let index = this.objArray.indexOf(post);
    this.objArray.splice(index, 1)
  }
  onDelete1(index: number) {
    this.objArray.splice(index, 1)
  }

  conditonalArray = [];

  // ngSwitch case
  // without ngSwitch case
  onClick(status: string) {
    this.stepForm = status;
  }

  isActive: boolean = true;

  // task 2
  name!: string;
  email!: string;
  address!: string;

  userArray: Array<any> = [];
  saveData() {
    this.userArray.push({
      "name": this.name,
      "email": this.email,
      "address": this.address
    })
    console.log(this.userArray);
  }
  onDeleteUser(index: number) {
    this.userArray.splice(index, 1)
  }


  //inbulit angular pipes
  heading: string = "Angular";
  count: number = 100000;
  decNum: number = .534634646; //output: 00.53
  currencyNum: number = 10;
  today: Date = new Date();

  postObj: object = {
    id: 1,
    postTitle: "Post 1"
  }

  sliceArray: Array<string> = [
    "post 1",
    "post 2",
    "post 3",
    "post 4",
    "post 5",
  ]

  // custom pipe
  userDetails = {
    name: "User 1",
    city: "New York",
    countryCode: "US"
  }

  dummyTxt: string = "Thuis is fbskfbklfnlsnflsnfl fhnslls asjflsjnfladl ajhdlajdladjla;k;jkp;"
}

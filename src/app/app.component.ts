import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component'; //step2 view ki..import compoenent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit { //step 5 view ki.. implement interface
  title = '01AgIntro';
  parentMessage: string = 'Message coming from parent component'; //step 1 creating variable in parent that needs to be passed to child component using @input decorator 
  displayChildMssg: string | undefined; //step3view ki.. creating variable

  //ViewChild ki help se Child k saare variables/data accessible h
  @ViewChild(PostComponent) childComp: any; //step1 view ki.. view child takes parent component and name of variable u can give any name

  constructor() { //step6 view ki.. to  understabd th need of ngAfterViewInit()
    console.log(this.childComp); // yh dega undefined "constructor run jb ho rha tha tb childComp m kuch nhi tha it was not intialized so undefined print ho rha tha"
  }
  ngAfterViewInit() { //step7 view ki.. lifecycle hook -> coz in constructor run jb ho rha tha tb childComp m kuch nhi tha it was not intialized so undefined print ho rha tha so we used this hook coming from interface "AfterViewInit" yh last m run hota yh tb call hota h jb pura wave initlaized hojaata h
    console.log(this.childComp); // display in console
    this.displayChildMssg = this.childComp.childMessage //step8 store the variable and do string interpolation
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01AgIntro';
  parentMessage: string = 'Message coming from parent component' //step 1 creating variable in parent that needs to be passed to child component using @input decorator 

}

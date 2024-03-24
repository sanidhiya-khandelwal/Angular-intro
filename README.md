# 01AgIntro

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

<!-- Notes -->
<!-- 

Two ways of Passing data from Child component to Parent component :
1-> Using @ViewChild decorator
2-> Child to Parent when there is Event, using the @Output Decorator and Event Emitter
This approach is ideal when we want to share data chnages that occur on things like button clicks, form entries, and other user events.



-->

Section: 2
Display data and event handling

<!-- 
TOPICS:
1: Angular Data Binding Methods
2: Angular Two-way data binding
3: How to handle Events in Angular (click, keyup,filtering events)
-->

Display data methods :
-String interpolation {{}}-used to show dynamic data inside the view (HTML page), we can also show string, numbers and boolean values
-Property Binding 
-Class Binding -> we will conditionally bind css class to HTML element using class binding in Angular 
-Style Binding -> binding inline css based on conditions or binding style to html element using style binding method
-Event binding -> to bind events to html elements we use () brackets and not [] this 
-Event Filtering -> normal event filerting vs angular Event filtering
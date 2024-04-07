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
-Angular Template Variable - use to get typed value of input field

-2 way data binding (getting values from input field)
-one way vs 2 way data binding
 -one way data binding [COMPONENT==> UNI DIRECTIONAL ==> VIEW(HTML)] Can only bind data from component to view

 - two way data binding [COMPONENT==> BI DIRECTIONAL ==> VIEW(HTML)] 
                                  <==                <==  
 can bind data component to view and vice versa

 definition:
 with one way data binding we can only send data from component to view, we can not send moified data from view to component but in 2 way Db w can pass data from component to view and also we can modify that data from view and send it back to component 

ONE-WAY DATA BINDING
-String interpolation - {{title}}
-Property Binding - [src]
-Class Binding - [class.text-red]
-Style Binding - [style.backgroundColor]

TWO-WAY DATA BINDING can only be done with ngModel syntax
-Two-way binding [(ngModel)]


<!-- ********************** Angular Directives ******************   -->
<!-- 
1)What is Angular Directive and How to use
2)Types of Angular Directive
3)About
 ngIf Directive, ngTemplate Directive, ngSwitchCase Directive, ngFor Directive
4)Learn About ngClass and ngStyle Directive
5)Learn Diffrence of Structural and Attribute Directive

Angular Directive:
An angular directive is special type of technology that can manipulate the DOM object,
Directives can do adding html elements, removing html elements from DOM dynamically 

HTML DOM ==> Angular Directive ==> DOM(HTML elments (Button) (Add or Remove)) 

Angular Directive (Components)
-Directives are components without a View
-Angular Components are Directives, with a View

Angular Directive Types
-Component Directive=> which is an angular directive with a template view
-Structural Directive=>which can change the DOM layout by adding & removing DOm elements
-Attribute Directive=>which can change the appearance or behavior of an element. component or another directive
-Custom Directive=> which can create our custom directive from scratch  
                                         -->
 <!--
1) NgFor Directive:we use ngFor Directive to render an Array inside the html View, it is a structural Directive, with NgFor Directive we can manipulate the DOM(such as add or remove html elments to DOM) 
 
 -->

- Fetch Object Array thru ngFor directive

-Angular change detection (add/remove a new data object when we click on a button )

<!--************* ngTemplate **************-->
using this we can give "else" condition and avoid multiple if condition but remember it won't work inside <div> use <ng-template> for else condition, ng-template tag won't work for normal html elements, works only for structural directive

<!-- *********** ngSwitch case directive -->

<!-- ********** ngStyle Directive ********* -->
diplay style with conditions earlier we did this with style binding approach

<!-- ********* ngClass directive ********** -->

<!-- *******  Structural Directive VS Attribute Directives ***** -->
we saw there are 4 angular directive types, now we will see
Structural, Attribute

Structural Directives:
--------------------
(
    with the structural directive we can manipulate the DOM by adding & removing HTML elments to the DOM
)
-Responsible for the html layout
-shape or reshape the DOM structure by adding & removing HTML element.
-Can identiy with leading * Symbol
-Structural directives:
*ngFor,*ngIf,*ngSwitchCase

Attribute Directives
--------------------
-Change the appearance or the behaviour of a DOM Element
-Attribute Directives:
-ngStyle,ngClass=> with them we applied styles to elements conditionally, we use these Attribute Directives as like property binding inside of square brackets and we do not add any leading asterisk here as this is not Structural Directive.


<!--*********** Angular pipes *******************-->
-what is Angular pipe and how to use.
-what are inbuilt pipes in angular
-how to pass parameters to an angular pipe
-how to create a custom pipe from scratch

-what is Angular pipe and how to use.
---------------------------------
Pipes are used to transforming data into a particular format when we only need that data transformed in a template or the HTML View.

example=>
10000      ====>Angular Number/Decimal pipe====> 100,000
(raw value
coming from ====>Angular Currency pipe  ====> $100,000
DB)

-what are inbuilt pipes in angular
----------------------------------
Uppercase pipe         Date pipe
Lowercase pipe         JSON pipe
Decimal/Number pipe    Percent pipe
Currency pipe          Slice Pipe

<!-- 


The expression {{ decNum | number:'1.2-2' }} is used in Angular templates for formatting numbers. Here's what each part means:

decNum: This is presumably a variable in your Angular component that holds the number you want to format.

number: This is an Angular pipe called the "number pipe". Pipes in Angular are used for transforming data in the template.

'1.2-2': This is the formatting pattern provided to the number pipe. It consists of three parts:

1 before the decimal point: This indicates the minimum number of integer digits.

2 between the decimal point and the fraction digits: This indicates the minimum number of fraction digits.

-2 after the fraction digits: This indicates the maximum number of fraction digits.

So, for example, if decNum is 1234.56789, applying the number pipe with the formatting pattern '1.2-2' will result in 1,234.57.

Here's a breakdown of the formatting:

1 before the decimal point: It ensures that at least one digit appears before the decimal point, adding leading zeros if necessary.

2 after the decimal point: It ensures that there are at least two digits after the decimal point, rounding or padding with zeros if necessary.

-2 after the fraction digits: It limits the maximum number of fraction digits to 2. So, if there are more than two fraction digits, it rounds the number to two decimal places.

what is fraction digit
Fraction digits refer to the digits that appear after the decimal point in a number. For example, in the number 1234.56789, the fraction digits are 56789.
 -->

 <!-- generate custom pipe with command "ng g pipe Pipes/appendCLI-->

 <!-- ********* ANGULAR SERVICES *********-->
 -What is Angular service and how to use ?
 -How to create angular service from scratch ?
 -Generate Angular services using angular cli ?
 -What is dependency Injection and How to use ?
 -What is data modelling and Angular interface ? 
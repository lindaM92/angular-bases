import { Component } from "@angular/core";

/* decoradorpara transformar mi 
clase en un confirm,ponente */ 
@Component({
selector : 'app-counter', /* como quiero utilizar este counter en el html
'app-counter' es el nombre que se le da con el - para indicar que es un componente
personalizado */
template : `
<h3>Counter: {{counter}}</h3>
<button (click)="increaseBy(+1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>`
})


export class CounterComponent {
    public counter : number = 10;


  increaseBy(value:number): void{
    this.counter +=value;
     }

     reset ():void {
this.counter = 10;
     }

  
}
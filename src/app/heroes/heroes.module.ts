import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListaComponent } from "./lista/lista.component";
import { CommonModule } from "@angular/common";



@NgModule({
    declarations: [HeroComponent, ListaComponent],
    exports: [HeroComponent, ListaComponent],

   /*  si tiene la palabra module va en los imports */
    imports : [CommonModule]
})
export class HeroesModule{}
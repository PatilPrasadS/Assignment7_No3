import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  public text = "Marvellous Infosystem";
  public fun() : string {
    this.text = "Education for Better tomorrow";
    return this.text;
  }
}

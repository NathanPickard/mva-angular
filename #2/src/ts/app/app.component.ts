import { Component } from "@angular/core";

@Component({
  selector: "main",
  template: `<span>{{message | capitalize}}</span><br><br>
  <input type="text" [(ngModel)]="message"><br>
  <input type="text" [(ngModel)]="message2"><br>`,
})

// template: `<span>{{message | capitalize}}</span><br><br>
//   <input type="text" [(ngModel)]="message"><br>
//   <input type="text" [(ngModel)]="message2"><br>`,
// })

export class AppComponent {

  public message: string = "hello";
  public message2: string = "world";

}
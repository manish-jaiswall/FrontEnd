import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding';
 public numbers=[10,20,30,40,50];

 name:any="This is pipeline Example";
 num:any=101.029302032;
 today=Date();
 nump:any=0.211321

  Greet1()
{
  console.log("Greetings");
}

  Greet2(event:any)
  {
      console.log(event);
  }
  Greet3(event:any)
  {
    console.log(event.type);
  }
}


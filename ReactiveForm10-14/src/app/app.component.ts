import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ReactiveForm10-14';
  reactiveForm:FormGroup;

  ngOnInit(){

    this.reactiveForm=new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      address: new FormGroup({
        
        country: new FormControl(''),
        city: new FormControl(''),
        
      })

      

    });

  }

  OnSubmit()
  {
    console.log(this.reactiveForm);
  }
}

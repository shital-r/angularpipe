import { Component } from '@angular/core';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent {
msg:string='welcome';

  employeeArr:any[]=[
    {name:'John',id:100,salary:30000,gender:'male'},
    {name:'Ane',id:101,salary:35000,gender:'female'},
    {name:'Tom',id:102,salary:40000,gender:'male'},
    {name:'Juli',id:103,salary:50000,gender:'female'},

  ]

}

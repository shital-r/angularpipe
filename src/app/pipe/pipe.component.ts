import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  name:string='shital'

  todaysDate:string='12/05/1996';

  amount:number=1000;
  
}

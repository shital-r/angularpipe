import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empGender'
})
export class EmpGenderPipe implements PipeTransform {

  transform(value: string,gender: string): string {
if(gender.toLocaleLowerCase()=='male'){
  return 'Mr' + value
}else{
  return "Miss" + value;
}

    
  }

}

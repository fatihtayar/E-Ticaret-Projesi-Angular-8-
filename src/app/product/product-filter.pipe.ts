import { Pipe, PipeTransform } from '@angular/core';
import { product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: product[], filterText: string): product[] {
    filterText=filterText?filterText.toLocaleLowerCase():null;   
    return filterText?value.filter((p:product)=>p.description.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}

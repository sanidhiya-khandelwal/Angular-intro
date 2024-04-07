import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTransform'
})
export class PipeTransformPipe implements PipeTransform {

  transform(value: string, length: number): unknown {
    if (!length) { //for by default thing, right now it is not working
      length = 20;
    }
    return value.substring(0, length);
  }

}

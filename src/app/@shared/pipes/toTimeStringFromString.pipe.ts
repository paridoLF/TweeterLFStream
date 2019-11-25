import { Pipe, PipeTransform } from '@angular/core';
import DateUtil from './../utils/dateUtil';

@Pipe({
    name: 'toTimeStringFromString'
  })
  export class ToTimeStringFromStringPipe implements PipeTransform {
    transform(value: string): string {
      return DateUtil.getTimeStringFromString(value);
    }
  }

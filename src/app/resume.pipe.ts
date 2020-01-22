import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {
  _default: number;
  transform(value: any, limit ?: number): any {
    if (!value) {
      return null;
    }

    limit = (limit) ? limit : this._default;
    return value.substr(limit) + '...';
  }

}

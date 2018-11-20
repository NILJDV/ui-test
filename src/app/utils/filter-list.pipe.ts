import { PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'filterList', pure : false})
export class FilterList implements PipeTransform {
    constructor(private sanitized: DomSanitizer) {
    }
    transform(data: any[] , searchText: String) {
        if (searchText) {
            const filteredData = [];
            if (data) {
                data.forEach( (d , i) => {
                    if (d.name.toUpperCase().indexOf(searchText.toUpperCase()) > -1 ||
                            d.address.city.toUpperCase().indexOf(searchText.toUpperCase()) > -1) {
                        filteredData.push(d);
                    }
                });
            }
            return filteredData;
        } else {
            data.map((d, i) => {
                if (!(/^\d+$/.test(d.phone))) {
                    d.phone = 'N/A';
                }
            });
            return data;
        }
    }
}

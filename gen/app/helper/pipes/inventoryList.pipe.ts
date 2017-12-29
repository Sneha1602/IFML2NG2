import { Pipe, PipeTransform } from '@angular/core';			
@Pipe({name: 'inventoryListFilter'})
export class InventoryListFilter implements PipeTransform{
	transform(items: any[], filterBy: any): any {
		// filter items array, items which match and return true will be returned, items that don't math will be filtered out
		if(items != undefined){
			if(filterBy === undefined){
				// no filter defined, return items array unfiltered
				return items;
			}else{
				filterBy = JSON.parse(filterBy);
				if(filterBy['*'] != undefined){
					// if filterBy contains '*'-element, all columns are filtered by value
return items.filter(item => 					item.bookInfo.isbn.toString().toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1||
					item.bookInfo.title.toString().toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1||
					item.bookInfo.author.toString().toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1||
					item.bookStatus.toString().toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1
);				}else{
					// filter by keys in filterBy array
					var arrayOfKeys = Object.keys(filterBy);
					if(arrayOfKeys.length >= 1){
						var tempItems;
                        return items.filter(function(val) {
                            for(var i = 0; i < arrayOfKeys.length; i++){            
                                var explodedString = arrayOfKeys[i].split('.');
                                var v = val;
                                for (var j = 0, l = explodedString.length; j<l; j++){
                                    v = v[explodedString[j]];
                                }
                                console.log(filterBy[arrayOfKeys[i]]);
                                if(v.toLowerCase().indexOf(filterBy[arrayOfKeys[i]].toLowerCase()) !== -1){
                                    return true;
                                }
                            }
                            return false;
                        });
					}else{
						// illegal filterBy
						return items;
					}
				}
			}
		}
	}
}

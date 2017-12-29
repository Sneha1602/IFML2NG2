"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var LentBooksFilter = (function () {
    function LentBooksFilter() {
    }
    LentBooksFilter.prototype.transform = function (items, filterBy) {
        // filter items array, items which match and return true will be returned, items that don't math will be filtered out
        if (items != undefined) {
            if (filterBy === undefined) {
                // no filter defined, return items array unfiltered
                return items;
            }
            else {
                filterBy = JSON.parse(filterBy);
                if (filterBy['*'] != undefined) {
                    // if filterBy contains '*'-element, all columns are filtered by value
                    return items.filter(function (item) { return item.lentBook.bookId.toString().toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1 ||
                        item.lentBook.bookStatus.toString().toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1 ||
                        item.lentBook.bookInfo.isbn.toString().toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1 ||
                        item.lentBook.bookInfo.title.toString().toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1 ||
                        item.lentBook.bookInfo.author.toString().toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1 ||
                        item.lentBy.studentId.toString().toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1 ||
                        item.lentBy.firstname.toString().toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1 ||
                        item.lentBy.lastname.toString().toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1 ||
                        item.lentBy.studentStatus.toString().toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1 ||
                        item.until.toString().toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1; });
                }
                else {
                    // filter by keys in filterBy array
                    var arrayOfKeys = Object.keys(filterBy);
                    if (arrayOfKeys.length >= 1) {
                        var tempItems;
                        return items.filter(function (val) {
                            for (var i = 0; i < arrayOfKeys.length; i++) {
                                var explodedString = arrayOfKeys[i].split('.');
                                var v = val;
                                for (var j = 0, l = explodedString.length; j < l; j++) {
                                    v = v[explodedString[j]];
                                }
                                console.log(filterBy[arrayOfKeys[i]]);
                                if (v.toLowerCase().indexOf(filterBy[arrayOfKeys[i]].toLowerCase()) !== -1) {
                                    return true;
                                }
                            }
                            return false;
                        });
                    }
                    else {
                        // illegal filterBy
                        return items;
                    }
                }
            }
        }
    };
    LentBooksFilter = __decorate([
        core_1.Pipe({ name: 'lentBooksFilter' }), 
        __metadata('design:paramtypes', [])
    ], LentBooksFilter);
    return LentBooksFilter;
}());
exports.LentBooksFilter = LentBooksFilter;
//# sourceMappingURL=lentBooks.pipe.js.map
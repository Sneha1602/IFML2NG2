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
var bookLending_1 = require('../data/bookLending');
var mock_books_1 = require('../data/mock-books');
var mock_bookLendings_1 = require('../data/mock-bookLendings');
var mock_bookReservations_1 = require('../data/mock-bookReservations');
var mock_students_1 = require('../data/mock-students');
var DataService = (function () {
    function DataService() {
        if (localStorage.getItem('booklendings') === null) {
            localStorage.setItem('booklendings', JSON.stringify(mock_bookLendings_1.BOOKLENDINGS));
        }
        if (localStorage.getItem('bookreservations') === null) {
            localStorage.setItem('bookreservations', JSON.stringify(mock_bookReservations_1.BOOKRESERVATIONS));
        }
        if (localStorage.getItem('books') === null) {
            localStorage.setItem('books', JSON.stringify(mock_books_1.BOOKS));
        }
    }
    // Get / Set operations
    DataService.prototype.localGet = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    DataService.prototype.localSet = function (key, data) {
        return localStorage.setItem(key, JSON.stringify(data));
    };
    DataService.prototype.getLendings = function (id) {
        return Promise.resolve(this.localGet('booklendings').filter(function (l) { return l.lentBy.studentId == id; }));
    };
    DataService.prototype.getBooks = function () {
        return Promise.resolve(this.localGet('books'));
    };
    DataService.prototype.getBooksSync = function () {
        return this.localGet('books');
    };
    DataService.prototype.getBookById = function (id) {
        return Promise.resolve(this.getBooks().then(function (books) { return books.find(function (b) { return b.bookId == id; }); }));
    };
    DataService.prototype.getBookByIdSync = function (id) {
        return this.getBooksSync().find(function (b) { return b.bookId == id; });
    };
    DataService.prototype.getBookReservations = function () {
        return Promise.resolve(this.localGet('bookreservations'));
    };
    DataService.prototype.getStudents = function () {
        return Promise.resolve(mock_students_1.STUDENTS);
    };
    DataService.prototype.getStudentById = function (id) {
        return Promise.resolve(mock_students_1.STUDENTS.find(function (s) { return s.studentId == id; }));
    };
    DataService.prototype.getStudentByIdSync = function (id) {
        return mock_students_1.STUDENTS.find(function (s) { return s.studentId == id; });
    };
    // Actions
    DataService.prototype.reserveBook = function (bookId, studentId) {
        var bookObj;
        var studentObj;
        var br;
        var brs;
        bookObj = this.getBookByIdSync(bookId);
        studentObj = this.getStudentByIdSync(studentId);
        br = { reservedBook: bookObj, reservedBy: studentObj };
        brs = this.localGet('bookreservations');
        brs.push(br);
        this.localSet('bookreservations', brs);
        this.updateBookStatus(bookId, false);
    };
    DataService.prototype.returnBook = function (id) {
        var bl;
        var br;
        console.log(this.localGet('bookreservations'));
        console.log(this.localGet('booklendings'));
        bl = this.localGet('booklendings').find(function (bl) { return bl.lentBook.bookId == id; });
        if (bl != null) {
            var index2 = this.indexOfLending(this.localGet('booklendings'), bl);
            this.localSplice('booklendings', index2);
        }
        br = this.localGet('bookreservations').find(function (bl) { return bl.reservedBook.bookId == id; });
        if (br != null) {
            var index2 = this.indexOfReservation(this.localGet('bookreservations'), br);
            console.log('index2 ' + index2);
            this.localSplice('bookreservations', index2);
        }
        this.updateBookStatus(id, true);
    };
    DataService.prototype.lendBook = function (bookObj, studentId, until) {
        var tempArr;
        var student;
        var book;
        var br;
        var bookreservations;
        book = this.getBookByIdSync(bookObj.bookId);
        bookreservations = this.localGet('bookreservations');
        if (book.bookStatus === true || bookreservations.find(function (bl) { return bl.reservedBook.bookId == bookObj.bookId && bl.reservedBy.studentId == studentId; }) != null) {
            tempArr = this.localGet('booklendings');
            student = this.getStudentByIdSync(studentId);
            tempArr.push(new bookLending_1.BookLending(until, bookObj, student));
            this.localSet('booklendings', tempArr);
            br = bookreservations.find(function (bl) { return bl.reservedBook.bookId == bookObj.bookId && bl.reservedBy.studentId == studentId; });
            if (br != null) {
                var index2 = this.indexOfReservation(bookreservations, br);
                this.localSplice('bookreservations', index2);
            }
            this.updateBookStatus(bookObj.bookId, false);
        }
    };
    DataService.prototype.extendBook = function (bookObj, studentId, until) {
    };
    // Helper methods
    DataService.prototype.updateBookStatus = function (id, status) {
        var books;
        books = this.getBooksSync();
        $.each(books, function () {
            if (this.bookId == id) {
                this.bookStatus = status;
            }
        });
        this.localSet('books', books);
    };
    DataService.prototype.localSplice = function (key, index) {
        if (index > -1) {
            var tempArr = this.localGet(key);
            tempArr.splice(index, 1);
            this.localSet(key, tempArr);
        }
    };
    DataService.prototype.indexOfReservation = function (array, item) {
        for (var i = 0; i < array.length; i++) {
            var tempBook;
            var tempBook2;
            tempBook = array[i];
            tempBook2 = item;
            if (tempBook.reservedBook.bookId == tempBook2.reservedBook.bookId && tempBook.reservedBy.studentId == tempBook2.reservedBy.studentId)
                return i;
        }
        return -1;
    };
    DataService.prototype.indexOfLending = function (array, item) {
        for (var i = 0; i < array.length; i++) {
            var tempBook;
            var tempBook2;
            tempBook = array[i];
            tempBook2 = item;
            if (tempBook.lentBook.bookId == tempBook2.lentBook.bookId)
                return i;
        }
        return -1;
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map
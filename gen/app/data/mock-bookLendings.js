"use strict";
var mock_students_1 = require('./mock-students');
var mock_books_1 = require('./mock-books');
exports.BOOKLENDINGS = [
    { lentBy: mock_students_1.STUDENTS[1], lentBook: mock_books_1.BOOKS[5], until: new Date(2016, 10, 31) }
];
//# sourceMappingURL=mock-bookLendings.js.map
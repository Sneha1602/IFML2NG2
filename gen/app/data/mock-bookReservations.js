"use strict";
var mock_students_1 = require('./mock-students');
var mock_books_1 = require('./mock-books');
exports.BOOKRESERVATIONS = [
    { reservedBy: mock_students_1.STUDENTS[1], reservedBook: mock_books_1.BOOKS[0] },
    { reservedBy: mock_students_1.STUDENTS[0], reservedBook: mock_books_1.BOOKS[1] },
    { reservedBy: mock_students_1.STUDENTS[2], reservedBook: mock_books_1.BOOKS[3] },
];
//# sourceMappingURL=mock-bookReservations.js.map
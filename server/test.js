const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1ZGM1ZTk0NTVlN2ZmZDhjNWJmOTg3NiIsInFyTnVtYmVyIjoxLCJuYW1lIjoia295YWwiLCJwaG9uZU51bWJlciI6Ijk0MDQyNjY1MzgiLCJpcEFkZHJlc3MiOiIxNTAuMTA3LjE4MC43OCIsInJlZ2lzdHJhdGlvblRpbWUiOiIyNi8yLzIwMjQsIDM6MTk6MDggcG0iLCJfX3YiOjB9LCJpYXQiOjE3MDkwMTg5MDd9.xtaGhHaWYEK-Jlx9QzTq4Drbe1_b1CYuOE3xAbMtY3o'; // Your token here
const decodedToken = atob(token.split('.')[1]);
console.log(JSON.parse(decodedToken));

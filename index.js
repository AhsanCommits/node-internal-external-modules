/*
********************************
********************************
    Internal Node.js Module
********************************
********************************
*/

/*
********************************
    File System Module
********************************
*/

// const fs = require('fs');

// fs.copyFileSync(sourceFile,destinationFile);

// fs.copyFileSync("file1.txt", "file2.txt");




/* 
********************************
********************************
    External Node.js Module 
********************************
********************************
*/

// 1st One
// const superheroes = require('superheroes');
// var mySuperheroName = superheroes.random();
// console.log(mySuperheroName);


// 2nd One
const marvelComicsCharacters = require('marvel-comics-characters');
var myMarvelCharacterName = marvelComicsCharacters.random(6);
console.log(myMarvelCharacterName);
/*************
 * ~ Pilly ~ *
 *************
 * ----------------------------------
 * Author: Kaycee Ingram <kazewaze> |
 * Date: 7/11/2023                  |
 * ----------------------------------
*/

'use strict';

exports = module.exports = pilly;

const { existsSync,
  mkdirSync,
  writeFileSync } = require('fs');

/*****************
* Main function *
*****************
* --------------------
* @args: none
* @cmd-line args(2-4):
* --------------------
*  - Name of Book/Folder [!REQUIRED]
*     -> "Book Name for Main Folder.",
*  - Number of Dirs [!REQUIRED]
*     -> "Match # of Book's Chapters.",
*  - File Name Override [!OPTIONAL]
*     -> "Preferred default file name for each chapter dir.",
*  - File Extension [!OPTIONAL] [!DEFAULTS TO TXT 'If filename is provided and ext is not']
*     -> "File Extension for files in dirs (js, py, txt, etc)."
*/
function pilly() {
const args = getCmdLineArgs();

// Check if user provided at least 2 args.
if (args.length < 2) {
print("ERROR: Pilly requires at least 2 arguments!");
return;
}

// If dir doesn't exist proceed.
if (!existsSync(args[0])) {
mkdirSync(args[0]);

// Loop over # of chapters (dirs needed) & create the dirs and files.
for (let k = 0; k < Number(args[1]); k++) {
switch (args.length) {
  case (2):
    mkdirFilePair(args[0], k+1);
    break;
  case(3):
    mkdirFilePair(args[0], k+1, args[2], "txt");
    break;
  case (4):
    mkdirFilePair(args[0], k+1, args[2], args[3]);
    break;
}
}
} else { print("ERROR: DIR ALREADY EXISTS!"); return; }
}

/********************************************
* Create chapter dirs with matching files. *
********************************************
* -----------
* @args(2-4):
* -----------
* - targetDir [!REQUIRED]
*    -> "Book Name for Main Folder.",
* - chNumber [!REQUIRED]
*    -> "Match # of Book's Chapters.",
* - fileName [!OPTIONAL]
*    -> "Preferred default file name for each chapter dir.",
* - fileExt [!OPTIONAL] [!DEFAULTS TO TXT 'If filename is provided and ext is not']
*    -> "File Extension for files in dirs (js, py, txt, etc)."
*/
function mkdirFilePair(targetDir, chNumber, fileName=false, fileExt=false) {
let fileContent = fileExt === 'js' ? "/*\n\tPilly and Milly are Rilly from Hilly Philly... Silly.\n\tMic drop... coulda been a rapper - kazewaze\n*/" : '';

// If dir doesn't exist proceed.
if (!existsSync(`${targetDir}/ch${chNumber}`)) {
mkdirSync(`${targetDir}/ch${chNumber}`);

// File Name arg provided?
fileName ? writeFileSync(`${targetDir}/ch${chNumber}/${fileName}.${fileExt}`, fileContent) : '';
}
}

/*************************************************************
* Cleaner way to get cmd-line args (exclude the first two). *
*************************************************************
* @args: none
*/
function getCmdLineArgs() {
return process.argv.slice(2,);
}

/************************************************************
* Tired of typing out console.log all the time so... yeah. *
************************************************************
* @args: any
*/
function print(...args) {
console.log(...args);
}
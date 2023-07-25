/*************
 * ~ Pilly ~ *
 *************
 * ----------------------------------
 * Author: Kaycee Ingram <kazewaze> |
 * Date: 7/11/2023                  |
 * Updated: 7/24/2023               |
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
* ------------
* @args: none
* ------------
*/
function pilly(testArgs=false) {
  const args = testArgs ? testArgs : getCmdLineArgs();

  // Check if user provided at least 2 args.
  if (args.length < 2) {
    throw new Error("ERROR: Pilly requires at least 2 arguments!");
  }

  // If dir doesn't exist proceed.
  if (!existsSync(args[0])) {
    mkdirSync(args[0]);

    // Loop over # of chapters (dirs needed) & create the dirs and files if provided.
    for (let k = 0; k < Number(args[1]); k++) {
      switch (args.length) {
        case (2):
          mkdirFilePair(args[0], k+1);
          break;
        case(3):
          mkdirFilePair(args[0], k+1, args[2]);
          break;
      }
    }
  } else {
    throw new Error("ERROR: DIR ALREADY EXISTS!");
  }
}

/********************************************
* Create chapter dirs with matching files. *
********************************************
* ------------
* @args(2-3):
* ------------
*/
function mkdirFilePair(targetDir, chNumber, file=false) {
  // File arg provided?
  if (file) {
    // File Type provided?
    if (file.split('.').length === 1) {
      file = file + ".txt";
    } else if (file.split('.').length > 2) {
      throw new Error("ERROR: You provided more than one file extension... what ya tryin to pull?");
    }

    var fileContent = file.split('.')[1] === 'js' ? "/*\n\tPilly and Milly are Rilly from Hilly Philly... Silly.\n\tMic drop... coulda been a rapper - kazewaze\n*/" : '';
  }

  // If dir doesn't exist proceed.
  if (!existsSync(`${targetDir}/ch${chNumber}`)) {
    mkdirSync(`${targetDir}/ch${chNumber}`);

    if (file) {
      // File Type js?
      fileContent ? writeFileSync(`${targetDir}/ch${chNumber}/${file}`, fileContent) : writeFileSync(`${targetDir}/ch${chNumber}/${file}`, '');
    }
  }
}

/*************************************
* Cleaner way to get cmd-line args. *
*************************************
* ------------
* @args: none
* ------------
*/
function getCmdLineArgs() {
  return process.argv.slice(2,);
}
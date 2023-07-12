# Pilly
---
## Command-Line Tool for scaffolding directories and files for technical books (following along with the code exercises - for example)

- Zero Dependencies.
- Only 1 File.
- Just 106 Lines of Code (way less minus comments).

### Install:
```
npm install -g pilly
```

### Usage:
```
pilly <name-of-book> <amount-of-chapters> <preferred-filename> <preferred-file-type>
```

## Example:
### Last 2 arguments not needed if you prefer empty chapter dirs.
### Last argument not needed and will default to a .txt file if filename is provided but extension is not.
```
pilly EloquentJs 21 index js
```

## The Example above will create a main folder matching the name of the book provided, create each subfolder within the main folder (ch1, ch2, ch3, etc.) that each contain an index.js file for each.
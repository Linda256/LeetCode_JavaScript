const duplicateFile = require('./609_DuplicateFile');

let paths = ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]

test('duplicateFile function return an array', () => {
  expect(duplicateFile(paths)).toBeInstanceOf(Array)
})

test('Find duplicate file in ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]', () => {
  expect(duplicateFile(paths)).toEqual([ [ 'root/a/1.txt', 'root/c/3.txt' ],
      [ 'root/a/2.txt', 'root/c/d/4.txt', 'root/4.txt' ] ])
})


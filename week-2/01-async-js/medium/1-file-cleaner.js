// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.
//
// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```
//
// After the program runs, the output should be
//
// ```
// hello world my name is raman
// ```

const fs = require('fs');

try {
    // Write content with extra spaces
    fs.writeFileSync('demo.txt', 'Hello    world    my  name is     raman');

    // Read the content
    const data = fs.readFileSync('demo.txt', { encoding: 'utf-8', flag: 'r' });
    console.log('Before: ', data);

    // Clean the content
    const cleanedText = data.split(' ').filter(s => s).join(' ');

    // Write cleaned content to file
    fs.writeFileSync('demo.txt', cleanedText);

    const cleanedDataFromFile = fs.readFileSync('demo.txt', 'utf-8');
    console.log('After: ', cleanedDataFromFile);
}
catch (err) {
    console.log(err);
}
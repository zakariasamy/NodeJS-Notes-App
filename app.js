const validator = require('validator');

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const notes = require('./notes.js');


// console.log(getNotes());

// console.log(process.argv);
// console.log(yargs.argv);


// Create command to add new note
// yargs.command({
//     command: 'add',
//     handler: () => console.log("Adding new note")
// })

// // Create command to remove note
// yargs.command({
//     command: 'remove',
//     handler: () => console.log("remove note")
// })

// // List All Notes
// yargs.command({
//     command: 'list',
//     handler: () => console.log("Listing notes")
// })

// // Read A Notes
// yargs.command({
//     command: 'read',
//     describe: 'aaa',
//     handler: function() {
//         console.log("Read a note")
//     }
// })

// yargs.command('read1', 'Read', () => { console.log("aa") }, () => {
//     console.log("aa")
// })


yargs(hideBin(process.argv))
    .command('add', 'Add new Note', () => {}, (argv) => {
        notes.addNote(argv.title, argv.body)
    })
    .option('title', { demand: true, type: 'string' })
    .option('body', { demand: true, type: 'string' })
    .demandCommand(1)
    .parse()
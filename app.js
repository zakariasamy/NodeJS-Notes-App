const validator = require('validator');

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const notes = require('./notes.js');



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




// Add new Note
yargs(hideBin(process.argv))
    .command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function(argv) {
            notes.addNote(argv.title, argv.body)
        }
    })
    .parse()



// Remove Note
yargs(hideBin(process.argv))
    .command({
        command: 'rm',
        describe: 'Remove a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function(argv) {
            notes.removeNote(argv.title)
        }
    })
    .parse()





/*
All Commands
    Add Note :
    node app.js add --title="Note title" --body="Note body"
    Remove Note :
    node app.js rm --title="Note title"

*/
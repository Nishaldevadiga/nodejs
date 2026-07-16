import { type } from 'node:os';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getNotes, addNote } from './notes.js';
const cli = yargs(hideBin(process.argv));


//create add command

cli.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note title",
            type:'string'
        }
    },
    body:{
        describe: 'note body',
        type:'string'
    },
    handler: function (cli) {
         addNote(cli.title,cli.body);
    }
})

//create remove command


cli.command({
    command: 'remove',
    describe: 'remove a new note',
    handler: function () {
        console.log('remioving a new note')
    }
})


//lsit command
cli.command({
    command: 'list',
    describe: 'list a new note',
    handler: function () {
        console.log('listing  a new note')
    }
})

//read command

cli.command({
    command: 'read',
    describe: 'read a new note',
    handler: function () {
        console.log('reading   a new note')
    }
})
cli.parse();


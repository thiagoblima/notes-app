"use strict";
/**
 * @author: <thiagolimasp@live.com> Thiago Lima
 *
 * @description: main start of the applicaton
 * bringing with it the @class: CommandLine
 * as well as @class: Notes, producing an
 * enhanced command line interface tool for
 * adding, removing, listing, deleting and
 * getting a note by id.
 *
 * @const: commandLine = new @class: CommandLine();
 * @const: notes       = new @class: Notes();
 */
Object.defineProperty(exports, "__esModule", { value: true });
var command_line_1 = require("./command-line");
var notes_1 = require("./notes");
var commandLine = new command_line_1.CommandLine();
var notes = new notes_1.Notes();
if (commandLine.command === 'add') {
    var note = notes.getAddNote(commandLine.argv.title, commandLine.argv.body);
    if (note) {
        console.log('Note created');
        notes.getLogNote(note);
    }
    else {
        console.log('Note title taken');
    }
}
else if (commandLine.command === 'list') {
    var allNotes = notes.getAllNotes();
    console.log("Printing " + allNotes.length + " note(s).");
    allNotes.forEach(function (note) { return notes.getLogNote(note); });
}
else if (commandLine.command === 'read') {
    var note = notes.getNoteById(commandLine.argv.title);
    if (note) {
        console.log('Note found');
        notes.getLogNote(note);
    }
    else {
        console.log('Note not found');
    }
}
else if (commandLine.command === 'remove') {
    var noteRemoved = notes.getRemovenote(commandLine.argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
}
else {
    console.log('Command not recognized');
}

/**
 * @author: <thiagolimasp@live.com> Thiago Lima
 * @description: main start application, command
 * line gets started here.
 * 
 * @const: commandLine = new @class: CommandLine();
 * @const: notes       = new @class: Notes(); 
 */


import { CommandLine } from "./command-line";
import { Notes } from "./notes";

const commandLine = new CommandLine();
const notes = new Notes();


if (commandLine.command === 'add') {
  
  const note = notes.getAddNote(commandLine.argv.title, commandLine.argv.body);
  
  if (note) {
    console.log('Note created');
    notes.getLogNote(note);
  } else {
    console.log('Note title taken');
  }

} else if (commandLine.command === 'list') {
  
  const allNotes = notes.getAllNotes();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note: any) => notes.getLogNote(note));

} else if (commandLine.command === 'read') {

  const note = notes.getNoteById(commandLine.argv.title);

  if (note) {
    console.log('Note found');
    notes.getLogNote(note);
  } else {
    console.log('Note not found');
  }

} else if (commandLine.command === 'remove') {

  const noteRemoved = notes.getRemovenote(commandLine.argv.title);
  const message = noteRemoved ? 'Note was removed' : 'Note not found';

  console.log(message);

} else {

  console.log('Command not recognized');

}

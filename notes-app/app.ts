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


export class MainApp extends CommandLine {
  private notes;
  constructor(notes: Notes) {
    super();
    this.notes = notes;
  }

  private get assignAddNote() {
    const note = this.notes.getAddNote(this.argv.title, this.argv.body);
    if (note) {
      console.log('Note created');
      return this.notes.getLogNote(note);
    } else {
      console.log('Note title taken');
    }

  }

  private get assingRead() {
    const note = this.notes.getNoteById(this.argv.title);

      if (note) {
        console.log('Note found');
        return this.notes.getLogNote(note);
      } else {
        console.log('Note not found');
      }

  }

  private get assignRemove() {
    const noteRemoved = this.notes.getRemovenote(this.argv.title);
    const message = noteRemoved ? 'Note was removed' : 'Note not found';

    return console.log(message);
  }

  private get assignListNotes() {
    const allNotes = this.notes.getAllNotes();
    console.log(`Printing ${allNotes.length} note(s).`);
    return allNotes.forEach((note: any) => this.notes.getLogNote(note));

  }

  public main() {
    
    if (this.command === 'add') {

      return this.assignAddNote;

    } else if (this.command === 'list') {

      return this.assignListNotes;

    } else if (this.command === 'read') {

      return this.assingRead;

    } else if (this.command === 'remove') {
      
      return this.assignRemove;
     
    } else {

      console.log('Command not recognized');

    }

  }

}
const notes = new Notes({});

const mainApp = new MainApp(notes);

mainApp.main();

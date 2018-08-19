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
import { LoggerService } from './logger';


export class MainApp extends CommandLine {
  private notes;
  public logger;
  constructor(notes: Notes) {
    super();
    this.notes = notes;
    this.logger = new LoggerService();
  }

  private get assignAddNote(): void {
    const note = this.notes.getAddNote(this.argv.title, this.argv.body);
    if (note) {
      this.logger.getLogResultData('Note created: \n', note);
      return this.logger.getLogNote(note);
    } else {
      this.logger.getLogResult('Note title taken');
    }

  }

  private get assingRead(): void {
    const note = this.notes.getNoteById(this.argv.title);

    if (note) {
      this.logger.getLogResultData('Note found: \n', note);
      return this.logger.getLogNote(note);
    } else {
      this.logger.getLogResult('Note not found');
    }

  }

  private get assignRemove(): void {
    const noteRemoved = this.notes.getRemoveNote(this.argv.title);
    const message = noteRemoved ? 'Note was removed' : 'Note not found';

    return this.logger.getLogResult(message);
  }

  private get assignListNotes(): void {
    const allNotes = this.notes.getAllNotes();
    this.logger.getLogResult(`Printing ${allNotes.length} note(s).`);
    return allNotes.forEach((note: Notes) => this.logger.getLogNote(note));

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

      this.logger.getLogResult('Command not recognized', null);

    }

  }

};

const notes = new Notes({});

const mainApp = new MainApp(notes);

mainApp.main();

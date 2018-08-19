/**
 * @author: <thiagolimasp@live.com> Thiago Lima
 * @class: Notes
 * @interface: NotesModel
 * 
 * @instance: notesString @type: Buffer
 * @instance: notes       @type: {title, body}[]
 * 
 */

import * as fs from 'fs';

export interface NotesModel {
    notesString: Buffer;
    notes: { title: any; body: any; }[];
}

export class Notes implements NotesModel {
    public notesString;
    public notes;
    constructor({ ...attr }) {
        this.notesString = attr.notesString;
        this.notes = attr.notes;
    }

    private fetchNotes(): [] {
        try {
            this.notesString = fs.readFileSync('notes-data.json');
            return JSON.parse(this.notesString.toString());
        } catch (e) {
            return [];
        }
    }

    private saveNotes = (notes) => {
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    };

    private addNote = (title, body) => {
        this.notes = this.fetchNotes();
        const note = {
            title,
            body
        };
        const duplicateNotes = this.notes.filter((note) => note.title === title);

        if (duplicateNotes.length === 0) {
            this.notes.push(note);
            this.saveNotes(this.notes);
            return note;
        }
    };

    private getAll = () => {
        return this.fetchNotes();
    };

    private getNote = (title) => {
        this.notes = this.fetchNotes();
        const filteredNotes = this.notes.filter((note) => note.title === title);
        return filteredNotes[0];
    };

    private removeNote = (title) => {
        this.notes = this.fetchNotes();
        const filteredNotes = this.notes.filter((note) => note.title !== title);
        this.saveNotes(filteredNotes);

        return this.notes.length !== filteredNotes.length;
    };

    public get getRemovenote() {
        return this.removeNote;
    }

    private logNote = (note) => {
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    };

    public get getAddNote() {
        return this.addNote;
    }

    public get getAllNotes() {
        return this.getAll;
    }

    public get getNoteById() {
        return this.getNote;
    }

    public get getLogNote() {
        return this.logNote;
    }
}

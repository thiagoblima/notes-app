"use strict";
/**
 * @author: <thiagolimasp@live.com> Thiago Lima
 * @class: Notes
 * @interface: NotesModel
 *
 * @property: notesString @type: Buffer
 * @property: notes       @type: {title, body}[]
 *
 * @description: responsible for handling all
 * the notes methods.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Notes = /** @class */ (function () {
    function Notes() {
        var _this = this;
        this.saveNotes = function (notes) {
            fs.writeFileSync('notes-data.json', JSON.stringify(notes));
        };
        this.addNote = function (title, body) {
            _this.notes = _this.fetchNotes();
            var note = {
                title: title,
                body: body
            };
            var duplicateNotes = _this.notes.filter(function (note) { return note.title === title; });
            if (duplicateNotes.length === 0) {
                _this.notes.push(note);
                _this.saveNotes(_this.notes);
                return note;
            }
        };
        this.getAll = function () {
            return _this.fetchNotes();
        };
        this.getNote = function (title) {
            _this.notes = _this.fetchNotes();
            var filteredNotes = _this.notes.filter(function (note) { return note.title === title; });
            return filteredNotes[0];
        };
        this.removeNote = function (title) {
            _this.notes = _this.fetchNotes();
            var filteredNotes = _this.notes.filter(function (note) { return note.title !== title; });
            _this.saveNotes(filteredNotes);
            return _this.notes.length !== filteredNotes.length;
        };
        this.logNote = function (note) {
            console.log('--');
            console.log("Title: " + note.title);
            console.log("Body: " + note.body);
        };
        this.notesString;
        this.notes;
    }
    Notes.prototype.fetchNotes = function () {
        try {
            this.notesString = fs.readFileSync('notes-data.json');
            return JSON.parse(this.notesString.toString());
        }
        catch (e) {
            return [];
        }
    };
    Object.defineProperty(Notes.prototype, "getRemovenote", {
        get: function () {
            return this.removeNote;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notes.prototype, "getAddNote", {
        get: function () {
            return this.addNote;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notes.prototype, "getAllNotes", {
        get: function () {
            return this.getAll;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notes.prototype, "getNoteById", {
        get: function () {
            return this.getNote;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notes.prototype, "getLogNote", {
        get: function () {
            return this.logNote;
        },
        enumerable: true,
        configurable: true
    });
    return Notes;
}());
exports.Notes = Notes;

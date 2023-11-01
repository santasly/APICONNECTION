"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.updateNote = exports.addNote = exports.getSpecifNote = exports.getNotes = void 0;
const dbServices_1 = require("./dbServices");
const notes = [
    {
        id: 1,
        title: "Buy Rice",
        content: "I am going to buy rice",
        createdAt: new Date()
    },
    {
        id: 2,
        title: "Sleep",
        content: "I am going to sleep",
        createdAt: new Date()
    }
];
function getNotes() {
    return notes;
}
exports.getNotes = getNotes;
function getSpecifNote(id) {
    let note = notes.find((note) => note.id === id);
    if (note)
        return note;
    return null;
}
exports.getSpecifNote = getSpecifNote;
async function addNote(note) {
    let { id, title, content, createdAt } = note;
    let connectionPool = await (0, dbServices_1.dbService)();
    let query = `INSERT INTO notes (note_id, title, content,createdAt) VALUES ('${id}', '${title}', '${content}','${createdAt}')`;
    connectionPool === null || connectionPool === void 0 ? void 0 : connectionPool.connect(async (err) => {
        if (err) {
            console.log(err);
        }
        else {
            let results = await (connectionPool === null || connectionPool === void 0 ? void 0 : connectionPool.request().query(query));
            console.log(results);
        }
    });
}
exports.addNote = addNote;
async function updateNote(note) {
    const { id, title, content, createdAt } = note;
    const connectionPool = await (0, dbServices_1.dbService)();
    const query = `
      UPDATE notes 
      SET title = '${title}', content = '${content}', createdAt = '${createdAt}'
      WHERE note_id = '${id}'
    `;
    connectionPool === null || connectionPool === void 0 ? void 0 : connectionPool.connect(async (err) => {
        if (err) {
            console.log(err);
        }
        else {
            const results = await (connectionPool === null || connectionPool === void 0 ? void 0 : connectionPool.request().query(query));
            console.log(results);
        }
    });
}
exports.updateNote = updateNote;
function deleteNote(id) {
    let indexofNote = notes.findIndex((note) => note.id === id);
    if (indexofNote < 0) {
        return null;
    }
    else {
        notes.splice(indexofNote, 1);
        return indexofNote;
    }
}
exports.deleteNote = deleteNote;

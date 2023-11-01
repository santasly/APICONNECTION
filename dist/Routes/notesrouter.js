"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notescontroller_1 = require("../Controllers/notescontroller");
const noterouter = (0, express_1.Router)();
noterouter.get('/', notescontroller_1.TestingRoute);
noterouter.get("/", notescontroller_1.getAllNotesController);
noterouter.get('/:noteID', notescontroller_1.getSpecificNoteController);
noterouter.delete("/:noteID", notescontroller_1.deleteNoteController);
noterouter.post("/", notescontroller_1.addNoteController);
noterouter.put("/:noteID", notescontroller_1.updateNoteController);
exports.default = noterouter;
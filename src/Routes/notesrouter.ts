import { Router, } from "express";
import { addNoteController, 
    TestingRoute,
         deleteNoteController,
         getAllNotesController,
         getSpecificNoteController,
         updateNoteController, } from "../Controllers/notescontroller";

const noterouter: Router  = Router()

noterouter.get('/', TestingRoute)
noterouter.get("/", getAllNotesController)
noterouter.get('/:noteID', getSpecificNoteController)
noterouter.delete("/:noteID", deleteNoteController)
noterouter.post("/", addNoteController)
noterouter.put("/:noteID", updateNoteController)





export default noterouter;
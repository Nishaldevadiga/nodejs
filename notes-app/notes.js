import fs from 'node:fs'
const getNotes = function () {
    return 'Your Notes....'
}

const addNote = function (title, body) {
    const notes=loadNotes();

    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes);
}

const saveNotes=function(notes){
   const data=JSON.stringify(notes);
   fs.writeFileSync('notes.json',data);   
}

const loadNotes = function () {

    try {
        const databuffer = fs.readFileSync('notes.json');
        const dataJSON = databuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        console.log("error", e);
    }

}

export {
    getNotes,
    addNote
};
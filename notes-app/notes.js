import fs from 'node:fs'
const getNotes = function () {
    return 'Your Notes....'
}

const addNote = function (title, body) {
    debugger
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
    } else {
        console.log("duplicates found")
    }


}

const saveNotes = function (notes) {
    const data = JSON.stringify(notes);
    fs.writeFileSync('notes.json', data);
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
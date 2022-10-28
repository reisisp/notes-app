import { db } from "../db/dexie-db";

export default class NotesService {
    async getNotesList() {
        const res = await db.notes.toArray();
        return res;
    }
    async addNewNote(title) {
        const res = await db.notes.add({
            title,
        });
        return res
    }
    async removeNoteByID(id) {
        await db.notes.delete(id);
    }
    async getNoteById(id) {
        const res = await db.notes.get(id);
        return res
    }
    async updateNoteById(id, changes) {
        const res = await db.notes.update(id, changes)
        return res
    }
}
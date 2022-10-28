import Dexie from 'dexie';

export const db = new Dexie('NotesList');
db.version(1).stores({
  notes: '++id, title'
});
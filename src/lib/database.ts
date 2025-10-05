import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'messages.db');
const db = new Database(dbPath);

// Create table if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    message TEXT NOT NULL,
    date TEXT NOT NULL,
    sentiment TEXT DEFAULT 'positive'
  )
`);

export const messageDB = {
  getPositive: () => {
    return db.prepare('SELECT * FROM messages WHERE sentiment = ? ORDER BY id DESC').all('positive');
  },
  
  getAll: () => {
    return db.prepare('SELECT * FROM messages ORDER BY id DESC').all();
  },
  
  add: (name: string, message: string) => {
    return db.prepare('INSERT INTO messages (name, message, date) VALUES (?, ?, ?)').run(
      name, message, new Date().toISOString()
    );
  },
  
  delete: (id: string) => {
    return db.prepare('DELETE FROM messages WHERE id = ?').run(id);
  }
};
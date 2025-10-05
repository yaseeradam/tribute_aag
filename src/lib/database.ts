import fs from 'fs';
import path from 'path';

interface Message {
  id: number;
  name: string;
  message: string;
  date: string;
  sentiment: string;
}

const dbPath = path.join(process.cwd(), 'messages.json');

const readMessages = (): Message[] => {
  try {
    if (!fs.existsSync(dbPath)) return [];
    return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  } catch {
    return [];
  }
};

const writeMessages = (messages: Message[]) => {
  fs.writeFileSync(dbPath, JSON.stringify(messages, null, 2));
};

export const messageDB = {
  getPositive: () => {
    return readMessages().filter(m => m.sentiment === 'positive').sort((a, b) => b.id - a.id);
  },
  
  getAll: () => {
    return readMessages().sort((a, b) => b.id - a.id);
  },
  
  add: (name: string, message: string) => {
    const messages = readMessages();
    const id = messages.length > 0 ? Math.max(...messages.map(m => m.id)) + 1 : 1;
    const newMessage = { id, name, message, date: new Date().toISOString(), sentiment: 'positive' };
    messages.push(newMessage);
    writeMessages(messages);
    return { changes: 1 };
  },
  
  delete: (id: string) => {
    const messages = readMessages();
    const filtered = messages.filter(m => m.id !== parseInt(id));
    writeMessages(filtered);
    return { changes: messages.length - filtered.length };
  }
};
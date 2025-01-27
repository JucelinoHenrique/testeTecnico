import fs from 'fs';
import path from 'path';

const filePath = path.resolve(__dirname, '../data/users.json');

export const readFile = (): any[] => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2), 'utf-8');
  }
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

export const writeFile = (data: any[]): void => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
};

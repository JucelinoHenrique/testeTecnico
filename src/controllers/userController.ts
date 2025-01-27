import { Request, Response } from 'express';
import { readFile, writeFile } from '../utils/fileHandler';

export const registerUser = (req: Request, res: Response): void => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ error: 'Username and password are required.' });
    return;
  }

  const users = readFile();
  const userExists = users.some((user) => user.username === username);

  if (userExists) {
    res.status(400).json({ error: 'User already exists.' });
    return;
  }

  users.push({ username, password });
  writeFile(users);
  res.status(201).json({ message: 'User registered successfully.' });
};

export const loginUser = (req: Request, res: Response): void => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ error: 'Usuario e senha são obrigatorios.' });
    return;
  }

  const users = readFile();
  const user = users.find((user) => user.username === username && user.password === password);

  if (!user) {
    res.status(401).json({ error: 'Usuario ou senha inválidos.' });
    return;
  }

  res.status(200).json({ message: 'Logado com sucesso!.' });
};

import { Request, Response } from 'express';
import { readFile, writeFile } from '../utils/fileHandler';
import { validatePassword } from '../utils/validation';

export const registerUser = (req: Request, res: Response): void => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    res.status(400).json({ error: 'Nome de usuário e senha são obrigatórios' });
    return;
  }

  if (!validatePassword(password)) {
    res.status(400).json({
      error:
        'A senha deve ter pelo menos 8 caracteres, uma letra maiúscula e um número.',
    });
    return;
  }

  const users = readFile();
  const userExists = users.some((user) => user.username === username);

  if (userExists) {
    res.status(400).json({ error: 'O usuário já existe.' });
    return;
  }

  users.push({ username, password });
  writeFile(users);
  res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
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

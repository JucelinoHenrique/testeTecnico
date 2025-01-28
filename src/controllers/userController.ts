import { Request, Response } from 'express';
import { readFile, writeFile } from '../utils/fileHandler';
import { validatePassword } from '../utils/validation';

export const registerUser = (req: Request, res: Response): void => {
  const { username, password } = req.body;

  // Validação de campos obrigatórios
  if (!username || !password) {
    res.status(400).json({ error: 'Nome de usuário e senha são obrigatórios.' });
    return;
  }

  // Validação da senha
  const passwordValidation = validatePassword(password);
  if (!passwordValidation.isValid) {
    res.status(400).json({
      error: 'A senha não atende aos requisitos:',
      details: passwordValidation.errors,
    });
    return;
  }

  // Verifica se o usuário já existe
  const users = readFile();
  const userExists = users.some((user) => user.username === username);

  if (userExists) {
    res.status(400).json({ error: 'O usuário já existe.' });
    return;
  }

  // Adiciona o novo usuário
  users.push({ username, password });
  writeFile(users);
  res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
};

export const loginUser = (req: Request, res: Response): void => {
  const { username, password } = req.body;

  // Validação de campos obrigatórios
  if (!username || !password) {
    res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
    return;
  }

  // Busca o usuário no arquivo
  const users = readFile();
  const user = users.find((user) => user.username === username && user.password === password);

  if (!user) {
    res.status(401).json({ error: 'Usuário ou senha inválidos.' });
    return;
  }

  res.status(200).json({ message: 'Logado com sucesso!' });
};

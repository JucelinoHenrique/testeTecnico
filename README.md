
# Sistema de Gerenciamento de Usuários

## 📖 Introdução
Este projeto é um sistema de gerenciamento de usuários com as seguintes funcionalidades:
- Cadastro de usuários com validação de senha.
- Login de usuários com autenticação básica.
- Armazenamento dos dados em um arquivo JSON (simulando um banco de dados).
- Conteinerização do backend usando Docker para facilitar o desenvolvimento e a implantação.

---

## 🚀 Funcionalidades do Backend

### Rotas Disponíveis

#### 📌 Cadastro de Usuário
- **Rota:** `POST /api/users/register`
- **Descrição:** Registra um novo usuário no sistema.
- **Regras de Negócio:**
  - O nome de usuário (`username`) é obrigatório e deve ser único.
  - A senha deve atender aos seguintes requisitos:
    - Pelo menos **8 caracteres**.
    - Pelo menos **1 letra maiúscula**.
    - Pelo menos **1 número**.

##### Exemplo de Requisição:
```json
{
  "username": "johndoe",
  "password": "Password123"
}
Exemplo de Resposta (Sucesso):
json
Copiar
Editar
{
  "message": "Usuário cadastrado com sucesso."
}
Exemplo de Resposta (Erro - Senha Inválida):
json
Copiar
Editar
{
  "error": "A senha não atende aos requisitos:",
  "details": [
    "A senha deve ter pelo menos 8 caracteres.",
    "A senha deve conter pelo menos uma letra maiúscula.",
    "A senha deve conter pelo menos um número."
  ]
}
📌 Login de Usuário
Rota: POST /api/users/login
Descrição: Autentica um usuário existente.
Regras de Negócio:
O nome de usuário e a senha são obrigatórios.
O nome de usuário e a senha devem corresponder a um registro existente.
Exemplo de Requisição:
json
Copiar
Editar
{
  "username": "johndoe",
  "password": "Password123"
}
Exemplo de Resposta (Sucesso):
json
Copiar
Editar
{
  "message": "Logado com sucesso!"
}
Exemplo de Resposta (Erro - Credenciais Inválidas):
json
Copiar
Editar
{
  "error": "Usuário ou senha inválidos."
}

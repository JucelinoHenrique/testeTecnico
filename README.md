
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
🛠️ Como Rodar o Projeto
🔧 Requisitos
Node.js: Certifique-se de ter o Node.js instalado na sua máquina.
Docker e Docker Compose: Para rodar o projeto em um ambiente conteinerizado.
▶️ Rodar com Node.js (Sem Docker)
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o servidor:

bash
Copiar
Editar
npm run dev
O servidor estará disponível em:

arduino
Copiar
Editar
http://localhost:3000
🐳 Rodar com Docker
Suba o contêiner:

bash
Copiar
Editar
docker-compose up --build
Acesse o backend:

O servidor estará disponível em:
arduino
Copiar
Editar
http://localhost:3000
Parar os contêineres:

bash
Copiar
Editar
docker-compose down
🔍 Testando a API
Use ferramentas como Postman ou Insomnia para testar as rotas disponíveis:

POST /api/users/register (Cadastro de Usuários)
POST /api/users/login (Login de Usuários)
Configure o API_URL no front-end (se houver) para http://localhost:3000.
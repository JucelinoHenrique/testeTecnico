# Usa uma imagem oficial do Node.js
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para o container
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código do projeto
COPY . .

# Expõe a porta do servidor (3000)
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "run", "dev"]

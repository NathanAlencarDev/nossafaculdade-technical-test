FROM node:20

WORKDIR /nossafaculdade

# Instala o netcat para o script start.sh
RUN apt-get update && apt-get install -y netcat-openbsd

# Instala o tsx globalmente para rodar arquivos .ts diretamente
RUN npm install -g tsx

# Copia dependências e schema do Prisma primeiro
COPY package*.json ./
COPY prisma ./prisma

# Instala as dependências
RUN npm install

# Gera os arquivos do Prisma
RUN npx prisma generate

# Copia o restante do projeto (componentes, pages, etc.)
COPY . .

# Expõe a porta da aplicação
EXPOSE 3000

# Comando de inicialização
CMD ["sh", "./start.sh"]

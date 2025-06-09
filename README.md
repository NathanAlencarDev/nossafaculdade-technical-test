# 📘 Teste Técnico UNIFAMEC

Este projeto é um **site institucional responsivo** desenvolvido com **Next.js**, com o objetivo de simular a venda de cursos online, inspirado no site da [UNIFAMEC Cariri](https://unifameccariri.com.br). Inclui um **CMS com autenticação protegida por JWT** para gerenciar cursos, imagens e dados relevantes.

---

## 🚀 Tecnologias Utilizadas

- **Next.js** – Framework para React com renderização híbrida.
- **TailwindCSS** – Utilizado para estilização rápida e responsiva.
- **Prisma ORM** – Comunicação com banco de dados PostgreSQL.
- **PostgreSQL** – Banco de dados relacional.
- **Docker + Docker Compose** – Containerização da aplicação e banco.
- **JWT (jsonwebtoken)** – Autenticação segura com tokens.
- **Zod** – Validação de dados no backend.
- **React Hook Form + Zod** – Validação de formulários no frontend.

---

## 📄 Funcionalidades

### 🏠 Página Inicial

- Banner com chamada para ação.
- Seção de benefícios ao adquirir os cursos.
- Lista de cursos populares (com imagem, título e preço).
- Depoimentos simulados de alunos.
- Navegação para a página "Sobre Nós".

### 🎓 Listagem de Cursos

- Exibe todos os cursos cadastrados.
- Permite busca por nome e filtro por categoria.

### 📋 Detalhes do Curso

- Página individual com: nome, descrição, conteúdo, preço, imagem, modalidade e duração.
- Botão "Comprar Agora" que simula a ação com redirecionamento para página de agradecimento.

### 🔐 CMS Administrativo

- Autenticação com login via JWT.
- Dashboard com painel administrativo.
- CRUD completo de cursos:
  - Criar, editar e excluir cursos.
  - Upload e exibição de imagem.
- Interface protegida com middleware que impede acesso sem token.

### 📄 Páginas Institucionais

- **Sobre Nós** – Informações institucionais da empresa.
- **Contato** – Formulário funcional com campos validados (nome, e-mail, mensagem).

---

## 🧱 Organização de Código

- `app/` – Estrutura de páginas com roteamento nativo do Next.js.
- `app/api/` – Rotas da API interna protegidas com validações.
- `components/` – Componentes reutilizáveis como Header, Footer e Cards.
- `lib/` – Funções utilitárias (autenticação, formatação, prisma).
- `prisma/` – Esquema do banco e arquivos de seed.
- `middleware.ts` – Middleware para proteger rotas administrativas.

---

Claro! Vou complementar a explicação do `start.sh` com o passo de dar permissão de execução usando `chmod +x`, que é fundamental para o script rodar sem erros no Docker.

Aqui está o trecho atualizado para você adicionar no README:

---

## 🐳 Script `start.sh` — Como funciona e por que usar

### Passo a passo do `start.sh`:

1. **Dar permissão de execução ao script**
   Antes de rodar o script dentro do container, é necessário garantir que ele tenha permissão de execução.
   Para isso, na sua máquina local, execute:

   ```bash
   chmod +x start.sh
   ```

   Ou, se quiser garantir dentro do Dockerfile, adicione a linha:

   ```dockerfile
   RUN chmod +x ./start.sh
   ```

   Isso evita erros do tipo “Permission denied” ao tentar executar o script.

2. **Aguarda o banco de dados ficar disponível**
    Utiliza o comando nc (netcat) para tentar se conectar ao serviço do PostgreSQL na porta 5432, no host db (nome do serviço do banco no docker-compose).
    Ele fica em loop tentando a conexão a cada 3 segundos até que o banco esteja pronto para aceitar conexões.
    Isso evita erros de conexão se o banco ainda estiver inicializando.

3. **Gera o cliente Prisma**
    Roda npx prisma generate para garantir que o Prisma ORM tenha os arquivos atualizados conforme o schema, permitindo a comunicação correta com o banco.

4. **Aplica migrations no banco de dados**
    Executa npx prisma migrate deploy para aplicar as migrations pendentes, mantendo o banco atualizado com a estrutura definida no projeto.

5. **Executa os seeds**
    Roda os scripts TypeScript (prisma/seed.ts e prisma/seedUser.ts) usando o tsx para popular o banco com dados iniciais, essenciais para o funcionamento da aplicação e testes.

6. **Inicia o servidor Next.js**
    Finalmente, o script dispara o comando npm run dev para subir o servidor de desenvolvimento Next.js.

---

## 🔐 Autenticação (CMS)

* O login é feito via `/admin/login` com verificação de email e senha.
* Se autenticado, o sistema retorna um **token JWT** e armazena no cookie `HttpOnly`.
* Rotas protegidas usam `middleware.ts` e validações manuais via `verifyJwtToken`.

---

## 📂 Scripts Disponíveis

```bash
npm run start-dev       # Inicia o servidor Next.js em modo de desenvolvimento
npm run build           # Gera o build de produção
npm run start           # Inicia a aplicação em modo de produção
npm run lint            # Executa o linter
npm run seed            # Executa o seed geral (cursos, etc.)
npm run seedUser        # Executa seed específico de usuários (admin, etc.)
```

---

## 🧪 Validações

* Backend: `zod` garante a integridade dos dados (como criação de curso).
* Frontend: `React Hook Form + Zod` para validação antes do envio dos dados.

---

## 📸 Imagens

Todas as imagens foram extraídas do site original da UNIFAMEC e utilizadas apenas para fins de produção do projeto.

---

## ✅ Requisitos Atendidos

* [x] Layout baseado no site original
* [x] CRUD completo de cursos
* [x] CMS com autenticação JWT
* [x] Página pública, responsiva e bem estruturada
* [x] Organização e documentação do código
* [x] Uso de Docker + Scripts automatizados
* [x] Uso de tecnologias solicitadas no desafio

---

## 📬 Contato

Projeto desenvolvido por **Nathan Alencar** como parte de um desafio técnico.

📧 Email: [nathanalencar777@email.com](mailto:nathanalencar777@email.com)
🔗 GitHub: [github.com/NathanAlencarDev](https://github.com/NathanAlencarDev)


# Biblioteca API DDD

API de biblioteca escolar desenvolvida com **NestJS**, **Prisma** e **MySQL**.  
Possui autenticação JWT, controle de papéis de usuário, CRUD de livros e fluxo de empréstimo/devolução.  

---

## 🔧 O que foi usado?

- [Node.js 18+](https://nodejs.org/)  
- [MySQL 8+](https://www.mysql.com/)  
- [Postman](https://www.postman.com/)  

---

##  Instalação

```bash
# Clone o projeto
git clone https://github.com/seu-usuario/biblioteca-api.git
cd biblioteca-api

# Instale as dependências
npm install
```

---

## Config

Crie um arquivo **`.env`** na raiz com as variáveis:

```env
DATABASE_URL="mysql://root:senha@localhost:3306/biblioteca"
JWT_SECRET="chave_secreta"
```

Depois rode os comandos do Prisma:

```bash
npx prisma migrate dev
npx prisma generate
```

---

##  Como executar?

```bash
# Modo desenvolvimento
npm run start:dev
```

---

## Endpoints principais

## Autenticação
- `POST /auth/register` → cria usuário  
- `POST /auth/login` → login e retorna token 

###  Usuários
- `GET /users` → lista usuários (restrito)  
- `GET /users/:id` → detalhes de um usuário  

###  Livro
- `GET /books` → lista livros  
- `POST /books` → cria livro (admin)  
- `PATCH /books/:id` → atualiza livro  
- `DELETE /books/:id` → remove livro  

### 🔄 Empréstimo
- `POST /loans/borrow` → faz empréstimo  
- `POST /loans/return` → devolve livro  

---

## 🧪 Testes
## Na minha maquina rodou professor akakakakakak



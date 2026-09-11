# API Estacionamento
API de exemplo com objetivo educaional, para aulas de desenvolvimento Back-end.
Representa dados de um estacionamento.

## Tecnologias
- [VsCode](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/)
- [Prisma](https://www.prisma.io/)
- [Postgres](https://www.postgresql.org/)
- [Vercel](https://vercel.com/)

## Rotas
```js
{
  message: "API estacionamento online",
  rotas: [
    { rota: "/", verbo: "GET" },
    { rota: "/veiculo/cadastrar", verbo: "POST" },
    { rota: "/veiculo/listar", verbo: "GET" },
    { rota: "/veiculo/buscar/:placa", verbo: "GET" },
    { rota: "/veiculo/atualizar/:placa", verbo: "PUT" },
    { rota: "/veiculo/excluir/:placa", verbo: "DELETE" },
    { rota: "/estadia/cadastrar", verbo: "POST" },
    { rota: "/estadia/listar", verbo: "GET" },
    { rota: "/estadia/buscar/:id", verbo: "GET" },
    { rota: "/estadia/atualizar/:id", verbo: "PUT" },
    { rota: "/estadia/excluir/:id", verbo: "DELETE" }
  ]
}
```
- Não possui autenticação, é competamente livre.

## Para testar localmente
- 1 Clone este repositório
- Abra com vscode e em um terminal, instale as dependências e o banco de dados
```bash
npm i
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```
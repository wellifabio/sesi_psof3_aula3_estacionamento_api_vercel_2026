require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const estadiaRoutes = require("../src/routes/estadia.routes");
app.use("/estadia", estadiaRoutes);

const veiculoRoutes = require("../src/routes/veiculo.routes");
app.use("/veiculo", veiculoRoutes);

const rotas = {
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

app.get("/", (req, res) => {
  res.json(rotas);
});

module.exports = app;

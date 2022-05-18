import express from "express";
import { routes } from "./routes";
import cors from 'cors'

const app = express();

// Não permitir que clientes inadequados acessem a API
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("HTTP server running");
});

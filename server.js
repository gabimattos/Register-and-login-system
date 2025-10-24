import express from "express";
import publicRoutes from "./routes/public.js"; // na hora de importar posso dar o nome que quiser, ex "publicRoutes"

const app = express();
const port = 3000;
app.use(express.json());
app.use('/', publicRoutes);


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});

//usuario: gabriela
//senha 2SNgGYxFNATX2CYS
//connection string: mongodb+srv://gabriela:2SNgGYxFNATX2CYS@users.c1o5wlr.mongodb.net/?appName=Users
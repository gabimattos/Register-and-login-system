import express from "express";
import publicRoutes from "./routes/public.js"; // na hora de importar posso dar o nome que quiser, ex "publicRoutes"
import privateRoutes from "./routes/private.js";
import cors from "cors";
import auth from "./middleware/auth.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.use('/', publicRoutes);
app.use('/', auth, privateRoutes);


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});


import express from "express"
import dotenv from "dotenv"
import cors from "cors";

import { connectDB } from "./config/database.js"
import { create } from "./controllers/create.js"
import { findAll } from "./controllers/findAll.js"
import { deleteId } from "./controllers/delete.js"

dotenv.config()

const app = express()
app.use(express.json())

connectDB();

app.use(cors());

app.get("/", async (req, res) => {
    try {
        const all = await findAll();
        res.status(200).json({all});
    } catch (error) {
        console.error("Erro: ", error);
        res.status(500).json({ error: "Erro interno do servidor" });  
    }
})

app.post("/", async (req, res) => {
    try {
        await create(req.body)
        res.status(201).end();
    } catch (error) {
        res.status(500).json({"Erro": error});
    }
});

app.delete("/:id", async (req, res) => {
    try {
        await deleteId(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({"Erro": error});
    }
})

app.listen(process.env.PORT || "4000", () => {
    console.log(`Rodandando na porta ${process.env.PORT? process.env.PORT : "4000" }`)
})
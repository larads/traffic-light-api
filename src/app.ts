import expres from "express";

const app = expres()
app.use(expres.json());

let emergencyTriggered = false;


app.post("/emergency", (req, res) => {
    try {
        emergencyTriggered = true;
        console.log("🚨 Emergência acionada!");
        console.log("Status atual:", { emergency: emergencyTriggered });
        res.status(200).json({ message: "Emergência acionada com sucesso!" });
    } catch (error) {
        console.error("❌ Erro ao acionar emergência:", error);
        res.status(500).json({ error: "Erro ao acionar emergência" });
    }
});

app.get("/status", (req, res) => {
    res.status(200).json({ emergency: emergencyTriggered });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
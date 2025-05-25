import expres from "express";

const app = expres()
app.use(expres.json());

let emergencyTriggered = false;


app.post("/emergency", (req, res) => {
    emergencyTriggered = true;
    console.log("🚨 Emergência acionada!");
    res.status(200).json({ message: "Emergência acionada com sucesso!" });
});

app.get("/status", (req, res) => {
    res.status(200).json({ emergency: emergencyTriggered });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
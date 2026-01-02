import express from "express";

const app = express();

app.get("/api/notes", (req,res) => {
    res.status(200).send("test");
});

app.post("/api/notes", (req,res) => {
    res.status(201).json({message:"hiiiiiiiiiiiii"})
});

app.put("/api/notes/:id", (req,res) => {
    res.status(200).json({message:"eeeeeeeeeeee"})
});

app.delete("/api/notes/:id", (req,res) => {
    res.status(200).json({message:"bye"})
});


app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/load-files", (req, res) => {
    //res.send("Filename");
    res.json([
        {filename : "Unit 1", type : "mp4"},
        {filename : "Unit 2", type : "mp4"},
        {filename : "Unit 3", type : "mp4"},
        {filename : "Unit 4", type : "mp4"},
        {filename : "Unit 5", type : "mp4"},
        {filename : "Unit 6", type : "mp4"},
        {filename : "Unit 7", type : "mp4"},
        {filename : "Unit 8", type : "mp4"},
    ]);
});

app.listen(3000, "0.0.0.0", () => console.log("\x1b[32mServer running...\x1b[0m"));

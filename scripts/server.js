import express from "express";

const app = express();

app.get("load-files", (req, res) =>  {
    res.send("<div class='file-item'>File</div>");
});

app.listen(3000, () => console.log("Running..."))ko
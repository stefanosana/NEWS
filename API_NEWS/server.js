const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(cors());
const APIkey = process.env.API_KEY;
app.get("/business", async (req, res) => {
  try {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${APIkey}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Errore durante il recupero delle notizie principali:", error);
    res.status(500).json({ error: "Si è verificato un errore" });
  }
});
const port = process.env.PORT || 3000;

app.get("/BBC", async (req, res) => {
  try {
    const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${APIkey}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Errore durante il recupero delle notizie principali:", error);
    res.status(500).json({ error: "Si è verificato un errore" });
  }
});
app.get("/index", async (req, res) => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIkey}`;
      const response = await fetch(url);
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Errore durante il recupero delle notizie principali:", error);
      res.status(500).json({ error: "Si è verificato un errore" });
    }
  });
  app.get("/Politica", async (req, res) => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?category=politics&language=en&apiKey=${APIkey}`;
      const response = await fetch(url);
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Errore durante il recupero delle notizie principali:", error);
      res.status(500).json({ error: "Si è verificato un errore" });
    }
  });
  app.get("/Medicine", async (req, res) => {
    try {
      const url = `https://newsapi.org/v2/everything?q=medicine&apiKey=${APIkey}`;
      const response = await fetch(url);
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Errore durante il recupero delle notizie principali:", error);
      res.status(500).json({ error: "Si è verificato un errore" });
    }
  });
  app.get("/Sport", async (req, res) => {
    try {
      const url = `https://newsapi.org/v2/everything?q=sport&apiKey=${APIkey}`;
      const response = await fetch(url);
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Errore durante il recupero delle notizie principali:", error);
      res.status(500).json({ error: "Si è verificato un errore" });
    }
  });


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
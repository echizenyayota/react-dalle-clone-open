const PORT = 8000;
const OpenAI = require('openai');
const express = require("express");
const cors = require("cors");
// If you set environment variable process.env.OPENAI_API_KEY,
// the env variable will be automatically picked.
const openai = new OpenAI();
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Testing whether the API works"
  });
});

app.post("/images", async (req, res) => {
  try {
    const image = await openai.images.generate({ 
      model: "dall-e-3", 
      prompt: "A cute baby sea otter" 
    });
    console.log(response.data.data);
    res.send(response.data.data);
  } catch(error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log("Your server is running on PORT " + PORT));

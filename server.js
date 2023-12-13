const PORT = 8000;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Testing whether the API works"
  });
});

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


app.post("/images", async(req, res) => {
  try {
    const response = await oepnai.createImage({
      prompt: "A cute baby sea otter",
      n: 2, 
      size: "1024×1024",
    });
    console.log(response);
    res.send(response.data.data);
  } catch(error) {
    console.error(error);
  }
  
});

app.listen(PORT, () => console.log("Your server is running on PORT " + PORT));

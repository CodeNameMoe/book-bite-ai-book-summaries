import "./dist/index";

import { Configuration, OpenAIApi } from "openai";

import bodyParser from "body-parser";
import express, { json } from "express";
import cors from "cors";
import {} from "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3001;

const configuration = new Configuration({
  organization: "org-KgAuoMkFZctIZVmKBVcjdHqY",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
  const { message } = req.body;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Pretend that you are a book summarizer. Please give me a short summary that is concise and includes an overview of the main ideas and plot points of the book "${message}" in under 400 characters`,
    max_tokens: 100,
    temperature: 0,
  });
  console.log(response.data);
  if (response.data.choices[0].text) {
    res.json({ message: response.data.choices[0].text });
  }
});

app.listen(PORT, () => console.log(`App listening at ${PORT}`));

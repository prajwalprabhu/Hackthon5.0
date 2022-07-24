import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { addData, connectDb, getData } from "./connectDB";
import { Hash } from "crypto";
import Neon from "@cityofzion/neon-js";
import { QuerySelector } from "mongoose";

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 8000;
connectDb().then();
app.post("/login", async (req, res) => {
  let data = req.body;
  console.log(data);

  let saved_data = await getData(data.pkey);
  if (saved_data == null) {
    res.json({ error: 1 }); //user not found
  } else {
    if (saved_data.name === data.name && saved_data.pswd === data.pswd) {
      res.json({ error: 0 }); // user confirmed
    } else {
      res.json({ error: 2 }); //wrong password || name 
    }
  }
});

app.post("/signup", async (req, res) => {
  let data = req.body;
  console.log(data);

  let saved_data = await getData(data.pkey);
  if (saved_data == null) {
    await addData(data);
    res.json({ error: 0 });
  } else {
    res.json({ error: 1 });
  }
});

app.get("/getdata", async (req, res) => {
  let data = req.body;
  let _data = await getData(data.pkey);
  res.json(_data);
});
app.get("/dashboard", async (req, res) => {
  let { pkey } = req.body;
  let data = await getData(pkey);
  //   const query = Neon.create.query({ method:"newmethod", params: [] });
  // const response = query.execute("http://mycustomneonode.com:10332");

  // Custom query (used for methods not supported by implementation)
});
app.listen(PORT, async () => {
  console.log(`Server running at ${PORT}`);
});

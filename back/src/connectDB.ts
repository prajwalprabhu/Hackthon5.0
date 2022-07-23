import mongoose, { mongo } from "mongoose";
import { User } from "./model";
const USER = process.env.USER || "prajwalprabhu";
const PSWD = process.env.PSWD || "82Bw7uDV6FOu3Tjr";
export async function connectDb() {
  await mongoose.connect(
    `mongodb+srv://prajwalprabhu:${PSWD}@cluster0.ifmhy.mongodb.net/?retryWrites=true&w=majority`
  );
  mongoose.createConnection;
}

export async function getData(pkey: string) {
  let data = await User.findOne({ pkey: pkey });
  return data;
}
export async function addData(data: {
  name: number;
  pkey: string;
  pswd: string;
  files?: [Buffer];
  isCreator?: boolean;
  isConsumer?: boolean;
}) {
  await User.create({
    name: data.name,
    pkey: data.pkey,
    pswd: data.pswd,
    files: data.files,
    isConsumer: data.isConsumer,
    isCreator: data.isCreator,
  });
  
}

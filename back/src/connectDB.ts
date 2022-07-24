import mongoose, { mongo } from "mongoose";
import { User } from "./model";
// const USER = process.env.USER;
// const PSWD = process.env.PSWD;
export async function connectDb() {
  await mongoose.connect(
    `mongodb+srv://prajwalprabhu:82Bw7uDV6FOu3Tjr@cluster0.ifmhy.mongodb.net/?retryWrites=true&w=majority`
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

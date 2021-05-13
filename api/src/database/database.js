import mongoose from "mongoose";

import dotenv from "dotenv";
import path from "path";


const {resolve, join} = path;

dotenv.config({
  path: join(resolve(), "./src/config/", ".env"),
});

const uri = process.env.MONGODB_CONNECTION
const database = mongoose;

database
  .connect( uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("conectado ao DB!"))
  .catch((err) => {
    console.log(`Não foi possível conectar no DB.  ${err}`)
  });

export default database;
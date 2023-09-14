import mongoose from "mongoose"

export const testDbConnection = () => {
  mongoose.connect(`mongodb+srv://test:${process.env.TEST_DB_PASSWORD}@cluster0.yudbvpn.mongodb.net/`)
}

export const testDbDisconnect = () => {
  mongoose.disconnect()
}

export const testDbClear = async () => {
  const collections = mongoose.connection.collections;
   for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
   }
}

export const dbConnection = () => {
  mongoose.connect(`mongodb+srv://user:user@cluster0.gshiwjb.mongodb.net/?retryWrites=true&w=majority`)
}

export const dbDisconnect = () => {
  mongoose.disconnect()
}

export const dbClear = async () => {
  const collections = mongoose.connection.collections;
   for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
   }
}

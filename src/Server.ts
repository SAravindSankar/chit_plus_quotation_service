import "reflect-metadata";
import app from "./App";
import { connectDB } from "./config/Database";

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

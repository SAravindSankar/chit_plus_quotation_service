import "reflect-metadata";
import app from "./App";
import { connectDB } from "./config/Database";
import properties from "./config/Properties";

const PORT = properties.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

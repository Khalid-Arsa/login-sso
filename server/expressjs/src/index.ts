import { config } from "./config"
import { server } from "./server";

const PORT = config.port || 5000;

server.listen(PORT, async () => {
  console.log(`The server is listening on port ${PORT}`)
});
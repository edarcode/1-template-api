import { SERVER_ON } from "./server/consts";
import { PORT } from "./server/envs";
import { server } from "./server/server";

server.listen(PORT, () => console.log(SERVER_ON));

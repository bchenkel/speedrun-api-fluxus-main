import { server } from "./server";

server.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
});

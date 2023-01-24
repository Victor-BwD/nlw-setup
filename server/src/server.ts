import Fastify from "fastify";
import cors from '@fastify/cors'
import { appRoutes } from "./routes";

const app = Fastify()


app.register(cors) // Faz com que qualquer aplicação consuma dados do back-end
app.register(appRoutes)


app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server is running!')
})
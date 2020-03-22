import * as express from 'express'
import { Application } from 'express'
const app = express()
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send("OK")
})
app.listen(port, () => {
  console.log("Listening")
})
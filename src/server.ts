import * as express from 'express'
import * as os from "os"
import { Application } from 'express'
const app = express()
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
var count = 0;

app.get('/', (req: express.Request, res: express.Response) => {
  res.json({ Hostname: os.hostname(), "count": ++count });
})
app.listen(port, () => {
  console.log("Listening")
})
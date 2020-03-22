import * as express from 'express'
import * as redis from "redis";
import * as os from "os"
import { promisify } from "util";
import { Application } from 'express'
const app = express()
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const redisConfig = {
  url: process.env.REDIS_URL ||"redis://localhost",
}
const client = redis.createClient(redisConfig);
var getAsync = promisify(client.get).bind(client);
var setAsync = promisify(client.set).bind(client);

app.get('/', async (req: express.Request, res: express.Response) => {
  var count: number = await getAsync("count");

  await setAsync('count', ++count );
  res.json({ Hostname: os.hostname(), "count": count });
})
app.listen(port, () => {
  console.log("Listening")
})
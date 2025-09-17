import { readFile } from "fs/promises";
import { createServer, get } from "http";
import path from "path";
import crypto from "crypto";

const PORT = process.env.PORT || 3000;

const server = createServer(async (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      try {
        const data = await readFile(path.join("public", "index.html"));
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } catch (error) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("page not found");
      }
    }
  }
  const loadlinks = async () => {
    try {
      const data = await readFile(url, "utf-8");
      return JSON.parse(data);
    } catch (error) {}
  };
  if (req.method === "POST" && req.url === "/shorten") {
    const links = await loadlinks();
    const body = "";
    req.on("data", (chunk) => {
      const body = body + chunk;
    });
    req.on("end", () => {
      console.log(body);
      const { url, shortcode } = JSON.parse(body);
      if (!url) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("URL is required");
      }
      const finalshortcode =
        shortcode || crypto.getRandomBytes(4).toString("hex");
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// const DATA_FILE = path.join("data","links.json")
// app.use(express.static("public"));

// const app = express();

// const savelinks=async(links)=>{
// await fs.writeFile(DATA_FILE,JSON.stringify(links))
// }

// const loadLinks=async()=>{

// }

// app.get("/",async(req,res)=>{
// try {
//     const file = await fs.readFile(path.join("public","index.html"));
//     const links = await loadLinks();
// } catch (error) {
//    console.error(error)
//    return res.status(500).send("INternal server error");
// }
// })

// app.post("/",(req,res)=>{
// try {
//     const {url,shortcode}= req.body;
//     const finalshortcode = shortcode||crypto.randomBytes(4).toString("hex");
// if (links[finalshortcode]) {
//     res.writeHead(400,{"content-type":"text/plain"});
//     return res.end("Short code already exist. PLease choose another")
// }

// } catch (error) {

// }
// })

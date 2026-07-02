const http = require("http");
const fs = require("fs");
const path = require("path");

const rootDir = __dirname;
const databaseDir = path.join(rootDir, "database");
const port = Number(process.env.PORT || 4174);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

fs.mkdirSync(databaseDir, { recursive: true });

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://localhost:${port}`);

  if (req.method === "GET" && requestUrl.pathname === "/api/records") {
    sendJson(res, 200, { ok: true, records: loadRecordsFromDatabase() });
    return;
  }

  if (req.method === "POST" && requestUrl.pathname === "/api/records") {
    readJsonBody(req)
      .then((body) => {
        const records = Array.isArray(body.records) ? body.records : [];
        syncDatabase(records);
        sendJson(res, 200, { ok: true, records: records.length });
      })
      .catch((error) => {
        sendJson(res, 400, { ok: false, error: error.message });
      });
    return;
  }

  if (req.method === "GET" && requestUrl.pathname === "/api/health") {
    sendJson(res, 200, { ok: true });
    return;
  }

  serveStatic(requestUrl.pathname, res);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Property manager app running at http://localhost:${port}/index.html`);
});

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 10 * 1024 * 1024) {
        reject(new Error("Request body is too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function loadRecordsFromDatabase() {
  const indexPath = path.join(databaseDir, "index.json");

  if (!fs.existsSync(indexPath)) {
    return [];
  }

  try {
    const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));
    return (index.records || [])
      .map((item) => {
        const recordPath = path.join(databaseDir, item.folderName, "record.json");
        if (!fs.existsSync(recordPath)) return null;
        const recordData = JSON.parse(fs.readFileSync(recordPath, "utf8"));
        return recordData.record;
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}

function syncDatabase(records) {
  fs.mkdirSync(databaseDir, { recursive: true });

  const activeFolderNames = new Set();
  const index = records.map((record) => {
    const folderName = sanitizeFolderName(record.address || "Untitled Property");
    activeFolderNames.add(folderName);
    const folderPath = path.join(databaseDir, folderName);
    fs.mkdirSync(folderPath, { recursive: true });

    const recordData = {
      propertyName: record.address || "Untitled Property",
      addressKey: record.addressKey || "",
      activeTasks: Array.isArray(record.tasks)
        ? record.tasks.filter((task) => !task.completedAt).length
        : 0,
      archivedTasks: Array.isArray(record.tasks)
        ? record.tasks.filter((task) => task.completedAt).length
        : 0,
      updatedAt: new Date().toISOString(),
      record,
    };

    fs.writeFileSync(
      path.join(folderPath, "record.json"),
      JSON.stringify(recordData, null, 2),
      "utf8",
    );

    return {
      propertyName: recordData.propertyName,
      folderName,
      activeTasks: recordData.activeTasks,
      archivedTasks: recordData.archivedTasks,
      updatedAt: recordData.updatedAt,
    };
  });

  for (const item of fs.readdirSync(databaseDir, { withFileTypes: true })) {
    if (item.isDirectory() && !activeFolderNames.has(item.name)) {
      fs.rmSync(path.join(databaseDir, item.name), { recursive: true, force: true });
    }
  }

  fs.writeFileSync(
    path.join(databaseDir, "index.json"),
    JSON.stringify({ updatedAt: new Date().toISOString(), records: index }, null, 2),
    "utf8",
  );
}

function sanitizeFolderName(value) {
  const cleaned = String(value)
    .trim()
    .replace(/[<>:"/\\|?*]+/g, " ")
    .replace(/\s+/g, " ")
    .slice(0, 120);

  return cleaned || "Untitled Property";
}

function serveStatic(urlPath, res) {
  const requested = decodeURIComponent(urlPath === "/" ? "/index.html" : urlPath);
  const fullPath = path.resolve(rootDir, `.${requested}`);

  if (!fullPath.startsWith(rootDir) || !fs.existsSync(fullPath) || fs.statSync(fullPath).isDirectory()) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  const ext = path.extname(fullPath).toLowerCase();
  res.writeHead(200, { "content-type": contentTypes[ext] || "application/octet-stream" });
  fs.createReadStream(fullPath).pipe(res);
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { "content-type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

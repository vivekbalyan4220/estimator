const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const { PythonShell } = require("python-shell");
const path = require("path");

const app = express();
app.use(cors());

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

let uploadImage;
let fn;

app.post("/upload", upload.single("image"), (req, res) => {
  uploadImage = req.file;
  fn = uploadImage.filename;
  res.send("Single File upload success");
  let options = {
    script: "./",
    args: [fn],
  };
  PythonShell.run("measure_object_size.py", options, (err, res) => {
    if (err) console.log(err);
    if (res) console.log(res);
  });
});
app.get("/measure", (req, res) => {
  const imagePath = path.join(__dirname, `measured/${fn}`);
  const imageData = fs.readFileSync(imagePath);

  res.setHeader("Content-Type", "image/jpeg");
  res.setHeader("Content-Length", imageData.length);
  res.setHeader("Content-Disposition", "attachment; filename=image.jpg");

  res.send(imageData);
});
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});
app.listen(5000, () => console.log("server is running on 5000 port"));

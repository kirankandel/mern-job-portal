const multer = require('multer');
const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { promisify } = require("util");

const pipeline = promisify(require("stream").pipeline);

const router = express.Router();


const upload = multer({ dest: './public/' })

router.post("/resume", upload.single("file"), (req, res) => {
  const { file } = req;
  console.log(file," file")
  if(file){
    const filename = `${uuidv4()}${file.detectedFileExtension}`;
    pipeline(
      file.stream,
      fs.createWriteStream(`${__dirname}/../public/resume/${filename}`)
    )
    .then(() => {
      res.send({
        message: "File uploaded successfully",
        url: `/host/resume/${filename}`,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: "Error while uploading",
      });
    });
  }else{
    res.status(400).json({
      message: "Please upload a File",
    });
  }
});

router.post("/profile", upload.single("file"), (req, res) => {
  console.log(req," req")
  const { file } = req;
  if(file){

    const filename = `${uuidv4()}${file.detectedFileExtension}`;

    pipeline(
      file.stream,
      fs.createWriteStream(`${__dirname}/../public/profile/${filename}`)
    )
    .then(() => {
      res.send({
        message: "Profile image uploaded successfully",
        url: `/host/profile/${filename}`,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: "Error while uploading",
      });
    });
  }else{
    res.status(400).json({
      message: "Please upload a Photo",
    });
  }
});

module.exports = router;

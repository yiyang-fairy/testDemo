const express = require("express");
const multer = require("multer");
const router = express.Router();

// 创建一个 Multer 实例，配置存储到内存中
const upload = multer({
  storage: multer.memoryStorage(),
});

// 上传文件
router.post("/", upload.single("file"), function (req, res, next) {
  // 获取上传的文件数据
  const file = req.file;
  file.originalname = decodeURIComponent(file.originalname);
  console.log(file, "file");

  // 对文件进行处理，如保存到数据库或进行其他操作
  // 这里只是简单地将文件信息返回给客户端
  res.json({ filename: file.originalname, size: file.size });
});

module.exports = router;

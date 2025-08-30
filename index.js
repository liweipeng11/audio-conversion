const express = require('express');
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
ffmpeg.setFfmpegPath(ffmpegPath);
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/convert', upload.single('audio'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('未上传文件');
  }

  const inputPath = req.file.path;
  const outputPath = path.join(__dirname, 'converted', `${Date.now()}.${req.body.format}`);
  
  ffmpeg(inputPath)
    .toFormat(req.body.format)
    .on('error', (err) => {
      console.error(err);
      res.status(500).send('转换失败');
    })
    .on('end', () => {
      res.download(outputPath);
    })
    .save(outputPath);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});

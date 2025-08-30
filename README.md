# Node.js 音频转换器

一个基于 Node.js 和 Express 的简单音频转换工具，支持多种音频格式转换。

## 功能特性

- 支持 MP3、WAV、OGG 格式转换
- 基于 Web 的友好界面
- 自动下载转换后的文件
- 使用 ffmpeg-static 内置 FFmpeg，无需单独安装

## 技术栈

- **后端**: Node.js + Express
- **音频处理**: fluent-ffmpeg + ffmpeg-static
- **文件上传**: multer
- **前端**: 原生 HTML/CSS/JavaScript

## 安装和使用

1. 克隆项目并安装依赖：
```bash
npm install
```

2. 启动服务器：
```bash
node index.js
```

3. 打开浏览器访问：http://localhost:3001

## API 接口

### POST /convert
音频转换接口

**参数**:
- `audio`: 音频文件 (multipart/form-data)
- `format`: 目标格式 (mp3/wav/ogg)

**响应**: 返回转换后的音频文件下载

## 项目结构

```
audio-conversion/
├── index.js          # 服务器主文件
├── package.json      # 项目配置
├── public/
│   └── index.html    # 前端页面
├── uploads/          # 临时上传文件目录
└── converted/        # 转换后文件目录
```

## 支持的格式

- **输入格式**: 所有 FFmpeg 支持的音频格式
- **输出格式**: MP3, WAV, OGG

## 注意事项

- 大文件转换可能需要较长时间
- 转换质量取决于原始文件质量
- 确保有足够的磁盘空间存储临时文件

## 开发说明

项目使用现代 JavaScript 语法，兼容 Node.js 12+ 版本。所有依赖均为最新稳定版本。
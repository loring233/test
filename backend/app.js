const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const diaryRoutes = require('./routes/diary');

// 加载环境变量
dotenv.config();

// 创建 Express 应用
const app = express();

// 启用 CORS（允许跨域请求）
app.use(cors());

// 解析 JSON 请求体
app.use(express.json());

// 连接 MongoDB 数据库
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// 加载路由
app.use('/api/auth', authRoutes); // 用户认证路由
app.use('/api/diary', diaryRoutes); // 日记相关路由

// 启动服务器
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
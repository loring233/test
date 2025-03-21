const mongoose = require('mongoose');

const diarySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // 关联用户
    content: { type: String, required: true }, // 日记内容
    mood: { type: String, required: true }, // 心情
    date: { type: Date, default: Date.now }, // 日记日期
});

module.exports = mongoose.model('Diary', diarySchema);
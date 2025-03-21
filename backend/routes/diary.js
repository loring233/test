const express = require('express');
const Diary = require('../models/Diary');
const authMiddleware = require('../middleware/auth'); // 用于验证 JWT
const router = express.Router();

// 获取日记列表
router.get('/', authMiddleware, async (req, res) => {
    try {
        const diaries = await Diary.find({ userId: req.user.id });
        res.json(diaries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 创建日记
router.post('/', authMiddleware, async (req, res) => {
    const { content, mood } = req.body;
    try {
        const diary = new Diary({ userId: req.user.id, content, mood });
        await diary.save();
        res.status(201).json(diary);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 删除日记
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        await Diary.findByIdAndDelete(req.params.id);
        res.json({ message: 'Diary deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
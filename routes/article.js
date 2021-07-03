const express = require('express');
const router = express.Router();

const baseUrl = '/article'

//获取、查询
router.get(`${baseUrl}/:articleId`, (req, res, next) => {
    // console.log(req.baseUrl)
    res.send('respond with a resource');
});
//上传、创建
router.post(`${baseUrl}`, (req, res, next) => {
    res.send('respond with a resource');
});
//更新、完整资源
router.put(`${baseUrl}/:articleId`, (req, res, next) => {
    res.send('respond with a resource');
});
//更新、部分资源
router.patch(`${baseUrl}/:articleId`, (req, res, next) => {
    res.send('respond with a resource patch');
});
//删除
router.delete(`${baseUrl}/:articleId`, (req, res, next) => {
    res.send('respond with a resource delete');
});

module.exports = router;

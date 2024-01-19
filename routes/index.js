var express = require('express');
var router = express.Router();

const upload = require('./multer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});



router.post('/upload',upload.single("uploadImg"),(req,res)=>{
console.log(req.body);
console.log(req.file);
 res.redirect('/')
})

module.exports = router;



// const upload = multer({ dest: 'uploads/' })
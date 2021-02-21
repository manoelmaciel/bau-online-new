var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/musicas', (req, res, next) => {
  var resultado = []
  resultado = getMusicas(req, res)
  console.log(resultado)
  res.render('index', { title: 'Express', resultado });
})

function getMusicas (req, res) {
  req.getConnection((err, connection) => {
    connection.query('SELECT * FROM tb_musicas', [], (err, result) => {
      /// 
      if (err) {
        // res.status(200)
        // return res.json(result)
  
        return err // res.status(400).json(err)
      }
      // res.status(200)
      // return res.json(result)
      // console.log(err, result)
      /// return result[0]
      return result.toString()
    })
    return null
  })
 
}

module.exports = router;
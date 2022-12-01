
const dbConnection = require('../../config/dbConnection');

module.exports = app => {
  const connection = dbConnection();//esta contante va a contener la coneccion a la base de datos
  app.get('/', (req, res) => {
    connection.query('SELECT * FROM customer', (err, result) => {
      console.log(result);
      res.render('news/news', {//render tiene un parametro para pasar datos
        customer: result//mostrar las noticias
      });
    });
  });

  app.post('/news', (req, res) => {
    //console.log(req.body)//para poder agregar datos por post
    const { name, lastName, adress, phone } = req.body;
    connection.query('INSERT INTO customer SET?', {
      name,
      lastName,
      adress,
      phone
    },
      (err, resultado) => {//si tenemso un error lo redireccionamos al home
        res.redirect('/');
      });
  });
}
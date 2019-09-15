const express = require('express');
const mysql = require('mysql');
const morgan = require('morgan');
const path = require('path');
const conexion = require('express-myconnection');

let app = express();

//Importando rutas
const ruta = require('./routes/crud')

//Configuraciones
    app.set('port', process.env.PORT || 3000);
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));

//MiddleWares

    app.use(morgan('dev'));
    app.use(conexion  (mysql, {
        host: 'localhost',
        user: 'root',
        password: 'n0m3l0',
        port: '3306',
        database: 'alimentos'
    }, 'single'));

    app.use(express.urlencoded({extended:false}))
//Rutas

   app.use('/', ruta);

//Archivos estáticos

    app.use(express.static(path.join(__dirname, 'public')));

//Servidor
    app.listen(app.get('port'), () => {
        console.log('El servidor está en el puerto: ', app.get('port') , ' :)');
    });

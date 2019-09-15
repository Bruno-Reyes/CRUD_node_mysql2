const express = require ('express');
const router = express.Router();
const funcionalidad = require('../controllers/funcionalidad');

router.get('/', funcionalidad.list);

router.post('/add' , funcionalidad.save);

router.get('/add' , funcionalidad.add);

router.get('/delete/:id_ali' , funcionalidad.delete);

router.get('/edit/:id_ali', funcionalidad.editr);

router.post('/update/:id_ali', funcionalidad.edit);

module.exports = router;
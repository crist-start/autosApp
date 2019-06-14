var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Autos App' });
});

module.exports = router;

router.get('/mazda',function(req,res,next) {
	var infoMazda={}
	infoMazda.pais='Japón'
	infoMazda.sectorVentas='Comercial'
	infoMazda.anioFundacion=1929
	infoMazda.logo="https://www.mazda.mx/siteassets/mazda-mx/logos-new-mazda/mazda-logo-desktop-2.png"

	res.render('mazda',infoMazda)
})

router.get('/seat', function(req,res,next) {
	var infoSeat={}
	infoSeat.pais='Barcelona, España'
	infoSeat.sectorVentas='Comercial'
	infoSeat.anioFundacion="9 de mayo de 1950"
	infoSeat.logo="https://www.seat.mx/content/dam/public/header/seat-logo.png"

	res.render('seat',infoSeat)
})
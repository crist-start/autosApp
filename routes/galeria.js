var express = require('express');
var router = express.Router();

router.get('/mazda',function(res,res,next) {
	var data={autos:[]}
	var auto={}
	auto.nombre="Mazda 3"
	auto.foto="https://i.blogs.es/492674/mazda-3-hatchback-polymetal-gray_/1024_2000.jpg";
	data.autos.push(auto)

	auto=null
	auto={}
	auto.nombre="Mazda 6"
	auto.foto="https://www.autologia.com.mx/wp-content/uploads/2018/04/MAzda-6-2-620x264.jpg";
	data.autos.push(auto)

	auto=null
	auto={}
	auto.nombre="Mazda CX-3"
	auto.foto="https://www.coches.com/fotos_historicas/mazda/CX-3/high_318b730d19545c6351f312d234cb153c.jpg";
	data.autos.push(auto)

	auto=null
	auto={}
	auto.nombre="Mazda CX-3"
	auto.foto="https://www.coches.com/fotos_historicas/mazda/CX-3/high_318b730d19545c6351f312d234cb153c.jpg";
	data.autos.push(auto)

	auto=null
	auto={}
	auto.nombre="Mazda CX-3"
	auto.foto="https://www.coches.com/fotos_historicas/mazda/CX-3/high_318b730d19545c6351f312d234cb153c.jpg";
	data.autos.push(auto)

	auto=null
	auto={}
	auto.nombre="Mazda CX-3"
	auto.foto="https://www.coches.com/fotos_historicas/mazda/CX-3/high_318b730d19545c6351f312d234cb153c.jpg";
	data.autos.push(auto)
	
	console.log(data)
	res.render("./galeria/mazda", data)
})

module.exports=router;
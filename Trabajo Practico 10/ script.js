function saludo(){
	const nombre = prompt("Ingrese su nombre");
	const apellido = prompt("Ingrese su apellido");

	alert(`Hola ${nombre} ${apellido} te damos la bienvenida a Ada`);
}

function heladeria(){
	const gusto1 = prompt("Podes elegir tres sabores, ingresar el primero");
	const gusto2 = prompt("Ingrese el segundo sabor");
	const gusto3 = prompt("Ingrese el ultimo sabor");

	alert(`Aquí tiene su helado de ${gusto1}, ${gusto2} y ${gusto3}.`);
}

function datosPersonales(){
	const campos = ["nombre", "apellido", "edad", "nacionalidad", "documento"];
	const valores = [];

	for(let i = 0; i < campos.length; i++){
		let valor = prompt(`Por favor ingrese su ${campos[i]}`);
		valores.push(valor);
	}

	alert(`
		Nombre: ${valores[0]}\r
		Apellido: ${valores[1]}\r
		Edad: ${valores[2]}\r
		Nacionalidad: ${valores[3]}\r
		Documento: ${valores[4]}\r
		`);

}

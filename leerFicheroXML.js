function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let libros = xmlDoc.querySelectorAll("libro")
	let librerias = xmlDoc.querySelectorALL("libreria")
	for(let i=0; i<libros.length; i++)
		
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + libreria[i].textContent + "</p>"
	
}

loadDocA("libros.xml","xml");


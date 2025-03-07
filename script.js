function toggleMode() {
	const html = document.documentElement;

	// if(html.classList.contains("light")) {
	//     html.classList.remove("light");
	// } else {
	//     html.classList.add("light");
	// }

	// mesma ideia que o if acima, mas de forma mais simples:
	html.classList.toggle("light");

	const img = document.querySelector("#profile img"); // pegar a imagem
	if (html.classList.contains("light")) {
		// substituir a imagem

		img.setAttribute("src", "./assets/avatar-light.png"); //se tiver light mode, adicionar a imagem light
		img.setAttribute(
			"alt",
			"foto de Mayk Brito sorrindo, usando óculos escuros e casaco preto, sem barba e fundo azul com degrade roxo"
		); // alterar a descrição da imagem para modo claro
	} else {
		img.setAttribute("src", "./assets/avatar.png"); //se estiver sem lighr mode, manter a imagem normal
		img.setAttribute(
			"alt",
			"foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo escuro"
		); // alterar a descrição da imagem para modo escuro
	}
}

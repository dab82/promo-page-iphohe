const links = document.querySelectorAll(".header-menu__item a");

seamless.polyfill();

links.forEach((element) => {
	element.addEventListener("click", (event) => {
		event.preventDefault();
		const id = element.getAttribute("href").substring(1);
		const section = document.getElementById(id);

		if (section) {
			seamless.elementScrollIntoView(section, {
				behavior: "smooth",
				block: "start",
			});
		} else {
			seamless.elementScrollIntoView(
				document.querySelector("#characteristics"),
				{
					behavior: "smooth",
					block: "start",
					inline: "center",
				}
			);
		}
	});
});

const toChar = document.querySelector(".card-details__link-characteristics");

const characteristics = document.querySelector("#characteristics");

toChar.addEventListener("click", (event) => {
	event.preventDefault();
	seamless.elementScrollIntoView(characteristics, {
		behavior: "smooth",
		block: "start",
	});
});

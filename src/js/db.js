// Вставка портфолио элементов
const html = './src/img/projects/stack/html.svg';
const css = './src/img/projects/stack/css.svg';
const sass = './src/img/projects/stack/sass.svg';
const js = './src/img/projects/stack/js.svg';
const python = './src/img/projects/stack/python.svg';
const figma = './src/img/projects/stack/figma.svg';
const django = './src/img/projects/stack/django.svg';
const sqlite3 = './src/img/projects/stack/sqlite3.svg';

const bootstrap = './src/img/projects/stack/bootstrap.svg';
const photoshop = './src/img/projects/stack/photoshop.svg';

// html, css, sass, js, python, figma, bootstrap, django, sqlite3, photoshop
// f_all f_landing f_pet f_com f_python 
// wide tall big

const dataPortfolioCardItem = [

	// 14 - Mihailuch 3.0
	{
		photoPrewiew: './src/img/projects/14/14_prev.jpg',
		titlePrewiew: 'Mihailuch 3.0',
		subtitlePrewiew: 'Сайт-портфолио (ver. 3)',
		filter: 'f_all f_landing f_pet', // f_all f_landing f_pet f_com f_python 
		logo: './src/img/projects/14/14_logo.svg',
		links: {
			githubLink: 'https://github.com/D1ctarors/MihailuchRU/',
			figmaLink: '',
			globalLink: 'https://d1ctarors.github.io/MihailuchRU/',
		},
		stack: [html, css, js, sass, figma, bootstrap], //html, css, sass, js, python, figma, bootstrap, django, sqlite3, photoshop
		description: 'Опыт коммерческой разработки. Опыт работы в команде. Вставка элементов через js. Работа с масками. Работа с PopUp. Вставка Lottie-анимации. Использование слайдеров. Адаптивная вёрстка по макету. Работа с бургером.',
		fullImage: './src/img/projects/14/14_full.png',
		size: 'tall', // wide tall big
	},

	// 13 - Парсер lordfilm
	{
		photoPrewiew: './src/img/projects/12/12_prev.jpg',
		titlePrewiew: 'Парсер lordfilm',
		subtitlePrewiew: '',
		filter: 'f_all f_pet f_python', // f_all f_landing f_pet f_com f_python 
		logo: './src/img/projects/12/12_logo.svg',
		links: {
			githubLink: 'https://github.com/D1ctarors/ParsingLF',
			figmaLink: '',
			globalLink: '',
		},
		stack: [python], //html, css, sass, js, python, figma, bootstrap, django, sqlite3, photoshop
		description: 'Парсер фильмов с сайта lordfilm созданный на чистом python. В своё время послушил инструментом для случайной ddos-атаки).',
		fullImage: './src/img/projects/12/12_full.png',
		size: ' ', // wide tall big
	},

	// 12 - PromptsGPT
	{
		photoPrewiew: './src/img/projects/12/12_prev.jpg',
		titlePrewiew: 'PromptsGPT',
		subtitlePrewiew: 'Сайт создан на GPT-3.5',
		filter: 'f_all f_landing f_pet', // f_all f_landing f_pet f_com f_python 
		logo: './src/img/projects/12/12_logo.svg',
		links: {
			githubLink: 'https://github.com/D1ctarors/Prompts4GPT',
			figmaLink: '',
			globalLink: 'https://d1ctarors.github.io/Prompts4GPT/',
		},
		stack: [html, css, js, sass], //html, css, sass, js, python, figma, bootstrap, django, sqlite3, photoshop
		description: 'Попытка использования мощности GPT для создания сайтов.',
		fullImage: './src/img/projects/12/12_full.png',
		size: '', // wide tall big
	},

	// 11 - WebCinema
	{
		photoPrewiew: './src/img/projects/11/11_prev.png',
		titlePrewiew: 'WebCinema',
		subtitlePrewiew: 'Онлайн-кинотеатр',
		filter: 'f_all f_pet f_python', // f_all f_landing f_pet f_com f_python 
		logo: './src/img/projects/11/11_logo.svg',
		links: {
			githubLink: 'https://github.com/D1ctarors/WebCinema/',
			figmaLink: 'https://www.figma.com/community/file/1258001017228468531',
			globalLink: 'https://d1ctarors.github.io/WebCinema/',
		},
		stack: [html, css, sass, js, python, figma, bootstrap, django, sqlite3], //html, css, sass, js, python, figma, bootstrap, django, sqlite3, photoshop
		description: '',
		fullImage: './src/img/projects/11/11_full.png',
		size: 'tall', // wide tall big
	},

	// 10 - Mihailuch 2.0
	{
		photoPrewiew: './src/img/projects/10/10_prev.jpg',
		titlePrewiew: 'Mihailuch 2.0',
		subtitlePrewiew: 'Сайт-портфолио (ver. 2)',
		filter: 'f_all f_landing f_pet', // f_all f_landing f_pet f_com f_python 
		logo: './src/img/projects/10/10_logo.svg',
		links: {
			githubLink: 'https://github.com/D1ctarors/mihailuch.ru',
			figmaLink: 'https://www.figma.com/file/EWtj42jfac97Hsb9HMaowf/Mihailuch.ru?type=design&node-id=860%3A537&mode=design&t=fCXdmBXx8YzrF8mM-1',
			globalLink: 'https://d1ctarors.github.io/mihailuch.ru/',
		},
		stack: [html, css, sass, js, figma], // html, css, sass, js, python, figma, bootstrap, django, sqlite3, photoshop
		description: 'Редизайн сайта-портфолио',
		fullImage: './src/img/projects/10/10_full.png',
		size: ' ', // wide tall big
	},

	// 09 - Атриум
	{
		photoPrewiew: './src/img/projects/09/09_prev.jpg',
		titlePrewiew: 'Атриум',
		subtitlePrewiew: 'Производитель игрового оборудования и аттракционов',
		filter: 'f_all f_landing f_com', // f_all f_landing f_pet f_com f_python 
		logo: './src/img/projects/09/09_logo.svg',
		links: {
			githubLink: 'https://github.com/genius192x/atrium',
			figmaLink: 'https://www.figma.com/file/kf6Gg2oR6kGuzx1PrsaEqT/%D0%90%D1%82%D1%80%D0%B8%D1%83%D0%BC-(%D0%BA%D0%BE%D0%BC)?type=design&node-id=0%3A1&mode=design&t=4i1uWoPGlJ41E6bY-1',
			globalLink: 'http://atrium.edavpolzu.ru/',
		},
		stack: [html, css, sass, js, figma], // html, css, sass, js, python, figma, bootstrap, django, sqlite3, photoshop
		description: 'Работа в команде, спасибо <span><a href="https://github.com/genius192x" target="_blank">Genius192x</a></span>. <br>Опыт коммерческой разработки. Опыт работы в команде. Вставка элементов через js. Работа с масками. Работа с PopUp. Вставка Lottie-анимации. Использование слайдеров. Адаптивная вёрстка по макету.',
		fullImage: './src/img/projects/09/09_full.png',
		size: 'tall', // wide tall big
	},

	// 08 - Аквазонд
	{
		photoPrewiew: './src/img/projects/08/08_prev.jpg',
		titlePrewiew: 'Аквазонд',
		subtitlePrewiew: '',
		filter: 'f_all f_landing f_com', // f_all f_landing f_pet f_com f_python 
		logo: './src/img/projects/08/08_logo.svg',
		links: {
			githubLink: '',
			figmaLink: 'https://www.figma.com/file/cXboPdMeazAYgeVuxB3ORm/Aquazond-(%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0)?type=design&node-id=0%3A1&mode=design&t=UCN80KrnHV5Hbwc8-1',
			globalLink: '',
		},
		stack: [html, css, sass, js, figma], // html, css, sass, js, python, figma, bootstrap, django, sqlite3, photoshop
		description: 'Работа в команде, спасибо <span><a href="https://github.com/genius192x" target="_blank">Genius192x</a></span>. <br> Разработка концепта внутренней системы и редизайна сайта. Вёрстка макета внутренней системы',
		fullImage: './src/img/projects/08/08_full.png',
		size: ' ', // wide tall big
	},

	// 07 - Discounts
	{
		photoPrewiew: './src/img/projects/07/07_prev.jpg',
		titlePrewiew: 'Discounts',
		subtitlePrewiew: 'Покупка подписок',
		filter: 'f_all f_pet', // f_all f_landing f_pet f_com f_python 
		logo: './src/img/projects/07/07_logo.svg',
		links: {
			githubLink: 'https://github.com/D1ctarors/discounts',
			figmaLink: 'https://www.figma.com/file/fs3yrqJKKRtM6tx7DsCVcH/Discounts?type=design&node-id=188%3A70&mode=design&t=TssQTiCd43ai2jrY-1',
			globalLink: 'https://d1ctarors.github.io/discounts/',
		},
		stack: [html, css, sass, js, figma], // html, css, sass, js, python, figma, bootstrap, django, sqlite3, photoshop
		description: 'Адаптивная вёрстка макета.',
		fullImage: './src/img/projects/07/07_full.png',
		size: ' ', // wide tall big
	},

	// 06 - Mihailuch 1.0
	{
		photoPrewiew: './src/img/projects/06/06_prev.jpg',
		titlePrewiew: 'Mihailuch 1.0',
		subtitlePrewiew: 'Сайт-портфолио (ver. 1)',
		filter: 'f_all f_landing f_pet',
		logo: './src/img/projects/06/06_logo.svg',
		links: {
			githubLink: 'https://github.com/D1ctarors/MYS',
			figmaLink: '',
			globalLink: 'https://d1ctarors.github.io/MYS/',
		},
		stack: [html, css, sass, photoshop], // html, css, sass, js, python, figma, bootstrap, django, sqlite3, photoshop
		description: '',
		fullImage: './src/img/projects/06/06_full.png',
		size: ' ', // wide tall big
	},

	// 05 - Aperture
	{
		photoPrewiew: './src/img/projects/05/05_prev.jpg',
		titlePrewiew: 'Aperture',
		subtitlePrewiew: '',
		filter: 'f_all f_landing f_pet',
		logo: './src/img/projects/05/05_logo.svg',
		links: {
			githubLink: 'https://github.com/D1ctarors/aperture',
			figmaLink: 'https://www.figma.com/file/blVze6idYnyRJkLG88L5eA/Aperture?type=design&node-id=0-1&mode=design',
			globalLink: 'https://d1ctarors.github.io/aperture/',
		},
		stack: [html, css, sass, figma], // html, css, sass, js, python, figma, bootstrap, django, sqlite3, photoshop
		description: '',
		fullImage: './src/img/projects/05/05_full.png',
		size: 'wide', // wide tall big
	},

	// 04 - MTBiking
	{
		photoPrewiew: './src/img/projects/04/04_prev.jpg',
		titlePrewiew: 'MTBiking',
		subtitlePrewiew: '',
		filter: 'f_all f_landing f_pet',
		logo: './src/img/projects/04/04_logo.svg',
		links: {
			githubLink: 'https://github.com/D1ctarors/mtbiking',
			figmaLink: 'https://www.figma.com/file/EwWfytg2JJYZelhJ6JYPZ4/Landing-Page-(Community)?type=design&node-id=0%3A1&mode=design&t=8pjGCDh4GlggL1xQ-1',
			globalLink: 'https://d1ctarors.github.io/mtbiking/',
		},
		stack: [html, css, js, figma], // html, css, sass, js, python, figma, bootstrap, django, sqlite3, photoshop
		description: '',
		fullImage: './src/img/projects/04/04_full.png',
		size: ' ', // wide tall big
	},

	// 03 - Binary
	{
		photoPrewiew: './src/img/projects/03/03_prev.jpg',
		titlePrewiew: 'Binary',
		subtitlePrewiew: '',
		filter: 'f_all f_landing f_pet',
		logo: './src/img/projects/03/03_logo.svg',
		links: {
			githubLink: 'https://github.com/D1ctarors/binary',
			figmaLink: '',
			globalLink: 'https://d1ctarors.github.io/binary/',
		},
		stack: [html, css, photoshop], // html, css, sass, js, python, figma, bootstrap, django, sqlite3, photoshop
		description: '',
		fullImage: './src/img/projects/03/03_full.png',
		size: ' ', // wide tall big
	},

	// 02 - ActiveBox
	{
		photoPrewiew: './src/img/projects/02/02_prev.jpg',
		titlePrewiew: 'ActiveBox',
		subtitlePrewiew: '',
		filter: 'f_all f_landing f_pet',
		logo: './src/img/projects/02/02_logo.svg',
		links: {
			githubLink: 'https://github.com/D1ctarors/binary',
			figmaLink: '',
			globalLink: 'https://d1ctarors.github.io/binary/',
		},
		stack: [html, css, photoshop], // html, css, sass, js, python, figma, bootstrap, django, sqlite3, photoshop
		description: 'Вёрстка по макету.',
		fullImage: './src/img/projects/02/02_full.png',
		size: ' ', // wide tall big
	},

	// Travel
	{
		photoPrewiew: './src/img/projects/01/01_prev.jpg',
		titlePrewiew: 'Travel',
		subtitlePrewiew: '',
		filter: 'f_all f_landing f_pet',
		logo: './src/img/projects/01/01_logo.svg',
		links: {
			githubLink: '',
			figmaLink: '',
			globalLink: '',
		},
		stack: [html, css, photoshop], // html, css, sass, js, python, figma, bootstrap, django, sqlite3, photoshop
		description: 'C этого началось моё путешествие в мир Web-IT.',
		fullImage: './src/img/projects/01/01_full.png',
		size: ' ', // wide tall big
	},

];



function createPortfolioItem() {
	// Вставка карточек
	let item = "";
	let projectsWrapper = document.getElementById("projects-wrapper");

	dataPortfolioCardItem.forEach((data, index) => {
		item += `
      <div class="grid-box portfolio__card ${data.filter} ${data.size}" data-bs-toggle="modal"
        data-bs-target="#contentPortfolioModal" data-index="${index}">
        <img src="${data.photoPrewiew}" alt="${data.titlePrewiew}">
        <div class="portfolio__card-content">
          <h4>${data.titlePrewiew}</h4>
          <h6>${data.subtitlePrewiew}</h6>
        </div>
      </div>
    `;
	});

	projectsWrapper.innerHTML = item; // Вставляем карточки в контейнер

	// Обработчик события для каждой карточки
	const portfolioCards = document.querySelectorAll(".portfolio__card");
	portfolioCards.forEach((card) => {
		card.addEventListener("click", function () {
			const index = this.getAttribute("data-index");
			const selectedData = dataPortfolioCardItem[index];
			displayProjectData(selectedData);
		});
	});
}

function displayProjectData(data) {
	// Ваш код обработки данных и отображения их в модальном окне
	const githubLink = data.links?.githubLink || "";
	const globalLink = data.links?.globalLink || "";
	const figmaLink = data.links?.figmaLink || "";

	const stackItems = Array.isArray(data.stack) ? data.stack : [];

	const projectsContentWrapper = document.getElementById("projects-content");

	const itemContent = `
    <div class="modal-body projects-content">
      <div class="projects-content__body">
        <button type="button" class="btn-close projects-content__close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4">
              <h2 class="projects-content__name-project"><img src="${data.logo}" alt="${data.titlePreview}"></h2>
              <ul class="projects-content__link-project d-flex align-items-center gap-3 ">
                <li><a href="${githubLink}" target="_blank"><img src="/src/img/projects/links/git.svg" alt="github"></a></li>
                <li><a href="${globalLink}" target="_blank"><img src="/src/img/projects/links/global.svg" alt=""></a></li>
                <li><a href="${figmaLink}" target="_blank"><img src="/src/img/projects/links/figma.svg" alt=""></a></li>
              </ul>
              <div class="projects-content__content">
                ${data.description}
              </div>
              <ul class="projects-content__project-stack d-flex align-items-center flex-wrap gap-3">
                ${stackItems
			.map(
				(stackItem) => `<li class="stack-item"><img src="${stackItem}" alt="${stackItem}"></li>`
			)
			.join("")}
              </ul>
            </div>
            <div class="col-lg-7 ms-auto">
              <div class="projects-content__image">
                <img class="img-fluid" src="${data.fullImage}" alt="${data.titlePreview}">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

	projectsContentWrapper.innerHTML = itemContent; // Обновляем содержимое модального окна
}

createPortfolioItem();





// Вставка табов
function createTabsItems() {
	const data = [
		{
			tab1: [
				{ title: 'Figma', percent: '80' },
				// { title: 'Redu', percent: '60' }
			]
		},
		{
			tab2: [
				{ title: 'Html', percent: '90' },
				{ title: 'Css', percent: '90' },
				{ title: 'JS', percent: '10' },
				{ title: 'Python', percent: '80' },
				{ title: 'Django', percent: '25' },
				{ title: 'Bootstrap', percent: '80' },
				{ title: 'SQLite', percent: '10' },
			]
		},
		{
			tab3: [
				{ title: 'ТКМП - Компьютерные системы и комплексы', percent: '100' },
				{ title: 'ТУСУР - Прикладная информатика в экономике', percent: '0' },
			]
		}
	];

	let progressWrap = null;

	// Функция для создания элементов DOM и вставки данных
	function createProgressBars(tabId, data) {
		let item = ''; // Объявление переменной item внутри функции

		progressWrap = document.getElementById(tabId + '-progress');
		progressWrap.innerHTML = '';

		data.forEach(function (dataItem) {
			item += `
      <div class="progress-wrap-line">
        <div class="progress-wrap-line__top">
          <h3>${dataItem.title}</h3>
          <h3>${dataItem.percent}%</h3>
        </div>
        <div class="progress" role="progressbar" aria-valuenow="${dataItem.percent}"
          aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar" style="width: ${dataItem.percent}%"></div>
        </div>
      </div>
    `;
		});

		progressWrap.insertAdjacentHTML('afterbegin', item);
	}

	// Вызов функции для каждого таба
	createProgressBars('design', data[0].tab1);
	createProgressBars('skills', data[1].tab2);
	createProgressBars('school', data[2].tab3);
}
createTabsItems()






// // Создание контента проекты - ПРОЕКТЫ-контент
// function createContentProjectsItem() {

// 	const html = '';


// 	window.addEventListener('click', function (event) {

// 		const clear = document.querySelectorAll('.projects-content__body');
// 		clear.forEach((item) => {
// 			item.remove();
// 		});



// 		if (event.target.hasAttribute('data-info')) {

// 			const card = event.target.closest('.projects-item');


// 			const alt = card.querySelector('.projects-item__prev').getAttribute('alt');

// 			const dataItem = [{
// 				nameProject: 'Atrium',
// 				jointlyWatch: 'block',
// 				jointlyText: 'Работа в команде,<br>спасибо <span><a href="https://github.com/genius192x" target="_blank" class= "select" >Genius192x</a></span > ',
// 				description: 'Опыт коммерческой разработки. Опыт работы в команде. Вставка элементов через js. Работа с масками. Работа с PopUp. Вставка Lottie-анимации. Использование слайдеров. Адаптивная вёрстка по макету. Работа с бургером.',
// 				usedTools: ['<li>html</li>', '<li>css</li>', '<li>js</li>'],
// 				imageSrc: './img/projects-prev/content-project/Atrium.png',
// 				filter: '',
// 				linkToProject: 'http://atrium.edavpolzu.ru/',
// 			},
// 			{
// 				nameProject: 'discounts',
// 				jointlyWatch: 'none',
// 				jointlyText: '',
// 				description: 'Адаптивная вёрстка по макету. Работа с бургером.',
// 				usedTools: ['<li>html</li>', '<li>css</li>', '<li>js</li>'],
// 				imageSrc: './img/projects-prev/content-project/discounts.png',
// 				filter: '',
// 				linkToProject: 'https://d1ctarors.github.io/discounts/',
// 			},
// 			{
// 				nameProject: 'MYS',
// 				jointlyWatch: 'none',
// 				jointlyText: '',
// 				description: 'Вёрстка v1.0 по созданному макету',
// 				usedTools: ['<li>html</li>', '<li>css</li>', '<li>js</li>'],
// 				imageSrc: './img/projects-prev/content-project/',
// 				filter: '',
// 				linkToProject: 'https://d1ctarors.github.io/MYS/',
// 			},
// 			{
// 				nameProject: 'Aperture',
// 				jointlyWatch: 'none',
// 				jointlyText: '',
// 				description: 'Вёрстка по макету. Адаптации под разные размеры экрана. Создание и оптимизация нескольких FullScreen блоков. Стилизованный ScrollBar. Работа с EM, REM. Работа с оптимизацией картинок.',
// 				usedTools: ['<li>html</li>', '<li>css</li>', '<li>js</li>'],
// 				imageSrc: './img/projects-prev/content-project/aperture.png',
// 				filter: '',
// 				linkToProject: 'https://d1ctarors.github.io/aperture/',
// 			},
// 			{
// 				nameProject: 'mtBiking',
// 				jointlyWatch: 'none',
// 				jointlyText: '',
// 				description: 'Адаптивная вёрстка по макету. Работа с бургером.',
// 				usedTools: ['<li>html</li>', '<li>css</li>', '<li>js</li>'],
// 				imageSrc: './img/projects-prev/content-project/MT_BIKING.png',
// 				filter: '',
// 				linkToProject: 'https://d1ctarors.github.io/mtbiking/',
// 			},
// 			{
// 				nameProject: 'Binary',
// 				jointlyWatch: 'none',
// 				jointlyText: '',
// 				description: 'Адаптивная вёрстка по макету',
// 				usedTools: ['<li>html</li>', '<li>css</li>', '<li>js</li>'],
// 				imageSrc: './img/projects-prev/content-project/',
// 				filter: '',
// 				linkToProject: 'https://d1ctarors.github.io/binary/',
// 			},
// 			{
// 				nameProject: 'activebox',
// 				jointlyWatch: 'none',
// 				jointlyText: '',
// 				description: 'Вёрстка по макету',
// 				usedTools: ['<li>html</li>', '<li>css</li>'],
// 				imageSrc: './img/projects-prev/content-project/activebox.png',
// 				filter: '',
// 				linkToProject: 'https://d1ctarors.github.io/activebox/',
// 			},
// 			];
// 			let item = "";
// 			let Wrapper = document.getElementById("projects-content");
// 			dataItem.forEach((data => {
// 				if (alt.toLowerCase() === data.nameProject.toLowerCase()) {

// 					item +=
// 						`
// 		<div class="projects-content__body">
// 				<div class="projects-content__close"></div>
// 					<div class="projects-content__header">
// 						<h2 class="projects-content__name-project">${data.nameProject}</h2>
// 						<div class="projects-content__jointly" style="display:${data.jointlyWatch}">${data.jointlyText}</div>
// 					</div>
// 					<div class="projects-content__description">
// 						${data.description}
// 					</div>
// 					<h2 class="projects-content__tools-title">во время работы использовались:</h2>
// 					<ul class="projects-content__tools">
// 						${data.usedTools}
// 					</ul>
// 					<a class="projects-content__link" href="${data.linkToProject}" target="_blank">Ссылка на проект<svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
// 						<path
// 							d="M16 0.499999L14.59 1.91L20.17 7.5L-3.93402e-07 7.5L-3.0598e-07 9.5L20.17 9.5L14.58 15.08L16 16.5L24 8.5L16 0.499999Z"
// 							fill="#ffffff"></path>
// 					</svg></a>
// 					<div class="projects-content__image-project"><img src="${data.imageSrc}"
// 							alt="${data.nameProject}"></div>
// 				</div>
// 			`;
// 				}

// 			}));
// 			Wrapper.insertAdjacentHTML("afterbegin", item);

// 		}
// 		// event.preventDefault();
// 	});


// }
// // createContentProjectsItem();
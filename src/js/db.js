// Вставка портфолио элементов
function createPortfolioItem() {
	const dataItem = [
		{
			photoPrewiew: './src/img/projects/10.jpg',
			titlePrewiew: 'Mihailuch 3.0',
			subtitlePrewiew: 'Сайт-портфолио (ver. 3)',
			filter: 'f_all f_landing f_pet',
		},
		{
			photoPrewiew: './src/img/projects/09.jpg',
			titlePrewiew: 'WebCinema',
			subtitlePrewiew: 'Онлайн кинотеатр',
			filter: 'f_all f_pet f_django',
		},
		{
			photoPrewiew: './src/img/projects/10.jpg',
			titlePrewiew: 'Mihailuch 2.0',
			subtitlePrewiew: 'Сайт-портфолио (ver. 2)',
			filter: 'f_all f_landing f_pet',
		},

		{
			photoPrewiew: './src/img/projects/06.jpg',
			titlePrewiew: 'Aquazond',
			subtitlePrewiew: '',
			filter: 'f_all f_landing',
		},
		{
			photoPrewiew: './src/img/projects/07.jpg',
			titlePrewiew: 'Атриум',
			subtitlePrewiew: '',
			filter: 'f_all f_pet f_com',
		},
		{
			photoPrewiew: './src/img/projects/05.jpg',
			titlePrewiew: 'Discounts',
			subtitlePrewiew: '',
			filter: 'f_all f_pet',
		},
		{
			photoPrewiew: './src/img/projects/08.jpg',
			titlePrewiew: 'Mihailuch 1.0',
			subtitlePrewiew: 'Сайт-портфолио (ver. 1)',
			filter: 'f_all f_landing f_pet',
		},
		{
			photoPrewiew: './src/img/projects/04.jpg',
			titlePrewiew: 'Aperture',
			subtitlePrewiew: '',
			filter: 'f_all f_landing f_pet',
		},
		{
			photoPrewiew: './src/img/projects/03.jpg',
			titlePrewiew: 'MTBiking',
			subtitlePrewiew: '',
			filter: 'f_all f_landing f_pet',
		},
		{
			photoPrewiew: './src/img/projects/02.jpg',
			titlePrewiew: 'Binary',
			subtitlePrewiew: '',
			filter: 'f_all f_landing f_pet',
		},
		{
			photoPrewiew: './src/img/projects/01.jpg',
			titlePrewiew: 'ActiveBox',
			subtitlePrewiew: '',
			filter: 'f_all f_landing f_pet',
		},


	];
	let item = "";
	let projectsWrapper = document.getElementById("projects-wrapper");
	dataItem.forEach((data => {
		item +=
			`
			<div class="grid-box portfolio__card ${data.filter}">
				<img src="${data.photoPrewiew}" alt="${data.titlePrewiew}">
				<div class="portfolio__card-content">
					<h4>${data.titlePrewiew}</h4>
					<h6>${data.subtitlePrewiew}</h6>
				</div>
			</div>
			`;
	}));

	projectsWrapper.insertAdjacentHTML("afterbegin", item);

	// Проверка на наличие карточек
	// const cards = document.querySelectorAll('.grid-box');
	// if (cards.length === 1) {
	// 	cards[0].style.height = '100%';
	// }
}

createPortfolioItem();


// Вставка табов
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



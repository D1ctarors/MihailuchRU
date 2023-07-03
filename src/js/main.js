// Скрытие шапки при скролле

const header = document.querySelector('.header');
let body = document.querySelector('body');
let prevScrollPos = body.scrollTop;

// Function to handle scroll event
function handleScroll() {
	const currentScrollPos = body.scrollTop;
	if (prevScrollPos > currentScrollPos) {
		// Scrolling up
		header.classList.remove('header_hidden');
	} else {
		// Scrolling down
		header.classList.add('header_hidden');
	}

	prevScrollPos = currentScrollPos;
};
// Add scroll event listener



body.addEventListener('scroll', () => { 
    handleScroll()
});



// Плавный скролл
function scrollTo() {
	const smoothLinks = document.querySelectorAll('a[href^="#"]');
	for (let smoothLink of smoothLinks) {
		smoothLink.addEventListener('click', function (e) {
			e.preventDefault();
			const id = smoothLink.getAttribute('href');

			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	};
}
scrollTo();

// работа фильтров портфолио
function WorkFilter() {
	$('.filter__item').click(function (event) {
		let dataFilter = $(this).data('filter');
		if (dataFilter == 'all') {
			$('.portfolio__card').show();
		} else {
			$('.portfolio__card').hide();
			$('.portfolio__card.f_' + dataFilter).show();
		}
		$('.filter__item').removeClass('active');
		$(this).addClass('active');

		return false;
	});
}
WorkFilter();

// Табы скилов
class ItcTabs {
	constructor(target, config) {
		const defaultConfig = {};
		this._config = Object.assign(defaultConfig, config);
		this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
		this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
		this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
		this._eventShow = new Event('tab.itc.change');
		this._init();
		this._events();
	}
	_init() {
		this._elTabs.setAttribute('role', 'tablist');
		this._elButtons.forEach((el, index) => {
			el.dataset.index = index;
			el.setAttribute('role', 'tab');
			this._elPanes[index].setAttribute('role', 'tabpanel');
		});
	}
	show(elLinkTarget) {
		const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
		const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
		const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
		if (elLinkTarget === elLinkActive) {
			return;
		}
		elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
		elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
		elLinkTarget.classList.add('tabs__btn_active');
		elPaneTarget.classList.add('tabs__pane_show');
		this._elTabs.dispatchEvent(this._eventShow);
		elLinkTarget.focus();
	}
	showByIndex(index) {
		const elLinkTarget = this._elButtons[index];
		elLinkTarget ? this.show(elLinkTarget) : null;
	};
	_events() {
		this._elTabs.addEventListener('click', (e) => {
			const target = e.target.closest('.tabs__btn');
			if (target) {
				e.preventDefault();
				this.show(target);
			}
		});
	}
}
new ItcTabs('.tabs');






// Рандом элементов в приветствии
// const lerp = (v0, v1, t) => v0 * (1 - t) + v1 * t;
// const SVG_NS = "http://www.w3.org/2000/svg";

// const svg = document.querySelector(".cherry");
// const block = document.querySelector(".me-photo-1");
// const blockRect = block.getBoundingClientRect();

// const cellWidthRange = { min: 24, max: 96 };
// const cellHeightRange = { min: 24, max: 96 };
// const radius = 12;

// function isIntersectRects(r1, r2) {
// 	return !(
// 		r2.x > r1.x + r1.width ||
// 		r2.x + r2.width < r1.x ||
// 		r2.y > r1.y + r1.height ||
// 		r2.y + r2.height < r1.y
// 	);
// }

// function createSubdivRange(fromTo, minMax) {
// 	const out = [];
// 	let position = fromTo.from;

// 	do {
// 		const size = lerp(minMax.min, minMax.max, Math.random());
// 		out.push({ position, size });
// 		position += size;
// 	} while (position < fromTo.to);

// 	return out;
// }

// const cols = createSubdivRange({ from: 0, to: svg.clientWidth }, cellWidthRange);
// const rows = createSubdivRange({ from: 0, to: svg.clientHeight }, cellHeightRange);

// for (let ci = 0; ci < cols.length; ci++) {
// 	for (let ri = 0; ri < rows.length; ri++) {
// 		const { position: x, size: width } = cols[ci];
// 		const { position: y, size: height } = rows[ri];

// 		const cx = lerp(x + radius, x + width - radius, Math.random());
// 		const cy = lerp(y + radius, y + height - radius, Math.random());

// 		const isIntersects = isIntersectRects(blockRect, {
// 			x: cx - radius,
// 			y: cy - radius,
// 			width: radius * 2,
// 			height: radius * 2
// 		});

// 		if (!isIntersects) {
// 			const circle = document.createElementNS(SVG_NS, "circle");
// 			circle.setAttributeNS(null, "cx", cx);
// 			circle.setAttributeNS(null, "cy", cy);
// 			circle.setAttributeNS(null, "r", radius);
// 			svg.appendChild(circle);
// 		}
// 	}
// }
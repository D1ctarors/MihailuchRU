"use strict";

//! Переменные
const filePath = "./src/js/data.json";

let header = document.querySelector(".header"),
  modals = document.querySelectorAll(".modal"),
  prevScrollPos = document.body.scrollTop;

const html = "./src/img/projects/stack/html.svg",
  css = "./src/img/projects/stack/css.svg",
  sass = "./src/img/projects/stack/sass.svg",
  js = "./src/img/projects/stack/js.svg",
  python = "./src/img/projects/stack/python.svg",
  figma = "./src/img/projects/stack/figma.svg",
  django = "./src/img/projects/stack/django.svg",
  sqlite3 = "./src/img/projects/stack/sqlite3.svg",
  bootstrap = "./src/img/projects/stack/bootstrap.svg",
  photoshop = "./src/img/projects/stack/photoshop.svg";

//! Вставка портфолио элементов
function createPortfolioItem(jsonData) {
  let item = "";
  let projectsWrapper = document.getElementById("projects-wrapper");

  jsonData.forEach((data, index) => {
    item += `
      <div class="grid-box portfolio__card ${data.filter} ${data.size}" data-bs-toggle="modal"
        data-bs-target="#contentPortfolioModal" data-index="${index}">
        <img  src="${data.photoPrewiew}" alt="${data.titlePrewiew}">
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
      const selectedData = jsonData[index];
      displayProjectData(selectedData);
    });
  });
}

//! Вставка внутренностей элементов проектов
function displayProjectData(data) {
  // обработки данных и отображения их в модальном окне
  const githubLink = data.links?.githubLink || "",
    globalLink = data.links?.globalLink || "",
    figmaLink = data.links?.figmaLink || "",
    stackItems = Array.isArray(data.stack) ? data.stack : [],
    projectsContentWrapper = document.getElementById("projects-content");
  const getStackItemLink = (stackItem) => {
    switch (stackItem) {
      case "html":
        return html;
      case "css":
        return css;
      case "sass":
        return sass;
      case "js":
        return js;
      case "python":
        return python;
      case "figma":
        return figma;
      case "django":
        return django;
      case "sqlite3":
        return sqlite3;
      case "bootstrap":
        return bootstrap;
      case "photoshop":
        return photoshop;
      default:
        // Возвращаем исходный текст, если нет совпадений
        return stackItem;
    }
  };

  const itemContent = `
    <div class="modal-body projects-content">
      <div class="projects-content__body">
        <button type="button" class="btn-close projects-content__close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4">
              <h2 class="projects-content__name-project"><img src="${
                data.logo
              }" alt="${data.titlePreview}"></h2>
              <ul class="projects-content__link-project d-flex align-items-center gap-3 ">
                <li><a href="${githubLink}" class="link-to-source" target="_blank"><i class="fa-brands fa-github" style="color: #ffffff; font-size: 36px;"></i></a></li>
                <li><a href="${globalLink}" class="link-to-source" target="_blank"><i class="fa-solid fa-globe" style="color: #ffffff; font-size: 36px;"></i></a></li>
                <li><a href="${figmaLink}" class="link-to-source" target="_blank"><i class="fa-brands fa-figma" style="color: #ffffff; font-size: 36px;"></i></a></li>
              </ul>
              <div class="projects-content__content">
                ${data.description}
              </div>
              <ul class="projects-content__project-stack d-flex align-items-center flex-wrap gap-3">
                ${stackItems
                  .map(
                    (stackItem) =>
                      `<li class="stack-item"><img src="${getStackItemLink(
                        stackItem
                      )}" alt="${stackItem}"></li>`
                  )
                  .join("")}
              </ul>
            </div>
            <div class="col-lg-7 ms-auto">
              <div class="projects-content__image">
                <img   class="img-fluid" src="${data.fullImage}" alt="${
    data.titlePreview
  }">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  projectsContentWrapper.innerHTML = itemContent; // Обновляем содержимое модального окна

  // Получаем все элементы списка
  const projectItems = document.querySelectorAll(
    ".projects-content__link-project li"
  );

  // Перебираем каждый элемент списка
  projectItems.forEach((item) => {
    // Находим ссылку внутри элемента
    const link = item.querySelector("a");

    // Проверяем, если у ссылки пустой атрибут href
    if (!link.getAttribute("href")) {
      // Скрываем элемент списка
      item.style.display = "none";
    }
  });
}

//! Вставка табов Навыки
function createTabsItems(jsonData) {
  //   const data = ;

  let progressWrap = null;

  // Функция для создания элементов DOM и вставки данных
  function createProgressBars(tabId, data) {
    let item = ""; // Объявление переменной item внутри функции

    progressWrap = document.getElementById(tabId + "-progress");
    progressWrap.innerHTML = "";

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

    progressWrap.insertAdjacentHTML("afterbegin", item);
  }

  // Вызов функции для каждого таба
  createProgressBars("design", jsonData[0].tab1);
  createProgressBars("skills", jsonData[1].tab2);
  createProgressBars("school", jsonData[2].tab3);
}

//! Скрытие шапки при скролле
function hideHeader() {
  let body = document.querySelector("body");
  body.addEventListener("scroll", () => {
    const currentScrollPos =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (prevScrollPos > currentScrollPos) {
      header.classList.remove("header_hidden");
    } else {
      header.classList.add("header_hidden");
    }
    prevScrollPos = currentScrollPos;
  });
}

//! Паралакс
function createParalax() {
  let paralaxWrapper = document.querySelectorAll(".parallax-wrap li");
  document.addEventListener("mousemove", (event) => {
    paralaxWrapper.forEach((shift) => {
      const position = shift.getAttribute("value");
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;

      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  });
}

//! Добавление active в навигацию
function addActive() {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Удалить класс "active" у всех ссылок
      navLinks.forEach(function (navLink) {
        navLink.classList.remove("active");
      });

      // Добавить класс "active" к текущей ссылке
      link.classList.add("active");

      // Прокрутить до якорной ссылки
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

//! Преключение темы
function toggleTheme() {
  const btn = document.querySelector(".btn-toggle-theme"),
    currentTheme = localStorage.getItem("theme");
  let iconThemeDark = '<i class="fa-solid fa-moon"></i>',
    iconThemeLight = '<i class="fa-solid fa-sun" style="color: #ffffff;"></i>';

  // Проверка темы в localStorage
  if (currentTheme === "dark") {
    document.body.classList.add("light-theme");
    btn.innerHTML = iconThemeDark;
  } else {
    btn.innerHTML = iconThemeLight;
  }

  btn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    let theme = "light";

    if (document.body.classList.contains("light-theme")) {
      theme = "dark";
      btn.innerHTML = iconThemeDark;
    } else {
      btn.innerHTML = iconThemeLight;
    }

    localStorage.setItem("theme", theme);
  });
}

//! Плавный скролл
function createAnAnchor() {
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (event) {
      event.preventDefault();
      const href = smoothLink.getAttribute("href");

      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}

//! Работа фильтров портфолио
function createFilter() {
  const filterItems = document.querySelectorAll(".filter__item");

  filterItems.forEach((filterItem) => {
    filterItem.addEventListener("click", (event) => {
      const dataFilter = filterItem.getAttribute("data-filter");
      const portfolioCards = document.querySelectorAll(".portfolio__card");

      if (dataFilter === "all") {
        portfolioCards.forEach((card) => (card.style.display = "block"));
      } else {
        portfolioCards.forEach((card) => (card.style.display = "none"));
        const filteredCards = document.querySelectorAll(
          ".portfolio__card.f_" + dataFilter
        );
        filteredCards.forEach((card) => (card.style.display = "block"));
      }

      filterItems.forEach((item) => item.classList.remove("active"));
      filterItem.classList.add("active");

      const visibleCards = document.querySelectorAll(
        ".portfolio__card[style*='display: block']"
      );

      if (visibleCards.length < 4) {
        document.querySelectorAll(".grid .wide").forEach((wideCard) => {
          wideCard.classList.remove("wide");
          wideCard.classList.add("no-width");
        });

        document.querySelectorAll(".grid .tall").forEach((tallCard) => {
          tallCard.classList.remove("tall");
          tallCard.classList.add("no-height");
        });

        document.querySelectorAll(".grid .big").forEach((bigCard) => {
          bigCard.classList.remove("big");
          bigCard.classList.add("no-width", "no-height");
        });
      } else {
        document.querySelectorAll(".grid .no-width").forEach((noWidthCard) => {
          noWidthCard.classList.remove("no-width");
          noWidthCard.classList.add("wide");
        });

        document
          .querySelectorAll(".grid .no-height")
          .forEach((noHeightCard) => {
            noHeightCard.classList.remove("no-height");
            noHeightCard.classList.add("tall");
          });

        document
          .querySelectorAll(".grid .no-width.no-height")
          .forEach((noWidthNoHeightCard) => {
            noWidthNoHeightCard.classList.remove("no-width", "no-height");
            noWidthNoHeightCard.classList.add("big");
          });
      }

      event.preventDefault();
    });
  });
}

//! Инициализация табов Навыки
function createTabs(target, config) {
  const defaultConfig = {};
  const configOptions = Object.assign(defaultConfig, config);
  const elTabs =
    typeof target === "string" ? document.querySelector(target) : target;
  const elButtons = elTabs.querySelectorAll(".tabs__btn");
  const elPanes = elTabs.querySelectorAll(".tabs__pane");
  const eventShow = new Event("tab.itc.change");

  elTabs.setAttribute("role", "tablist");

  elButtons.forEach((el, index) => {
    el.dataset.index = index;
    el.setAttribute("role", "tab");
    elPanes[index].setAttribute("role", "tabpanel");
  });

  function show(elLinkTarget) {
    const elPaneTarget = elPanes[elLinkTarget.dataset.index];
    const elLinkActive = elTabs.querySelector(".tabs__btn-active");
    const elPaneShow = elTabs.querySelector(".tabs__pane-show");

    if (elLinkTarget === elLinkActive) return;

    if (elLinkActive) elLinkActive.classList.remove("tabs__btn-active");
    if (elPaneShow) elPaneShow.classList.remove("tabs__pane-show");

    elLinkTarget.classList.add("tabs__btn-active");
    elPaneTarget.classList.add("tabs__pane-show");
    elTabs.dispatchEvent(eventShow);
    elLinkTarget.focus();
  }

  function showByIndex(index) {
    const elLinkTarget = elButtons[index];
    if (elLinkTarget) show(elLinkTarget);
  }

  elTabs.addEventListener("click", (e) => {
    const target = e.target.closest(".tabs__btn");
    if (target) {
      e.preventDefault();
      show(target);
    }
  });

  return {
    show,
    showByIndex,
  };
}

window.addEventListener("load", function () {
  let preloader = document.getElementById("p_prldr");
  preloader.style.transition = "opacity 0.5s";
  preloader.style.opacity = "0";

  setTimeout(function () {
    preloader.style.display = "none";
  }, 500);
});

document.addEventListener("DOMContentLoaded", () => {
  hideHeader();
  createParalax();
  addActive();
  toggleTheme();
  createAnAnchor();
  createFilter();
  createTabs(".tabs");

  // Запрос файла
  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then((jsonData) => {
      createPortfolioItem(jsonData.data.projects);
      createTabsItems(jsonData.data.tabs);
    })
    .catch((error) => {
      console.error("Ошибка при получении файла:", error);
    });
});

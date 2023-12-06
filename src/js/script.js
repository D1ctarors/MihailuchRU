"use strict";
document.addEventListener("DOMContentLoaded", () => {
  //! Переменные
  let header = document.querySelector(".header"),
    body = document.querySelector("body"),
    modals = document.querySelectorAll(".modal"),
    prevScrollPos = document.body.scrollTop,
    paralaxWrapper = document.querySelectorAll(".parallax-wrap li");

  //! Скрытие шапки при скролле
  function hideHeaderScroll() {
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
  hideHeaderScroll();

  //! Паралакс
  function paralaxToGreating() {
    document.addEventListener("mousemove", (event) => {
      paralaxWrapper.forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    });
  }
  paralaxToGreating();

  //! Добавление active в навигацию
  function giveActiveForNavigation() {
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
  giveActiveForNavigation();

  //! Преключение темы
  function SwitcherTheme() {
    const btn = document.querySelector(".btn-toggle-theme"),
      currentTheme = localStorage.getItem("theme");
    let iconThemeDark = '<i class="fa-solid fa-moon"></i>',
      iconThemeLight =
        '<i class="fa-solid fa-sun" style="color: #ffffff;"></i>';

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
  SwitcherTheme();

  //! Плавный скролл
  function scrollTo() {
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
  scrollTo();

  //! Работа фильтров портфолио
  function WorkFilter() {
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
          document
            .querySelectorAll(".grid .no-width")
            .forEach((noWidthCard) => {
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
  WorkFilter();

  //! Инициализация табов Навыки
  function initializeItcTabs(target, config) {
    const defaultConfig = {};
    const _config = Object.assign(defaultConfig, config);
    const _elTabs =
      typeof target === "string" ? document.querySelector(target) : target;
    const _elButtons = _elTabs.querySelectorAll(".tabs__btn");
    const _elPanes = _elTabs.querySelectorAll(".tabs__pane");
    const _eventShow = new Event("tab.itc.change");

    function init() {
      _elTabs.setAttribute("role", "tablist");
      _elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute("role", "tab");
        _elPanes[index].setAttribute("role", "tabpanel");
      });
    }

    function show(elLinkTarget) {
      const elPaneTarget = _elPanes[elLinkTarget.dataset.index];
      const elLinkActive = _elTabs.querySelector(".tabs__btn-active");
      const elPaneShow = _elTabs.querySelector(".tabs__pane-show");

      if (elLinkTarget === elLinkActive) {
        return;
      }

      elLinkActive ? elLinkActive.classList.remove("tabs__btn-active") : null;
      elPaneShow ? elPaneShow.classList.remove("tabs__pane-show") : null;

      elLinkTarget.classList.add("tabs__btn-active");
      elPaneTarget.classList.add("tabs__pane-show");
      _elTabs.dispatchEvent(_eventShow);
      elLinkTarget.focus();
    }

    function showByIndex(index) {
      const elLinkTarget = _elButtons[index];
      elLinkTarget ? show(elLinkTarget) : null;
    }

    function events() {
      _elTabs.addEventListener("click", (e) => {
        const target = e.target.closest(".tabs__btn");
        if (target) {
          e.preventDefault();
          show(target);
        }
      });
    }

    init();
    events();

    return {
      show,
      showByIndex,
    };
  }

  initializeItcTabs(".tabs");
  
});

window.menu = {
  id: "menu-screen",
  initialized: 0,
  options: [],
  previousExit: NaN,
  defaultOptions: [
    {
      id: "search",
      label: "menu.search",
      icon: "fa-solid fa-magnifying-glass",
      action: "search.init",
    },
    {
      id: "home",
      label: "menu.home",
      icon: "fa-solid fa-house",
      action: "home.restart",
    },
    {
      id: "hot",
      label: "menu.hot",
      icon: "fa-solid fa-fire",
      action: "hot.restart",
    },
    {
      id: "movies",
      label: "menu.movies",
      icon: "fa-solid fa-film",
      action: "movies.restart",
    },
    {
      id: "favourites",
      label: "menu.favourites",
      icon: "fa-solid fa-bookmark",
      action: "favourites.start",
    },
    {
      id: "sports",
      label: "menu.sports",
      icon: "fa-solid fa-person-running",
      action: "sports.start",
    },
    {
      id: "series",
      label: "menu.series",
      icon: "fa-solid fa-clapperboard",
      action: "series.start",
    },
    {
      id: "subscription",
      label: "menu.subscribe",
      icon: "fa-solid fa-ticket",
      action: "subscription.start",
    },
    {
      id: "connectToTv",
      label: "menu.connectToTv",
      icon: "fa-solid fa-tv",
      tool: true,
      action: "connectToTv.start",
    },
    {
      id: "settings",
      label: "menu.settings",
      icon: "fa-solid fa-gear",
      tool: true,
      action: "settings.init",
    },
    // {
    //   id: "logout",
    //   label: "menu.logout",
    //   icon: "fa-solid fa-sign-out",
    //   tool: true,
    //   event: "logout",
    //   // action: "logout",
    // },
    {
      id: "login",
      label: "menu.login",
      icon: "fa-solid fa-sign-out",
      tool: true,
      // event: "login",
      action: "login.init",
    },
    // {
    //   id: "exit",
    //   label: "menu.exit",
    //   icon: "fa-solid fa-xmark",
    //   tool: true,
    //   action: "exit.init",
    // },
  ],
  selected: 1,
  previous: NaN,
  isOpen: false,

  init: function (reset) {
    menu.initialized = 1;
    var menu_element = document.createElement("div");
    menu_element.id = this.id;

    var tool_options = "";
    var menu_options = "";
    if (session.storage.isAnonymous && session.storage.country != "BD") {
      menu.options = menu.defaultOptions.filter(
        (item) => item.id !== "favourites" && item.id !== "settings" && item.id !== "subscription"
      );
    } else if (session.storage.isAnonymous) {
      menu.options = menu.defaultOptions.filter((item) => item.id !== "favourites");
    } else {
      menu.options = menu.defaultOptions.filter((item) => item.id !== "login" && item.id !== "connectToTv");
    }

    menu.options.forEach((element, index) => {
      if (!!element.tool) {
        tool_options += `
        <a class="option ${reset && element.id === "settings" ? "selected" : index === menu.selected ? "selected" : ""}">
          <i class="${element.icon}"></i>
          <p>${translate.go(element.label)}</p>
        </a>`;
      } else {
        menu_options += `
        <a class="option ${element.id == "subscription" ? "subscription" : ""} ${!reset && index === menu.selected ? "selected" : ""}">
          <i class="${element.icon}"></i>
          <p class="">${translate.go(element.label)}</p>
        </a>`;
      }
    });

    menu_element.innerHTML = `
    <div class="content">
      <div class="profile">
        <div class="avatar">
          <img src="${
            session.storage.customer && session.storage.customer.image !== null
              ? baseURL + session.storage.customer.image
              : "img/logo_B.png"
          }"> 
        </div>
        <i class="fa-solid fa-crown"></i>
      </div>
      <div class="options">
        ${menu_options}
      </div>
      <div class="tools">
        ${tool_options}
      </div>
    </div>`;

    document.body.appendChild(menu_element);
  },

  destroy: function () {
    menu.initialized = 0;
    if (menu.isOpen) {
      menu.close();
    }
    document.getElementById(this.id) && document.body.removeChild(document.getElementById(this.id));
  },

  open: function () {
    menu.isOpen = true;
    $("body").addClass("open-menu");
    $(`#${menu.id} .option.selected`).addClass("focus");
    this.previous = main.state;
    main.state = this.id;
  },

  close: function () {
    menu.isOpen = false;
    $("body").removeClass("open-menu");
    $(`#${menu.id} .option`).removeClass("focus");
    main.state = this.previous;
  },

  move: function () {
    var options = "";
    (menu.option.root ? menu.options : menu.options[menu.option.item].childs).forEach((element, index) => {
      options += `<div class="option ${element.icon}${
        this.option.selected === index ? " selected" : ""
      }">${element.text ? element.text : ""}</div>`;
      if (this.option.selected === index) {
        document.getElementById(this.id + "-title").innerText = element.title;
      }
    });
    document.getElementById(`${menu.id}-options`).innerHTML = options;
  },

  keyDown: function (event) {
    switch (event.keyCode) {
      case tvKey.KEY_RIGHT:
        menu.close();
        break;
      case tvKey.KEY_BACK:
      case tvKey.KEY_ESCAPE:
        exit.init();
        break;
      case tvKey.KEY_UP:
        var options = $(`#${menu.id} .option`);
        var current = options.index($(`#${menu.id} .option.focus`));
        options.removeClass("focus");
        options.eq(current > 0 ? current - 1 : current).addClass("focus");
        break;
      case tvKey.KEY_DOWN:
        var options = $(`#${menu.id} .option`);
        var current = options.index($(`#${menu.id} .option.focus`));
        options.removeClass("focus");
        options.eq(current < options.length - 1 ? current + 1 : current).addClass("focus");
        break;
      case tvKey.KEY_ENTER:
      case tvKey.KEY_PANEL_ENTER:
        var options = $(`#${menu.id} .option`);
        var current = options.index($(`#${menu.id} .option.focus`));
        if (menu.options[current].action) {
          var selected = options.index($(`#${menu.id} .option.selected`));
          options.removeClass("selected");
          options.eq(current).addClass("selected");
          this.previous = window[menu.options[current].id].id;
          // if (menu.options[current].action.split(".")[0] !== "exit") {
          // if (selected !== menu.options.length - 1) {
          window[menu.options[selected].id].destroy();
          // } else {
          //   if (menu.previousExit) {
          //     window[menu.options[menu.previousExit].id].destroy();
          // menu.previousExit = NaN;
          // }
          // }
          test = menu.options[current].action.split(".");
          window[test[0]][test[1]]();
          menu.close();
          // } else {
          //   menu.previousExit = selected;
          //   document.getElementById(menu.options[selected].id).classList.add("selected");
          //   document.getElementById(menu.options[selected].id).classList.add("focus");
          //   exit.init();
          // }
        } else if (menu.options[current].event) {
          window.main.events[menu.options[current].event]();
        }
        break;
    }
  },
};

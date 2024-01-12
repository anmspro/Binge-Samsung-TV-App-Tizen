window.home_details = {
  id: "home_details-screen",
  appendScreen: NaN,
  previous: NaN,
  data: {
    this: NaN,
    continue: NaN,
    contentDetails: NaN,
  },
  callbacks: {
    init: NaN,
    destroy: NaN,
  },

  init: function (item, screen, init, destroy) {
    home_details.appendScreen = screen;
    home_details.callbacks.init = init;
    home_details.callbacks.destroy = destroy;
    const contentDetailResponse = service.contentDetails({
      body: {
        id: item.id,
        content_type: item.content_type,
      },
      success: function (data) {
        home_details.data.contentDetails = data;
      },
    });
    home_details.callbacks.init && home_details.callbacks.init(item);
    var buttons = document.createElement("div");
    buttons.className = `${home_details.id} ${home_details.id}_buttons`;
    buttons.innerHTML = `
    <a class="selected">
      <i class="fa-solid fa-play"></i>
      <p>${translate.go("home.details.play", { season: 1, episode: 1 })}</p>
      <span></span>
    </a>
    <a>
      <i class="fa-solid fa-bookmark"></i>
      <p>${translate.go("home.details.add")}</p>
    </a>
    <a>
      <i class="fa-solid fa-list"></i>
      <p>${translate.go("home.details.episodes")}</p>
    </a>
    <a>
      <i class="fa-solid fa-clone"></i>
      <p>${translate.go("home.details.related")}</p>
    </a>`;

    home_details.data.this = item;
    $(`#${screen.id} .details .info`).append(buttons);

    if (item.type === "movie") {
      $(`.${home_details.id}.${home_details.id}_buttons a`).eq(2).remove();
      $(`.${home_details.id}.${home_details.id}_buttons a`)
        .eq(0)
        .addClass(`${item.playhead > 0 ? "played" : ""}`)
        .attr("percent", (item.playhead * 100) / item.duration);

      var text = translate.go(
        `home.details.${item.playhead > 0 ? "continue" : "play"}`,
        { season: 0, episode: 0 }
      );
      $(`.${home_details.id}.${home_details.id}_buttons a p`).eq(0).text(text);
      $(`.${home_details.id}.${home_details.id}_buttons a span`)
        .eq(0)
        .width((item.playhead * 100) / item.duration + "%");
    } else {
      loading.start();
      service.continue({
        data: {
          ids: item.id,
        },
        success: function (response) {
          loading.end();
          home_details.data.continue = mapper.continue(response);
          $(`.${home_details.id}.${home_details.id}_buttons a`)
            .eq(0)
            .addClass(
              `${home_details.data.continue.played > 0 ? "played" : ""}`
            )
            .attr("percent", home_details.data.continue.played);

          var text = translate.go(
            `home.details.${
              home_details.data.continue.played > 0 ? "continue" : "play"
            }`,
            {
              season: home_details.data.continue.season_number,
              episode: home_details.data.continue.episode_number,
            }
          );
          $(`.${home_details.id}.${home_details.id}_buttons a p`)
            .eq(0)
            .text(text);
          $(`.${home_details.id}.${home_details.id}_buttons a span`)
            .eq(0)
            .width(home_details.data.continue.played + "%");
        },
        error: function (error) {
          loading.end();
          console.log(error);
        },
      });
    }

    $(`#${screen.id} .details`).addClass("full");
    $(`body`).addClass(`${home_details.id}`);

    home_details.previous = main.state;
    main.state = home_details.id;
  },

  destroy: function () {
    $(`body`).removeClass(`${home_details.id}`);
    $(`#${home_details.appendScreen.id} .details.full`).removeClass("full");
    $(`.${home_details.id}`).remove();
    home_details.data.continue = NaN;
    home_details.data.this = NaN;

    main.state = home_details.previous;
    home_details.callbacks.destroy && home_details.callbacks.destroy();
  },

  keyDown: function (event) {
    switch (event.keyCode) {
      case tvKey.KEY_BACK:
      case 27:
        home_details.destroy();
        break;
      case tvKey.KEY_UP:
        var buttons = $(`.${home_details.id}.${home_details.id}_buttons a`);
        var current = buttons.index(
          $(`.${home_details.id}.${home_details.id}_buttons a.selected`)
        );
        buttons.removeClass("selected");
        buttons.eq(current > 0 ? current - 1 : current).addClass("selected");
        break;
      case tvKey.KEY_DOWN:
        var buttons = $(`.${home_details.id}.${home_details.id}_buttons a`);
        var current = buttons.index(
          $(`.${home_details.id}.${home_details.id}_buttons a.selected`)
        );
        buttons.removeClass("selected");
        buttons
          .eq(current < buttons.length - 1 ? current + 1 : current)
          .addClass("selected");
        break;
      case tvKey.KEY_ENTER:
      case tvKey.KEY_PANEL_ENTER:
        var buttons = $(`.${home_details.id}.${home_details.id}_buttons a`);
        var current = buttons.index(
          $(`.${home_details.id}.${home_details.id}_buttons a.selected`)
        );
        console.log("home details data", home_details);

        switch (current) {
          case 0:
            video.init(home_details.data.contentDetails);
            break;
          case 1:
            console.log("add list");
            break;
          case 2:
            console.log("screen name", this.appendScreen);
            home_episodes.init(
              home_details.data.contentDetails,
              this.appendScreen
            );
            break;
          case 3:
            console.log("related");
            break;
        }
        break;
    }
  },
};

window.search = {
  id: "search-screen",
  previous: NaN,
  input: NaN,
  position: -1,
  last_postion: 0,
  items_per_row: 5,
  scroll_data: {
    item_padding: 30,
    item_height: 390,
    rows: 10,
  },
  data: {
    result: [],
  },

  init: function () {
    this.position = -1;
    var search_element = document.createElement("div");
    search_element.id = search.id;

    search_element.innerHTML = `
      <div class="content">
        <div class="input focus" id="search-screen_input">
          <input type="text" placeholder="${translate.go("search.placeholder")}">
        </div>
        <div id="list-container" class="list-container">
          
        </div>
        <!--
        <div class="logo-fixed">
          <img src="server/img/logo-big.svg"/>
        </div>
        -->
      </div>`;

    document.body.appendChild(search_element);
    search.input = document.getElementById("search-screen_input").firstElementChild;
  },

  destroy: function () {
    search.data.result = [];
    document.getElementById(this.id) && document.body.removeChild(document.getElementById(this.id));
  },

  start: function () {
    loading.start();
    api.search({
      data: {
        search: search.input.value,
        page: 1,
        page_size: 1000,
      },
      success: function (response) {
        if (document.getElementById("search-data-container")) {
          document.getElementById("search-data-container").remove();
        }
        loading.end();
        search.data.result = mapper.search(response);
        var elements_content = "";
        if (search.data.result.length > 0) {
          search.data.result.forEach((element, index) => {
            elements_content += `
              <div class="item${index === 0 ? " selected" : ""}">
                <img src="${element.poster}" alt="">
                <div class="title">${element.title}</div>
              </div>`;
          });
        } else {
          elements_content = `
          <div class="no-data-container">
            <div id="no-data" class="no-data-content">No Data Available</div>
          </div>
            `;
        }

        const tempContainer = document.createElement("div");
        if (search.data.result.length > 0) {
          const noDataContainer = document.getElementsByClassName("no-data-container")[0];
          if (noDataContainer) {
            noDataContainer.remove();
          }
          // document.getElementById("search-data-container").remove();

          tempContainer.innerHTML = `<div id="search-data-container" class="list-container-over" style="grid-template-columns: repeat(${search.items_per_row}, 1fr);">
            ${elements_content}
            </div>`;
        } else {
          // tempContainer.classList.add("no-data-container");
          const noDataContainer = document.getElementById("search-data-container");
          if (noDataContainer) {
            noDataContainer.remove();
          }
          tempContainer.innerHTML = `<div>
            ${elements_content}
            </div>`;
        }

        // $(".list-container-over").html(elements_content);
        document.getElementById("list-container").appendChild(tempContainer.firstElementChild);
        search.last_postion = 0;
        search.scroll_data.item_height = parseFloat(
          window.getComputedStyle($(`.list-container-over .item`).get(0)).height.replace("px", "")
        );
        search.scroll_data.rows = Math.ceil(search.data.result.length / search.items_per_row);
      },
      error: function (error) {
        loading.end();
        console.error(error);
      },
    });
  },

  toggleFocus: function (newIndex) {
    if (newIndex < 0) {
      $("#search-screen_input").addClass("focus");
      $(".list-container").removeClass("focus");
      search.last_postion = search.position >= 0 ? search.position : search.last_postion;
      newIndex = -1;
    } else {
      if (search.position == -1) {
        $("#search-screen_input").removeClass("focus");
        $(".list-container").addClass("focus");
      }
      if (newIndex >= search.data.result.length) newIndex = search.data.result.length - 1;
      $(`.list-container .item`).removeClass("selected");
      $(`.list-container .item`).eq(newIndex).addClass("selected");
    }
    search.position = newIndex;
  },

  scroll: function () {
    if (search.data.result.length == 0) return;
    var current_row = Math.floor(search.position / search.items_per_row);
    if (current_row < 3) {
      $(".list-container-over").get(0).style.marginTop = "0px";
    } else if (!(current_row + 1 >= search.scroll_data.rows)) {
      current_row = current_row - 1;
      $(".list-container-over").get(0).style.marginTop =
        `-${current_row * (search.scroll_data.item_height + search.scroll_data.item_padding)}px`;
    }
  },

  keyDown: function (event) {
    switch (event.keyCode) {
      case tvKey.KEY_BACK:
      case tvKey.KEY_ESCAPE:
        if (search.position === -1) {
          menu.open();
        } else {
          search.toggleFocus(-1);
        }
        break;
      case tvKey.KEY_NEXT:
        break;
      case tvKey.KEY_UP:
        search.toggleFocus(search.position - search.items_per_row);
        search.scroll();
        break;
      case tvKey.KEY_DOWN:
        var to_index = search.position + search.items_per_row;
        if (search.position == -1) to_index = search.last_postion;
        search.toggleFocus(to_index);
        search.scroll();
        break;
      case tvKey.KEY_LEFT:
        if (search.position % search.items_per_row == 0) menu.open();
        else search.toggleFocus(search.position - 1);
        break;
      case tvKey.KEY_RIGHT:
        if ((search.position + 1) % search.items_per_row == 0) return;
        search.toggleFocus(search.position + 1);
        break;
      case tvKey.KEY_ENTER:
      case tvKey.KEY_PANEL_ENTER:
        if (this.position === -1) {
          keyboard.init(search.input, search.start);
        } else {
          loading.start();
          const item = search.data.result[search.last_postion];
          api.contentDetails({
            body: {
              id: item.id,
              content_type: item.content_type,
            },
            success: function (data) {
              home_details.init(
                search.data.result[search.position],
                data,
                home,
                function (item) {
                  var home_element = document.createElement("div");
                  home_element.id = home.id;
                  home_element.innerHTML = `
                <div class="content">
                  <div class="details full">
                    <div class="background">
                      <img src="${item.background}">
                    </div>
                    <div class="info">
                      <div class="title resize">${item.title}</div>
                      <div class="description resize">${item.description}</div>
                      <div class="buttons">
                        <a class="selected">Play</a>
                        <a>More information</a>
                      </div>
                    </div>
                  </div>
                  <!--
                  <div class="logo-fixed">
                    <img src="server/img/logo-big.svg"/>
                  </div>
                  -->
                </div>`;

                  document.getElementById(search.id).style.display = "none";
                  document.body.appendChild(home_element);

                  var title = $(".details .info .title")[0];
                  title.style.fontSize = title.scrollHeight > title.clientHeight ? "3.5vh" : "5vh";

                  var description = $(".details .info .description")[0];
                  description.style.fontSize = description.scrollHeight > description.clientHeight ? "2vh" : "2.5vh";
                },
                function () {
                  document.getElementById(search.id).style.display = "block";
                  home.destroy();
                  search.toggleFocus(search.position);
                }
              );
            },
          });
        }
        break;
    }
  },
};

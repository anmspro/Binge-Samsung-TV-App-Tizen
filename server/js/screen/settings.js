window.settings = {
  id: "settings-screen",
  isDetails: false,
  customer: NaN,
  selectedTab: "",
  settingsTab: {
    voucher: {
      selected: 0,
      keyboardElement: undefined,
    },
    deleteAccount: {
      buttonElement: undefined,
    },
    about: {},
    interests: {
      options: {
        action: "ACTION",
        comedy: "COMEDY",
        reality: "REALITY",
        history: "HISTORY",
        horror: "HORROR",
        romance: "ROMANCE",
        thriller: "THRILLER",
        drama: "DRAMA",
        crime: "CRIME",
        war: "WAR",
        fantasy: "FANTASY",
        music: "MUSIC",
      },
      optionTab: false,
    },
    termsOfUse: {
      htmlContent: null,
      scrollableContent: null,
    },
    privacyNotice: {
      htmlContent: null,
      scrollableContent: null,
    },
    faq: {
      htmlContent: null,
      scrollableContent: null,
    },
    logout: {
      buttonElement: undefined,
    },
  },
  options: [
    {
      id: "about",
      label: "settings.menu.about",
      type: "html",
    },
    // {
    //   id: "subscription",
    //   label: "settings.menu.subscription",
    //   type: "html",
    // },
    {
      id: "vouchers",
      label: "settings.menu.vouchers",
      type: "html",
    },
    {
      id: "faq",
      label: "settings.menu.faq",
      type: "html",
    },
    {
      id: "terms_of_use",
      label: "settings.menu.tou",
      type: "html",
    },
    {
      id: "privacy_notice",
      label: "settings.menu.prnotice",
      type: "html",
    },
    {
      id: "logout",
      label: "settings.menu.logout",
      type: "html",
    },
    {
      id: "delete",
      label: "settings.menu.delete",
      type: "html",
    },
  ],
  activatedOptions: [],
  previous: NaN,

  init: function () {
    if (session.storage.isAnonymous) {
      const filteredOptions = settings.options.filter(
        (item) => item.id !== "about" && item.id !== "delete" && item.id !== "vouchers" && item.id !== "logout"
      );

      settings.activatedOptions = filteredOptions;
    } else {
      settings.activatedOptions = settings.options;
    }

    var settings_element = document.createElement("div");
    settings_element.id = settings.id;

    settings_element.innerHTML = `
      <div class="content">
        <div class="container-mid">
          <ul class="options" id="settings-menu">${settings.generateMenu()}</ul>
        </div>
        <div class="container" id="settings-details"></div>
      </div>`;

    document.body.appendChild(settings_element);
    settings.details.show(settings.activatedOptions[0]);
  },

  settingsMenuApiCall: function () {
    if (!settings.settingsTab.privacyNotice.htmlContent) {
      api.fetchPrivacy({
        success: function (response) {
          settings.settingsTab.privacyNotice.htmlContent = response;
        },
        error: function (error) {
          console.error(error);
        },
      });
    }
    if (!settings.settingsTab.termsOfUse.htmlContent) {
      api.fetchTermsConditions({
        success: function (response) {
          settings.settingsTab.termsOfUse.htmlContent = response;
        },
        error: function (error) {
          console.error(error);
        },
      });
    }
    if (!settings.settingsTab.faq.htmlContent) {
      api.fetchFAQ({
        success: function (response) {
          settings.settingsTab.faq.htmlContent = response;
        },
        error: function (error) {
          console.error(error);
        },
      });
    }
  },

  destroy: function () {
    settings.isDetails = false;
    document.body.removeChild(document.getElementById(settings.id));
  },

  keyDown: function (event) {
    switch (event.keyCode) {
      case tvKey.KEY_BACK:
      case tvKey.KEY_ESCAPE:
        menu.open();
        break;
      case tvKey.KEY_UP:
        if (settings.isDetails) {
          switch (this.selectedTab) {
            case "interest":
              var options = $(`.options li`);
              var current = options.index($(`.options li.active`));
              settings.details[settings.activatedOptions[current].type].move(-1);
              break;
            case "terms_of_use":
              const touScrollContainer = settings.settingsTab.termsOfUse.scrollableContent;
              const touNewScrollTop = touScrollContainer.scrollTop - 50;
              touScrollContainer.scrollTop = Math.min(
                touNewScrollTop,
                touScrollContainer.scrollHeight - touScrollContainer.clientHeight
              );
              break;
            case "privacy_notice":
              const pnScrollContainer = settings.settingsTab.privacyNotice.scrollableContent;
              const pnNewScrollTop = pnScrollContainer.scrollTop - 50;
              pnScrollContainer.scrollTop = Math.min(
                pnNewScrollTop,
                pnScrollContainer.scrollHeight - pnScrollContainer.clientHeight
              );
              break;
            case "faq":
              const faqScrollContainer = settings.settingsTab.faq.scrollableContent;
              const faqNewScrollTop = faqScrollContainer.scrollTop - 50;
              faqScrollContainer.scrollTop = Math.min(
                faqNewScrollTop,
                faqScrollContainer.scrollHeight - faqScrollContainer.clientHeight
              );
              break;
            case "voucher":
              if (settings.settingsTab.voucher.selected) {
                settings.settingsTab.voucher.selected = 0;
                var input = $(`#voucher-input`);
                input.css("background-color", "white");
                var input = document.getElementById("voucher-input");
                var button = document.getElementById("redeem_button");
                button.style.backgroundColor = "transparent";
                settings.settingsTab.voucher.keyboardElement = input;
              }
              break;
          }
        } else {
          var options = $(`.options li`);
          var current = options.index($(`.options li.selected`));

          options.removeClass("selected");
          var newCurrent = current > 0 ? current - 1 : current;
          options.eq(newCurrent).addClass("selected");
          settings.details.show(settings.activatedOptions[newCurrent]);
        }
        break;
      case tvKey.KEY_DOWN:
        if (settings.isDetails) {
          switch (this.selectedTab) {
            case "voucher":
              if (!settings.settingsTab.voucher.selected) {
                settings.settingsTab.voucher.selected = 1;
                var button = document.getElementById("redeem_button");
                button.style.backgroundColor = "red";
                var voucherInput = document.getElementById("voucher-input");
                voucherInput.style.backgroundColor = "transparent";
                break;
              }
            case "terms_of_use":
              const touScrollContainer = settings.settingsTab.termsOfUse.scrollableContent;
              const touNewScrollTop = touScrollContainer.scrollTop + 50;
              touScrollContainer.scrollTop = Math.min(
                touNewScrollTop,
                touScrollContainer.scrollHeight - touScrollContainer.clientHeight
              );
              break;
            case "faq":
              const faqScrollContainer = settings.settingsTab.faq.scrollableContent;
              const faqNewScrollTop = faqScrollContainer.scrollTop + 50;
              faqScrollContainer.scrollTop = Math.min(
                faqNewScrollTop,
                faqScrollContainer.scrollHeight - faqScrollContainer.clientHeight
              );
              break;
            case "privacy_notice":
              const pnScrollContainer = settings.settingsTab.privacyNotice.scrollableContent;
              const pnNewScrollTop = pnScrollContainer.scrollTop + 50;
              pnScrollContainer.scrollTop = Math.min(
                pnNewScrollTop,
                pnScrollContainer.scrollHeight - pnScrollContainer.clientHeight
              );
              break;
            case "delete_account":
            case "interest":
              var options = $(`.options li`);
              var current = options.index($(`.options li.active`));
              settings.details[settings.activatedOptions[current].type].move(1);
              break;
          }
        } else {
          var options = $(`.options li`);
          var current = options.index($(`.options li.selected`));

          options.removeClass("selected");
          var newCurrent = current < options.length - 1 ? current + 1 : current;
          options.eq(newCurrent).addClass("selected");
          settings.details.show(settings.activatedOptions[newCurrent]);
        }
        break;
      case tvKey.KEY_LEFT:
        if (settings.isDetails) {
          var options = $(`.options li`);
          var current = options.index($(`.options li.active`));
          options.removeClass("active");
          options.eq(current).addClass("selected");
          settings.details[settings.activatedOptions[current].type].move(false);
          settings.isDetails = false;
          switch (this.selectedTab) {
            case "voucher":
              settings.settingsTab.voucher.selected = 0;
              settings.settingsTab.voucher.keyboardElement = undefined;
              $(`#voucher-input`).css("background-color", "transparent");
              break;
            case "delete_account":
              $(`#delete_button`).css("background-color", "transparent");
              settings.settingsTab.deleteAccount.buttonElement = undefined;
              break;
            case "logout":
              $(`#logout_button`).css("background-color", "transparent");
              settings.settingsTab.logout.buttonElement = undefined;
              break;
            case "interest":
          }
        } else {
          menu.open();
        }
        break;
      case tvKey.KEY_RIGHT:
        if (!settings.isDetails) {
          var options = $(`.options li`);
          var current = options.index($(`.options li.selected`));
          options.removeClass("selected");
          options.eq(current).addClass("active");
          settings.isDetails = true;
          const tab = settings.activatedOptions[current];
          settings.details[tab.type].move(tab.id);
        }
        break;
      case tvKey.KEY_ENTER:
      case tvKey.KEY_PANEL_ENTER:
        if (settings.isDetails) {
          // var options = $(`.options li`);
          // var current = options.index($(`.options li.active`));
          // var element = settings.options[current];
          // settings.details[element.type].action(element.id);
          // settings.details[settings.options[current].type].move(1);
          switch (this.selectedTab) {
            case "voucher":
              if (!settings.settingsTab.voucher.selected) {
                settings.settingsTab.voucher.keyboardElement &&
                  keyboard.init(settings.settingsTab.voucher.keyboardElement);
              } else {
                var voucherInput = document.getElementById("voucher-input").value;
                if (voucherInput.length !== 8) {
                  document.getElementById("errorMsg").innerText = "Please Enter Correct 8 Digit Code.";
                } else {
                  document.getElementById("errorMsg").innerText = "";
                  api.voucherRedeem({
                    data: {
                      customer_id: settings.customer.id,
                      phone: settings.customer.phone,
                      voucher_code: voucherInput,
                    },
                    success: function (response) {
                      document.getElementById("errorMsg").innerText = `${response}`;
                    },
                    error: function (error) {
                      console.error(error);
                    },
                  });
                }
              }
              break;
            case "delete_account":
              if (settings.settingsTab.deleteAccount.buttonElement) {
                api.removeAccount({
                  data: {
                    id: session.storage.customer.id,
                  },
                  success: function (response) {
                    settings.destroy();
                    menu.destroy();
                    login.init();
                  },
                  error: function (error) {
                    console.error(error);
                  },
                });
              }
              break;
            case "logout":
              if (settings.settingsTab.logout.buttonElement) {
                main.events.logout();
              }
              break;
            case "interest":
          }
        }
        break;
    }
  },

  generateMenu: function (index) {
    var className = index === undefined ? "selected" : "active";
    var selected = index === undefined ? 0 : index;

    return settings.activatedOptions
      .map((option, index) => `<li class="${index === selected ? className : ""}">${translate.go(option.label)}</li>`)
      .join("");
  },

  details: {
    show: function (element) {
      $("#settings-details").html(settings.details[element.type].create(element.id));
    },

    list: {
      create: function (id) {
        switch (id) {
          case "interest":
            var options = settings.settingsTab.interests.options;
            var active = "action";
            break;
        }
        return (
          '<ul class="list-active" id="list-details-offset">' +
          Object.keys(options)
            .map((option) => `<li class="${option === active ? "active" : ""}">${options[option]}</li>`)
            .join("") +
          "</ul>"
        );
      },

      adjust: function (index, size, elementId) {
        var marginTop = 0;
        if (size > 6 && index > 5) {
          if (index > size - 2) {
            marginTop = -((size - 6) * 104);
          } else {
            marginTop = -((index - 5) * 104);
          }
        }

        document.getElementById(elementId).style.marginTop = `${marginTop}px`;
      },

      action: function (id) {
        var optionsMenu = $(`#settings-details li`);
        var index = optionsMenu.index($(`#settings-details li.selected`));

        switch (id) {
          case "videoquality":
            var options = settings.qualities;
            var method = function (value) {
              session.storage.quality = value;
              session.update();
            };
            break;
        }
        method(Object.keys(options)[index]);
        optionsMenu.removeClass("active");
        optionsMenu.eq(index).addClass("active");
      },

      move: function (index) {
        settings.selectedTab = "interest";
        var options = $(`#settings-details li`);
        if (index === false) {
          options.removeClass("selected");
          return;
        }
        var currentSelected = options.index($(`#settings-details li.selected`));
        var current = currentSelected >= 0 ? currentSelected : options.index($(`#settings-details li.active`));

        options.removeClass("selected");
        if (index < 0) {
          var newCurrent = current > 0 ? current + index : current;
        } else {
          var newCurrent = current + index < options.length ? current + index : current;
        }

        options.eq(newCurrent).addClass("selected");
        settings.details.list.adjust(newCurrent, options.length, "list-details-offset");
      },
    },

    html: {
      create: function (id) {
        switch (id) {
          case "about":
            settings.customer = session.storage.customer;

            return `
          <div class="about-container">
            <div class="about-profile">
              <img class="about_image" src="${
                session.storage.customer && session.storage.customer.image !== null
                  ? baseURL + session.storage.customer.image
                  : "img/avatar.svg"
              }">
              <div class="about_sub_container">
                <h1>${settings.customer.name || "Your name"}</h1>
                ${settings.customer.phone && `<p>${"+880" + settings.customer.phone}</p>`}
                
              </div>
            </div>
            ${
              settings.customer.active_subscriptions.length > 0
                ? `<div class="sub_div">
                  <div class="sub_inner_div">
                    <img src="img/tickMark.svg" class="tick">
                    <h1>Active Subscription</h1>
                  </div>
                  <h2>${settings.customer.active_subscriptions[0].package.title || ""}</h2>
                  <p>Expires on: <span class=""sub_span">${settings.customer.active_subscriptions[0].expiry_date || ""}</span></p>
                </div>`
                : ""
            }
          </div>`;
          // case "subscription":
          //   if (!settings.customer && !session.storage.customer.active_subscriptions) {
          //     api.profileDetails({
          //       id: session.storage.customer.id,
          //       success: function (response) {
          //         if (response) {
          //           let sessionInfo = JSON.parse(localStorage.getItem("session"));
          //           const mergedCustomerDetails = { ...session.storage.customer, ...response };
          //           sessionInfo.customer = mergedCustomerDetails;
          //           settings.customer = mergedCustomerDetails;
          //           localStorage.setItem("session", JSON.stringify(sessionInfo));
          //         } else {
          //           settings.customer = session.storage.customer;
          //         }
          //       },
          //       error: function (error) {
          //         console.error(error);
          //       },
          //     });
          //   }
          //   subscriptionDetails = settings.customer.active_subscriptions || [];
          //   if (subscriptionDetails.length > 0) {
          //     return `
          //     <div>
          //     ${subscriptionDetails.map(function (sub) {
          //       return `
          //       <div style="color: #fff">
          //         <div style="display: flex;">
          //           <img src="img/tickMark.svg" style="heigth: 50px; width: 50px;margin-right: 30px">
          //           <h1 style="font-size: 3vh">Active Subscription</h1>
          //         </div>
          //         <h2 style="font-size: 2.5vh">${sub.package.title}</h2>
          //         <p style="font-size: 2vh">Expires on: <span style="color: #Ff0000;margin-left: 10px;">${sub.expiry_date}</span></p>
          //         <button style="background-color: red;color: white;border-radius: 0.5rem; border: none;padding: 20px 100px 20px 100px; transition: background-color 0.3s;font-size: 2vh"  onmouseover="this.style.backgroundColor='rgb(229, 9, 20)'" onmouseout="this.style.backgroundColor='red'">Unsubscribe</button>
          //    </div>`;
          //     })}
          //     </div>`;
          //   } else {
          //     return `
          //     <div style=" color: #fff;height: 65vh;">
          //       <div>
          //         <h1 style="font-size: 3vh">Choose your desired plan</h1>
          //         <div  style="font-size: 2vh">
          //           <p><span style="color:green; margin-right: 15px">&#10003;</span> Watch what you want Ad Free!</p>
          //           <p><span style="color:green; margin-right: 15px">&#10003;</span> Multi-devices Access</p>
          //           <p><span style="color:green; margin-right: 15px">&#10003;</span> Change or Unsubscribe anytime you want.</p>
          //         </div>
          //         <button style="background-color: red;color: white;border-radius: 0.5rem; border: none;padding: 20px 100px 20px 100px; transition: background-color 0.3s;font-size: 2vh"  onmouseover="this.style.backgroundColor='rgb(229, 9, 20)'" onmouseout="this.style.backgroundColor='red'">Subscribe now</button>
          //       </div>
          //     </div>`;
          //   }
          case "vouchers":
            return `
            <div>
              <div class="voucher_div">
                <img src="img/voucher.svg" class="voucher_img">
                <h1>Vouchers</h1>
              </div> 
              <div class="voucher-input-container">
                <input id="voucher-input" placeholder="Enter Your Coupon here" />
              </div>
              <button id="redeem_button">Redeem</button>
             <p id="errorMsg"></p>
            </div>`;
          case "delete":
            return `
            <div class="logout_container">
              <div class="logout_inner_container">
                <h2> Are you sure you want to delete this account?</h2>
                <button id="delete_button">Yes</button>
            </div>
            </div>
            `;
          case "terms_of_use":
            let touParser = new DOMParser();
            let touDocument = touParser.parseFromString(settings.settingsTab.termsOfUse.htmlContent, "text/html");

            let touContent = touDocument.querySelector("body").innerHTML;

            const termsOfUseElement = document.getElementById("settings-details");
            termsOfUseElement.innerHTML = touContent;
            break;
          case "privacy_notice":
            let pnParser = new DOMParser();
            pnDocument = pnParser.parseFromString(settings.settingsTab.privacyNotice.htmlContent, "text/html");

            pnContent = pnDocument.querySelector("body").innerHTML;

            const privacyElement = document.getElementById("settings-details");
            privacyElement.innerHTML = pnContent;
            break;
          case "faq":
            if (settings.settingsTab.faq.htmlContent) {
              const faqContainer = settings.settingsTab.faq.htmlContent
                .map(
                  (item) => `
                <div class="faq-item" style="color: white">
                  <h2>${item.question}</h2>
                  <div id="answer_${item.id}"></div>
                </div>`
                )
                .join("");

              const tempElement = document.createElement("div");
              tempElement.id = "faq-scrollable-content";
              tempElement.style.height = "65vh";
              tempElement.style.overflowY = "scroll";
              tempElement.innerHTML = faqContainer;

              settings.settingsTab.faq.htmlContent.forEach((item) => {
                const element = tempElement.querySelector(`#answer_${item.id}`);
                element.innerHTML = item.answer;
              });
              return tempElement;
            }
            break;
          case "logout":
            return `
            <div class="logout_container">
              <div class="logout_inner_container">
                <h2> Are you sure you want to logout from this account?</h2>
                <button id="logout_button">Yes</button>
            </div>
            </div>`;
        }
      },

      move: function (id) {
        switch (id) {
          case "about":
            break;
          case "vouchers":
            //voucher
            settings.selectedTab = "voucher";
            if (!settings.settingsTab.voucher.selected) {
              $(`#voucher-input`).css("background-color", "rgb(30, 30, 30)");
              settings.settingsTab.voucher.keyboardElement = document.getElementById("voucher-input");
              break;
            }
          case "faq":
            settings.selectedTab = "faq";
            settings.settingsTab.faq.scrollableContent = document.getElementById("faq-scrollable-content");
            break;
          case "terms_of_use":
            settings.selectedTab = "terms_of_use";
            settings.settingsTab.termsOfUse.scrollableContent =
              document.getElementsByClassName("terms-condition-wrap-app")[0];
            break;
          case "privacy_notice":
            settings.selectedTab = "privacy_notice";
            settings.settingsTab.privacyNotice.scrollableContent =
              document.getElementsByClassName("terms-condition-wrap-app")[0];
            break;
          case "delete":
            settings.selectedTab = "delete_account";
            $(`#delete_button`).css("background-color", "rgb(229, 9, 20)");
            settings.settingsTab.deleteAccount.buttonElement = document.getElementById("delete_button");
            break;
          case "logout":
            settings.selectedTab = "logout";
            $(`#logout_button`).css("background-color", "rgb(229, 9, 20)");
            settings.settingsTab.logout.buttonElement = document.getElementById("logout_button");
            break;
        }
      },
    },
  },
};

window.player = {
  states: {
    STOPPED: 0,
    PLAYING: 1,
    PAUSED: 2,
    FORWARD: 3,
    REWIND: 4,
  },
  values: {
    forward_rewind: 0,
  },
  timers: {
    forward_rewind: NaN,
  },
  state: -1,
  plugin: NaN,
  video: NaN,
  duration: 0,
  levelId: -1,

  getVideo: function () {
    if (!player.video) {
      player.video = document.getElementById("bingeTizen");
    }
    return player.video;
  },

  config: function (timeFunction, endFunction) {
    player.getVideo().addEventListener("timeupdate", timeFunction);
    player.getVideo().addEventListener("ended", endFunction);
    // player.getVideo().addEventListener("waiting", player.onbufferingstart);
    // player.getVideo().addEventListener("playing", player.onbufferingcomplete);
    //player.getVideo().addEventListener("play", player.onPlay);
  },

  getPlayed: function () {
    return player.getVideo().currentTime;
  },

  getDuration: function () {
    return player.getVideo().duration;
  },
  init: function () {
    var playerInstance = videojs(player.getVideo(), {
      muted: false,
      // poster: 'https://web-api.binge.buzz/uploads/products/thumbs/YgoPKQ6hbligpQKP8vy7bY642NoRzP4XAS.jpg',
      autoplay: true,
      responsive: true,
      fluid: true,
      techOrder: ["html5"],
      html5: {
        vhs: {
          overrideNative: true,
          // experimentalBufferBasedABR: true
        },
        nativeAudioTracks: true,
        nativeVideoTracks: true,
      },
    });
    player.plugin = playerInstance;
  },

  play: function (url, playhead, noplay) {
    player.init();
    player.plugin.src({
      src: url,
      type: "application/x-mpegURL", // Use 'application/vnd.apple.mpegurl' for Safari
    });
    player.plugin.on("loadstart", function (_e) {
      videojs.Vhs.xhr.beforeRequest = (options) => {
        const modifiedOptions = { ...options };
        if (modifiedOptions.uri.startsWith("https://ss.binge.buzz/binge-drm")) {
          const search = new URL(options.uri);
          const searchParam = search.searchParams.get("r");
          modifiedOptions.uri = `https://ss.binge.buzz/binge-drm/secured?r=${searchParam}`;
          // modifiedOptions.uri = `https://ss-staging.binge.buzz/binge-drm/secured?r=${searchParam}
          // &drmtoken=${session.storage.jwtToken}
          // `;
          modifiedOptions.headers = modifiedOptions.headers || {};
          modifiedOptions.headers.Authorization = `Bearer ${session.storage.jwtToken}`;
          videojs.xhr(
            {
              uri: modifiedOptions.uri,
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${session.storage.jwtToken}`,
              },
            },
            (err, resp) => {
              if (resp.statusCode === 429) {
                // handleCloseContentError();
                video.destroy();
                // streamLimitCrossed.init();
                loginToaster.show('You have reached your streaming limit');
                video.destroy();
              } else if (resp.statusCode === 401) {
                // handleUnauthorizedError();
                video.destroy();
                session.clear();
                login.init();
              }
              else if(resp.statusCode === 0){
                networkToaster.show();
              } 
              else if(resp.statusCode === 200){
                networkToaster.hide();
              }
              else if (resp.statusCode !== 200) {
                // video.pause();
                // fireError();
              }
            }
          );
        }
        return modifiedOptions;
      };
    });
    player.getVideo().play();
  },

  pause: function () {
    player.getVideo().pause();
    player.state = player.states.PAUSED;
    video.showBTN("pause");
  },

  resume: function () {
    player.getVideo().play();
    video.hideBTN();
    player.state = player.states.PLAYING;
  },

  playPause: function () {
    if (player.getVideo().paused) {
      player.resume();
    } else {
      player.pause();
    }
  },

  rewind: function (callback) {
    player.pause();
    clearTimeout(player.timers.forward_rewind);
    video.showBTN("rewind");
    player.values.forward_rewind -= player.getDuration() * 0.01;
    callback(player.values.forward_rewind);
    player.timers.forward_rewind = setTimeout(function () {
      player.getVideo().currentTime =
        player.values.forward_rewind + player.getPlayed() < 0 ? 0 : player.values.forward_rewind + player.getPlayed();
      player.values.forward_rewind = 0;
      player.resume();
    }, 500);
  },

  forward: function (callback) {
    player.state = player.states.FORWARD;
    player.pause();
    clearTimeout(player.timers.forward_rewind);
    video.showBTN("forward");
    player.values.forward_rewind += player.getDuration() * 0.01;
    callback(player.values.forward_rewind);
    player.timers.forward_rewind = setTimeout(function () {
      player.getVideo().currentTime =
        player.values.forward_rewind + player.getPlayed() > player.getDuration() - player.getDuration() * 0.02
          ? player.getPlayed()
          : player.values.forward_rewind + player.getPlayed();
      player.values.forward_rewind = 0;
      player.resume();
    }, 500);
  },

  forwardTo: function (seconds) {
    player.getVideo().currentTime = seconds;
  },

  getQuality: function (data) {
    var id = Object.keys(data.levels).find((key) => data.levels[key].height === +session.storage.quality);
    return id !== undefined ? id : -1;
  },

  stop: function () {
    if (player.state != player.states.STOPPED) {
      // player.plugin.stopLoad();
      player.pause();
      // player.plugin.dispose();
      player.plugin = NaN;
      player.video = NaN;
      player.STOP_CALLBACK && player.STOP_CALLBACK();
      player.state = player.states.STOPPED;
    }
  },

  destroy: function () {
    player.pause();
  },

  onbufferingstart: function () {
    video.showBTN("loading");
  },

  onbufferingcomplete: function () {
    video.hideBTN();
  },

  oncurrentplaytime: function (currentTime) {
    video.setPlayingTime(currentTime);
  },

  onstreamcompleted: function () {
    app.stop();
  },

  onevent: function (eventType, eventData) {
    console.log("onevent " + eventType + " - " + eventData);
  },

  onerror: function (eventType) {
    console.log("onerror " + eventType);
  },

  ondrmevent: function (drmEvent, drmData) {
    console.log("ondrmevent " + drmEvent + " - " + drmData);
  },

  onsubtitlechange: function (duration, text, type, attriCount, attributes) {
    console.log("onsubtitlechange");
  },
};

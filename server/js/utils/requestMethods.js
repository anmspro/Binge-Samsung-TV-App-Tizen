window.baseURL = "https://web-api.binge.buzz";
window.localBaseURL = "https://web-api.binge.buzz";
window.globalBaseUrl = "https://geo.binge.buzz";
// window.baseURL = "https://web-api-staging.binge.buzz";
// window.globalBaseUrl = "https://stage-geo.binge.buzz";

async function checkCountry() {
  const countryResponse = await axios({
    url: urls.fetchCountry,
    method: "get",
    baseURL: window.baseURL,
    timeout: 50000, // default is `0` (no timeout)
    withCredentials: false, // default
    responseEncoding: "utf8", // default
    maxRedirects: 2,
  });
  session.storage.country = countryResponse.data.country;
  if (countryResponse.data.country === "BD") {
    window.baseURL = window.localBaseURL;
  }else{
    window.baseURL = window.globalBaseUrl;
  }
  // session.update();
  return countryResponse.data.country;
}

function handleInterceptors() {
  return axios.interceptors.response.use(
    function (response) {
      if (response.status === 401 || (response.data && response.data.message === "Invalid Signatureinv4")) {
        session.clear();
        main.init();
        loading.destroy();
      }
      networkToaster.hide();
      return response;
    },

    function (error) {
      console.error("res", error);
      if (error.code === "ERR_NETWORK") {
        networkToaster.show();
      }
      if (error.response) {
        if (error.response.status === 401 || error.message === "Invalid Signatureinv4") {
          console.error("Invalid Signatureinv4", error);
          session.clear();
          main.init();
          loading.destroy();
        }
      }

      return Promise.reject(error);
    }
  );
}

window.requestMethod = {
  get: function (url, params = {}) {
    handleInterceptors();
    return axios({
      url,
      baseURL: session.storage.country === "BD" ? localBaseURL : globalBaseUrl,
      // baseURL: window.baseURL,
      method: "get", // default
      headers: {
        Authorization: `Bearer ${session.storage.jwtToken}`,
        "Device-Type": "tizen",
        "Content-Type": "application/json;charset=utf-8",
        // 'language': 'en',
      },
      data: params,
      timeout: 50000, // default is `0` (no timeout)
      withCredentials: false, // default
      responseEncoding: "utf8", // default
      maxRedirects: 2, // default
    });
  },

  post: function (url, body) {
    handleInterceptors();
    return axios({
      url,
      baseURL: session.storage.country === "BD" ? localBaseURL : globalBaseUrl,
      // baseURL: window.baseURL,
      method: "post",
      headers: {
        Authorization: `Bearer ${session.storage.jwtToken}`,
        "Device-Type": "tizen",
        "Content-Type": "application/json",
        // 'language': 'en',
      },
      data: JSON.stringify(body),
      timeout: 50000,
      withCredentials: false,
      responseEncoding: "utf8",
      maxRedirects: 2,
    });
  },

  put: function (url, body, formData) {
    handleInterceptors();
    const config = {
      url,
      baseURL: session.storage.country === "BD" ? localBaseURL : globalBaseUrl,
      // baseURL: window.baseURL,
      method: "put",
      headers: {
        Authorization: `Bearer ${session.storage.jwtToken}`,
        "Device-Type": "tizen",
        "Content-Type": formData ? `multipart/form-data; boundary=${body._boundary}` : "application/json",
        Accept: "application/json",
        // 'language': 'en',
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      cache: false,
      data: formData ? body : JSON.stringify(body),
      timeout: 50000,
      withCredentials: false,
      responseEncoding: "utf8",
      maxRedirects: 2,
      processData: false,
    };
    return axiosConfig(config);
  },

  delete: function (url, body) {
    handleInterceptors();
    return axios({
      url,
      baseURL: session.storage.country === "BD" ? localBaseURL : globalBaseUrl,
      // baseURL: window.baseURL,

      method: "delete",
      headers: {
        Authorization: `Bearer ${session.storage.jwtToken}`,
        "Device-Type": "tizen",
        "Content-Type": "application/json",
        // 'language': 'en',
      },
      data: JSON.stringify(body),
      timeout: 50000,
      withCredentials: false,
      responseEncoding: "utf8",
      maxRedirects: 2,
    });
  },
};

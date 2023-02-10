class Welcome {
  constructor() {
    const params = new URLSearchParams(window.location.search);

    const token = params.get("token");
    if (token) {
      fetch("/api/auth/me", {
        headers: {
          "content-type": "application/json",
          Authorization: params.get("token"),
        },
      })
        .then((response) => response.json())
        .then((auth_response) => {
          if (auth_response.authToken) {
            auth_response.authToken = params.get("token");
            auth_response.expiresIn = Date.now() + auth_response.expiresIn;
            sessionStorage.auth = JSON.stringify(auth_response);
            const refPage = sessionStorage.getItem("ref_page");
            sessionStorage.removeItem("key");
            window.location.href = refPage;
          } else {
            this.register(
              auth_response.registrationToken,
              auth_response.profilePicture
            );
          }
        });
    } else {
      if (sessionStorage.getItem("reg_token")) {
        this.register(
          sessionStorage.getItem("reg_token"),
          sessionStorage.getItem("profile_pic")
        );
      }
    }
  }

  register(registrationToken, profile_pic) {
    document.body.querySelector("img").src = profile_pic;
    document.querySelector("main").classList.remove("d-none");

    document.querySelector("form").addEventListener("submit", (event) => {
      event.token = registrationToken;
      event.preventDefault();

      let regRequest = {
        id: document.querySelector("#id").value,
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
      };

      fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + event.token,
        },
        body: JSON.stringify(regRequest),
      })
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then((auth_response) => {
          auth_response.expiresIn = Date.now() + auth_response.expiresIn;
          sessionStorage.auth = JSON.stringify(auth_response);
          const refPage = sessionStorage.getItem("ref_page");
          sessionStorage.removeItem("key");
          window.location.href = refPage;
        })
        .catch((err) => {
          document.querySelector(".d-none").classList.remove("d-none");
          console.error(err);
        });
    });
  }
}

new Welcome();

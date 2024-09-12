const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                const url = event.target.getAttribute("href");
                Router.go(url);
            })
        })
        window.addEventListener("popstate", event => {
            Router.go(event.state.route, false);
        })

        Router.go(location.pathname);
    },
    go: (route, addToHistory = true) => {
        if (addToHistory) {
            history.pushState({ route }, null, route);
        }

        let pageElement = null;
        switch (route) {
            case "/":
                pageElement = document.createElement("home-page");
                break;
            case "/about":
                pageElement = document.createElement("about-page");
                break;
            case "/contact":
                pageElement = document.createElement("contact-page");
                break;
            case "/projects":
                pageElement = document.createElement("projects-page");
                break;
            default:
                pageElement = document.createElement("home-page");
                break;
        }

        if (pageElement) {
            const main = document.querySelector("main");
            main.innerHTML = "";
            main.appendChild(pageElement);
            window.screenX = 0;
            window.screenY = 0;
        }

    }
}

export default Router;
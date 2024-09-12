import Router from "./services/Router.js";

// Import compontents
import { AboutPage } from "./components/About-page.js";
import { ContactPage } from "./components/Contact-page.js";

window.app = {
    router: Router
}

window.addEventListener("DOMContentLoaded", async () => {
    app.router.init();
})
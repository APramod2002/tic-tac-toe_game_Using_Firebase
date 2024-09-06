import { homePageView } from "../view/home_page.js";
import { menu2PageView } from "../view/menu_page.js";
import { signOutFirebase } from "./firebase_auth.js";
import { routePathenames } from "./route_controller.js";

export function onClickHomeMenu(e) {
    history.pushState(null, null, routePathenames.HOME);
    homePageView();
}

export function onClickMenu2Menu(e) {
    history.pushState(null, null, routePathenames.MENU2);
    menu2PageView();
}

export async function onClickSignOutMenu(e) {
    await signOutFirebase(e); 
}
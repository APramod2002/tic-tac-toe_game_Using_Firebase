import { homePageView } from "../view/home_page.js";
import { PlayRecordPageView } from "../view/playrecord_page.js";
import { signOutFirebase } from "./firebase_auth.js";
import { routePathenames } from "./route_controller.js";

export function onClickHomeMenu(e) {
    history.pushState(null, null, routePathenames.HOME);
    homePageView();
}

export function onClickPlayRecord(e) {
    history.pushState(null, null, routePathenames.PLAYRECORD);
    PlayRecordPageView();
}

export async function onClickSignOutMenu(e) {
    await signOutFirebase(e); 
}
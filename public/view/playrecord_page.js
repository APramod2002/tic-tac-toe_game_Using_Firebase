import { currentUser } from "../controller/firebase_auth.js";
import { root } from "./elements.js";
import { protectedView } from "./protected_view.js";

export async function PlayRecordPageView() {
    if(!currentUser){
        root.innerHTML= await protectedView();
        return;
    }
    root.innerHTML = '<h1>Play Record Page</h1>'
}
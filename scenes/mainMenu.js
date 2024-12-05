import k from "../src/kaplayCtx";

export default function mainMenu() {

    if(!k.getData("best-score")) k.setData("best-score", 0); //if the best score data dosent exist, then create the best score key and store it to 0 in it
    k.onButtonPress("jump", () => k.go("game"));

    const bgPieceWidth = 1920;
}
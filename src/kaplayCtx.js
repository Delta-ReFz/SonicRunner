import kaplay from "kaplay";

const k = kaplay({
    width: 1920,
    height: 1080,
    letterbox: true,
    background: [0,0,0],
    global: false,
    //touchToMouse: true ====> transform any touch input to click donc on pourra y jouer on mobile device
    buttons: {
        jump: {
            keyboard: ["space"],
            mouse: "left",
        },
    },
    debugKey: "d",
    debug: true,
    });

export default k;
import k from "../kaplayCtx";

export function makeRing(pos) {
    return k.add([
        k.sprite("ring", {anim: "spin"}),
        k.area(), //Custom par default
        k.scale(4),
        k.anchor("center"),
        k.pos(pos),
        k.offscreen(),
        "ring",
    ]);
}
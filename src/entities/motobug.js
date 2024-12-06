import k from "../kaplayCtx";

export function makeMotobug(pos) {
    return k.add([
        k.sprite("motobug", {anim: "run"}),
        k.area({shape: new k.Rect(k.vec2(-5, 0), 32, 32)}), //Custom shape à la place de par default
        k.scale(4),
        k.anchor("center"),
        k.pos(pos),
        k.offscreen(),
        "enemy",
    ]);
}
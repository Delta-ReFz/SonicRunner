import k from "./kaplayCtx";

k.loadSprite("chemical-bg", "graphics/chemical-bg.png")
k.loadSprite("platforms", "graphics/platforms.png")
k.loadSprite("sonic", "graphics/sonic.png", {
    sliceX: 8, 
    sliceY: 2,
    anims: {
        run: {from: 0, to: 7, loop: true, speed: 30 },
        jump: {from: 8, to: 25, loop: true, speed: 100 },
    },
});
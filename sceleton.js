const r = require("raylib");

function setup() {
    const WIDTH = 600;
    const HEIGHT = 400;
    const FPS = 60;
    r.InitWindow(WIDTH, HEIGHT, "SPAIN");
    r.SetTargetFPS(FPS);
    const world = {
        WIDTH,
        HEIGHT,
        FPS,
    };
    return world;
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
}

main();

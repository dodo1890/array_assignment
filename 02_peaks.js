const r = require("raylib");

function setup() {
    const WIDTH = 600;
    const HEIGHT = 400;
    const FPS = 60;
    const data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];
    r.InitWindow(WIDTH, HEIGHT, "SPAIN");
    r.SetTargetFPS(FPS);
    const world = {
        WIDTH,
        HEIGHT,
        FPS,
        data,
    };
    return world;
}

function maxValue(array) {
    let largest = array[0];
    for (let i = 1; i < array.length; i++) {
        largest = Math.max(largest, array[i]);
    }
    return largest;
}

function calcScale(world) {
    const maxBarHeight = world.HEIGHT * 0.9;
    return maxBarHeight / maxValue(world.data);
}

function drawPeaks(world) {
    r.DrawLine(0, 100, 200, 100, r.BLACK);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.RAYWHITE);
    drawPeaks(world);
    // console.log(calcScale(world));
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

const r = require("raylib");

function setup() {
    const WIDTH = 500;
    const HEIGHT = 500;
    const FPS = 60;
    const barWidth = 30;
    const gapWidth = 1;
    const data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];
    r.InitWindow(WIDTH, HEIGHT, "SPAIN");
    r.SetTargetFPS(FPS);
    const world = {
        WIDTH,
        HEIGHT,
        FPS,
        barWidth,
        gapWidth,
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

function calcSum(world) {
    let sum = 0;
    for (let i = 0; i < world.data.length; i++) {
        sum += world.data[i];
    }
    return sum;
}

function calcAverage(world) {
    let sum = calcSum(world);
    return sum / world.data.length;
}

function drawAverageLine(world) {
    const avg = calcAverage(world);
    const y = world.HEIGHT - avg * world.scale;
    r.DrawLine(0, y, world.WIDTH, y, r.RED);
}

function calcRecObj(world, i, scale) {
    world.barWidth = world.barWidth < 1 ? 1 : world.barWidth;
    const x = i * (world.barWidth + world.gapWidth);
    const y = world.HEIGHT - world.data[i] * scale;
    const width = world.barWidth;
    const height = world.HEIGHT;
    return { x, y, width, height };
}

function drawBar(world, i, scale) {
    const rec = calcRecObj(world, i, scale);
    r.DrawRectangleRec(rec, r.DARKBLUE);
}

function drawGraph(world) {
    world.scale = calcScale(world);
    for (let i = 0; i < world.data.length; i++) {
        drawBar(world, i, world.scale);
    }
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    drawGraph(world);
    drawAverageLine(world);
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

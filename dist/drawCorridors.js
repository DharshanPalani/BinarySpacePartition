const drawCorridors = (ctx, corridors) => {
    const scale = 6;
    ctx.fillStyle = "red";
    corridors.forEach((c) => {
        ctx.fillRect(c.x * scale, c.y * scale, scale, scale);
    });
};
export default drawCorridors;

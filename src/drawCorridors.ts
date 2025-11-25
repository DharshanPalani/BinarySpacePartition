const drawCorridors = (
  ctx: CanvasRenderingContext2D,
  corridors: { x: number; y: number }[]
) => {
  const scale = 6;

  ctx.fillStyle = "red";
  corridors.forEach((c) => {
    ctx.fillRect(c.x * scale, c.y * scale, scale, scale);
  });
};

export default drawCorridors;

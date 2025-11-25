import Node from "./Node";
import drawCorridors from "./drawCorridors";

const draw = (leaves: Node[], corridors: { x: number; y: number }[]) => {
  const canvas = document.getElementById("map") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;
  const scale = 6;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  leaves.forEach((leaf, index) => {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;
    ctx.strokeRect(
      leaf.x * scale,
      leaf.y * scale,
      leaf.width * scale,
      leaf.height * scale
    );

    if (leaf.room) {
      ctx.strokeStyle = "lime";
      ctx.lineWidth = 2;
      ctx.strokeRect(
        leaf.room.x * scale,
        leaf.room.y * scale,
        leaf.room.width * scale,
        leaf.room.height * scale
      );
    }

    ctx.fillStyle = "yellow";
    ctx.font = `${10}px Arial`;
    ctx.fillText(`leaf ${index + 1}`, leaf.x * scale + 2, leaf.y * scale + 12);
  });

  drawCorridors(ctx, corridors, scale);
};

export default draw;

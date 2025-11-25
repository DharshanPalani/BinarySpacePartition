import getRoomCenter from "./getRoomCenter";
import Node from "./Node";
const createCorridor = (a: Node, b: Node) => {
  const A = getRoomCenter(a);
  const B = getRoomCenter(b);

  const corridor = [];

  const minX = Math.min(A.x, B.x);
  const maxX = Math.max(A.x, B.x);
  for (let x = minX; x <= maxX; x++) {
    corridor.push({ x, y: A.y });
  }

  const minY = Math.min(A.y, B.y);
  const maxY = Math.max(A.y, B.y);
  for (let y = minY; y <= maxY; y++) {
    corridor.push({ x: B.x, y });
  }

  return corridor;
};

export default createCorridor;

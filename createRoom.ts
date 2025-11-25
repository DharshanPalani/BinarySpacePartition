import Node from "./Node";

const createRoom = (leaf: Node, roomMin: number, roomMax: number) => {
  if (!leaf) return;

  const roomWidth = Math.floor(
    roomMin + Math.random() * (Math.min(roomMax, leaf.width) - roomMin)
  );

  const roomHeight = Math.floor(
    roomMin + Math.random() * (Math.min(roomMax, leaf.height) - roomMin)
  );

  const roomX = leaf.x + Math.floor(Math.random() * (leaf.width - roomWidth));
  const roomY = leaf.y + Math.floor(Math.random() * (leaf.height - roomHeight));

  leaf.room = {
    x: roomX,
    y: roomY,
    width: roomWidth,
    height: roomHeight,
  };
};

export default createRoom;

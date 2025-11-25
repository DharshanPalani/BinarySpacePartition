import Node from "./Node";

const getRoomCenter = (leaf: Node) => {
  const room = leaf.room!;
  return {
    x: room.x + room.width / 2,
    y: room.y + room.height / 2,
  };
};

export default getRoomCenter;

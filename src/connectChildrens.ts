import createCorridor from "./createCorridor";
import getRoom from "./getRoom";
import Node from "./Node";

const connectChildren = (node: Node, corridors: any[]) => {
  if (!node.left || !node.right) return;

  const leftRoom = getRoom(node.left);
  const rightRoom = getRoom(node.right);

  const path = createCorridor(leftRoom, rightRoom);
  corridors.push(...path);

  connectChildren(node.left, corridors);
  connectChildren(node.right, corridors);
};

export default connectChildren;

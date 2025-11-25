import createCorridor from "./createCorridor.js";
import getRoom from "./getRoom.js";
const connectChildren = (node, corridors) => {
    if (!node.left || !node.right)
        return;
    const leftRoom = getRoom(node.left);
    const rightRoom = getRoom(node.right);
    const path = createCorridor(leftRoom, rightRoom);
    corridors.push(...path);
    connectChildren(node.left, corridors);
    connectChildren(node.right, corridors);
};
export default connectChildren;

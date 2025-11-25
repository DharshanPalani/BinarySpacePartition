const getRoom = (node) => {
    if (node.room)
        return node;
    const left = node.left ? getRoom(node.left) : null;
    const right = node.right ? getRoom(node.right) : null;
    return left || right;
};
export default getRoom;

import Node from "./Node.js";
const split = (leaf, min_leaf_size) => {
    if (leaf.left !== null || leaf.right !== null)
        return false;
    // Don't need the commented coz it's too complicated and avoids the 1% failuer or smth.
    //   let splitHorizontal = Math.random() > 0.5;
    //   if (leaf.width > leaf.height) splitHorizontal = false;
    //   else if (leaf.height > leaf.width) splitHorizontal = true;
    let splitHorizontal = leaf.height > leaf.width;
    const max = (splitHorizontal ? leaf.height : leaf.width) - min_leaf_size;
    if (max <= min_leaf_size)
        return false;
    const cut = min_leaf_size + Math.floor(Math.random() * (max - min_leaf_size));
    if (splitHorizontal) {
        leaf.left = new Node(leaf.x, leaf.y, leaf.width, cut);
        leaf.right = new Node(leaf.x, leaf.y + cut, leaf.width, leaf.height - cut);
    }
    else {
        leaf.left = new Node(leaf.x, leaf.y, cut, leaf.height);
        leaf.right = new Node(leaf.x + cut, leaf.y, leaf.width - cut, leaf.height);
    }
    return true;
};
export default split;

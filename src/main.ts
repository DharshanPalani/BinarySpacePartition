import Node from "./Node";
import connectChildren from "./connectChildrens";
import createRoom from "./createRoom";
import draw from "./draw";
import split from "./split";

const width = 100;
const height = 60;

const generate_bsp = (min_room_size : number, max_room_size : number) => {

  const root = new Node(0, 0, width, height);

  const leaf: Node[] = [root];

  const min_leaf_size = Math.floor(Math.random() * (max_room_size - min_room_size + 1) + 15);

  let didSplit = true;

  while (didSplit) {
    didSplit = false;

    for (let i = 0; i < leaf.length; i++) {
      const leaves = leaf[i];

      if (leaves.left !== null && leaves.right !== null) continue;

      if (leaves.width < min_leaf_size || leaves.height < min_leaf_size) continue;

      if (!split(leaves, min_leaf_size)) continue;

      leaf.push(leaves.left!);
      leaf.push(leaves.right!);

      didSplit = true;
    }
  }

  for (const l of leaf) {
    if (l.left === null && l.right === null) {
      createRoom(l, 8, 20);
    }
  }

  const finalLeaves = leaf.filter((l) => l.left === null && l.right === null);
  const corridors: any[] = [];
  connectChildren(root, corridors);
  draw(finalLeaves, corridors);
}




const generateBtn = document.getElementById("generate_bsp");


generateBtn?.addEventListener('click', () => {
  const min_room_size_input = document.getElementById("min_room_size_input") as HTMLInputElement;
  const max_room_size_input = document.getElementById("max_room_size_input") as HTMLInputElement;

  generate_bsp(parseInt(min_room_size_input.value), parseInt(max_room_size_input.value));
});



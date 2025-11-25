import drawCorridors from "./drawCorridors.js";
const draw = (leaves, corridor) => {
    const canvas = document.getElementById("map");
    const ctx = canvas.getContext("2d");
    const container = document.getElementById("container");
    const scale = 6;
    leaves.forEach((l, index) => {
        ctx.strokeStyle = "white";
        ctx.strokeRect(l.x * scale, l.y * scale, l.width * scale, l.height * scale);
        if (l.room) {
            const r = document.createElement("div");
            r.style.position = "absolute";
            r.style.left = l.room.x * scale + "px";
            r.style.top = l.room.y * scale + "px";
            r.style.width = l.room.width * scale + "px";
            r.style.height = l.room.height * scale + "px";
            r.style.border = "2px solid lime";
            r.style.pointerEvents = "none";
            container.appendChild(r);
        }
        const div = document.createElement("div");
        div.style.position = "absolute";
        div.style.left = l.x * scale + "px";
        div.style.top = l.y * scale + "px";
        div.style.width = l.width * scale + "px";
        div.style.height = l.height * scale + "px";
        div.style.pointerEvents = "none";
        div.style.color = "yellow";
        div.style.fontSize = "14px";
        div.innerHTML = `<p>Leaf ${index + 1}</p>`;
        container.appendChild(div);
    });
    drawCorridors(ctx, corridor);
};
export default draw;

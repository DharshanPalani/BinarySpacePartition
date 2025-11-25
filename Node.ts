export class Node {
  public left: Node | null = null;
  public right: Node | null = null;

  public room: { x: number; y: number; width: number; height: number } | null =
    null;

  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number
  ) {}
}

export default Node;

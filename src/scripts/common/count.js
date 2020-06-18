export function Count(htmlBlock) {
    this.root = $(htmlBlock);
    const arr = root.children();
    console.log(arr);
}
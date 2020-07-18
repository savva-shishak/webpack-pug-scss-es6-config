export function Contoller(node, line, prop) {
    const root = $(node);

    root.mousedown(e => {
        const {body} = document
        const startX = e.clientX;
        const oldValue = line[prop];

        const moveMouse = e => {   
            if (e.which !== 1)  {
                body.removeEventListener("mousemove", moveMouse);
            }
            line[prop] = +oldValue - ((+startX - +e.clientX) / +line.maximum);
        }

        body.addEventListener("mousemove", moveMouse);
    });
}
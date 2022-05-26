export function translate(x: number|string, y: number|string) {
    return `translate(${x}, ${y}) `
}

export function pct(percentage: number) {
    return percentage + '%';
}

export function translateX(x: number|string) {
    return translate(x, 0);
}

export function translateY(y: number|string) {
    return translate(0, y);
}

export function translatePx(x: number, y: number) {
    return `translate(${x}px, ${y}px)`;
}

export function translatePxX(x: number) {
    return translatePx(x, 0);
}

export function translatePxY(y: number) {
    return translatePx(0, y);
}

export function translatePct(x: number, y: number) {
    return `translate(${x}%, ${y}%) `
}

export function translatePctX(x: number) {
    return translatePct(x, 0);
}

export function translatePctY(y: number) {
    return translatePct(0, y);
}

export function translateView(x: number, y: number) {
    return `translate(${x}vw, ${y}vh) `
}

export function translateViewX(x: number) {
    return translateView(x, 0);
}

export function translateViewY(y: number) {
    return translateView(0, y);
}

export function rotate(angle: number|string) {
    return `rotate(${angle}) `
}

export function scale(factor: number|string) {
    return `scale(${factor}) `
}

export function rotate3d(deg: number) {
    return `rotate3d(0, 1, 0, ${deg}deg)`
}

export function px(nb: number) {
    return `${nb}px`;
}
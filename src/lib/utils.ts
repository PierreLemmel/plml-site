export function cn(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

export function parseNumberWithDefault(value: string | undefined, defaultValue: number): number {
    if (!value) return defaultValue;

    const number = Number.parseFloat(value);
    if (isNaN(number)) return defaultValue;
    return number;
}

export function getZIndex(cardIndex: number, cardCount: number): number {
    return (cardCount - cardIndex) * 100;
}

export function dateText(fromDate?: string|null, toDate?: string|null): string {
    if (fromDate && toDate) {
        if (fromDate === toDate) {
            return fromDate;
        }
        else {
            return `${fromDate} - ${toDate}`;
        }
    } else if (fromDate) {
        return `Depuis ${fromDate}`;
    }
    return '';
}

export function mergeRoles(roles: string[]): string {

    if (roles.length === 0) {
        return '';
    }

    const cleanedUp = roles.map((r, i) => r.trim().replace(/^./, c => i !== 0 ? c.toLowerCase() : c.toUpperCase()));

    if (cleanedUp.length === 1) {
        return cleanedUp[0];
    }
    else {
        return cleanedUp.slice(0, -1).join(', ') + ' et ' + cleanedUp[cleanedUp.length - 1];
    }
}

export function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(value, max));
}

export function descritionHtml(paragraphs: string[]): string {
    return paragraphs.map(paragraph => `<div>${paragraph}</div>`).join('');
}
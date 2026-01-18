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
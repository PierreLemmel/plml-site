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

import type { ItemDate } from '../contents/content-types';

export function dateText(date?: ItemDate | null): string {
    if (!date) return '';

    switch (date.status) {
        case 'Finished':
            if (date.from === date.to) {
                return date.from;
            }
            return `${date.from} - ${date.to}`;
        case 'OnGoing':
            return `Depuis ${date.from}`;
        case 'InCreation':
            return 'En cours de création';
    }
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

export function descriptionHtml(...paragraphs: string[]): string {
    return paragraphs.map(paragraph => `<div>${paragraph}</div>`).join('');
}

export function htmlList(...items: string[]): string {
    return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}
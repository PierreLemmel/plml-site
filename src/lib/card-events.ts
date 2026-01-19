export interface CardChangedEventDetail {
    fromCard: number;
    toCard: number;
    direction: 'forward' | 'backward';
}

declare global {
    interface WindowEventMap {
        'cardchanged': CustomEvent<CardChangedEventDetail>;
    }
}


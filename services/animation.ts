import { Transition } from "framer-motion";

export function spring(duration: number) : Transition {
    return { duration, type: 'spring' }
}

export function linear(duration: number): Transition {
    return { duration, ease: 'linear' };
}
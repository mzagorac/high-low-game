const CARDS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE'];
const higerIcon = './up-arrow-sketch.png';
const lowerIcon = './down-arrow-sketch.png';
const equal = './equal.png';

export const flipCard = "./back-card.png";

export const larger = (displayed, drawn) => {
    if (CARDS.indexOf(displayed) === CARDS.indexOf(drawn)) return 'EQUAL';
    return CARDS.indexOf(displayed) > CARDS.indexOf(drawn) ? "L" : "H";
}

export const fetchIcon = (displayed, drawn) => {
    const res = larger(displayed, drawn);
    if (!displayed || ! drawn) return;
    if (res === 'L') return lowerIcon;
    if (res === 'H') return higerIcon;
    return equal;
}
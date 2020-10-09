const CARDS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE'];

export const larger = (displayed, drawn) => {
    if (CARDS.indexOf(displayed) === CARDS.indexOf(drawn)) return 'EQUAL';
    return CARDS.indexOf(displayed) > CARDS.indexOf(drawn) ? "L" : "H";
}
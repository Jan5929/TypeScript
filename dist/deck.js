var color;
(function (color) {
    color["heart"] = "\u2665\uFE0F";
    color["spade"] = "\u2660\uFE0F";
    color["diamond"] = "\u2666\uFE0F";
    color["club"] = "\u2663\uFE0F";
})(color || (color = {}));
var Mark;
(function (Mark) {
    Mark["A"] = "A";
    Mark["two"] = "2";
    Mark["three"] = "3";
    Mark["four"] = "4";
    Mark["five"] = "5";
    Mark["six"] = "6";
    Mark["seven"] = "7";
    Mark["eight"] = "8";
    Mark["nine"] = "9";
    Mark["ten"] = "10";
    Mark["eleven"] = "J";
    Mark["twelve"] = "Q";
    Mark["thirteen"] = "K";
})(Mark || (Mark = {}));
function createdPokerCard() {
    const card = [];
    let colors = Object.values(color);
    let marks = Object.values(Mark);
    for (let k of marks) {
        for (let j of colors) {
            card.push({
                mark: k,
                color: j
            });
        }
    }
    return card;
}
const pokerArr = createdPokerCard();
function printPoker(card) {
    let result = '\n';
    card.forEach((item, i) => {
        result += item.mark + item.color;
        if ((i + 1) % 4 === 0) {
            result += '\t' + '\n';
        }
    });
    console.log(result);
}
printPoker(pokerArr);

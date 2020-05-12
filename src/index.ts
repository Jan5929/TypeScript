type Color = '♥️' | '♦️' | '♣️' | '♠️'
type Deck = NormalCard[]
type NormalCard = {
  color: Color,
  mark: Number | String
}
function createdDeck(): Deck {
  const deck: Deck = []
  for (let i = 1; i <= 13; i++) {
    deck.push({
      color: '♠️',
      mark: i === 1 ? 'A' : i
    })
    deck.push({
      color: '♠️',
      mark: i === 1 ? 'A' : i
    })
    deck.push({
      color: '♦️',
      mark: i === 1 ? 'A' : i
    })
    deck.push({
      color: '♣️',
      mark: i === 1 ? 'A' : i
    })
  }
  return deck
}

function printDeck(deck: Deck) {
  let result = '\n'
  deck.forEach((card, index) => {
    let str = card.color
    if (card.mark <= 10) {
      str += card.mark
    } else if (card.mark === 11) {
      str += 'J'
    } else if (card.mark === 12) {
      str += 'Q'
    } else if (card.mark === 13) {
      str += 'K'
    } else {
      str += 'A'
    }
    result += str + '\t'
    if ((index + 1) % 4 === 0) {
      result += '\n'
    }
  })
  console.log(result)
}

const deck = createdDeck()
printDeck(deck)
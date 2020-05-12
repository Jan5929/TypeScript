enum color {
  heart = '♥️',
  spade = '♠️',
  diamond = '♦️',
  club = '♣️'
}

enum Mark {
  A = 'A',
  two = '2',
  three = '3',
  four = '4',
  five = '5',
  six = '6',
  seven = '7',
  eight = '8',
  nine = '9',
  ten = '10',
  eleven = 'J',
  twelve = 'Q',
  thirteen = 'K',
}

type PokerCard = {
  color: color
  mark: Mark
}
type Card = PokerCard[]

function createdPokerCard(): Card {
  const card: Card = []
  let colors = Object.values(color)
  let marks = Object.values(Mark)
  for (let k of marks) {
    for (let j of colors) {
      card.push({
        mark: k,
        color: j
      })
    }
  }
  return card
}
const pokerArr = createdPokerCard()

function printPoker(card: Card) {
  let result = '\n'
  card.forEach((item, i) => {
    result += item.mark + item.color
    if ((i + 1) % 4 === 0) {
      result += '\t' + '\n'
    }
  })
  console.log(result)
}
printPoker(pokerArr)
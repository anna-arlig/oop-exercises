class Deck{
    
    


    constructor(){
        this.deck = []
    }

    addCard(card){
        this.deck.push(card)
    }

    drawCard(){
        return  this.deck.shift()
    }

    shuffle(){
        this.deck.sort(() => Math.random() -0.5)
    }

    static generateDeck(){
        const deck = new Deck()
       
        for(let value of Card.VALUES){
            for (let suite of Card.SUITS){
                deck.addCard(new Card(value, suite))
            }
        }
        return deck
    }

}

class Card{
    static SUITS = ["Klöver", "Hjärter", "Ruter", "Spader"]
    static VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "Kn", "D", "K"]

    constructor(value, suite, faceDown = false){
        this.value = value
        this.suite = suite
        this.faceDown = faceDown
    }
}




const deck = Deck.generateDeck()

deck.shuffle()
console.log(deck)




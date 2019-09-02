class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards(cards) {

     let currentIndex = this.cards.length, temporaryValue, randomIndex;
    
     while (currentIndex !== 0) {
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;
       temporaryValue = this.cards[currentIndex];
       this.cards[currentIndex] = this.cards[randomIndex];
       this.cards[randomIndex] = temporaryValue;
     }

     return cards;

  }


  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed *2 === this.cards.length) {
      return true;
    } else {
      return false;
    }

  }

}
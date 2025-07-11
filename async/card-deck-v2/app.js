// Variables
const baseURL = 'https://www.deckofcardsapi.com/api/deck'

$(document).ready(async function () {

    let $btn = $('button');

    // drawCardAsync();
    // shuffleDrawAsyn();

    // STEP 3 = CREATE the UI to Display cards on a pile until all cards are gone
    const cardDeck = {
        dkId: null,

        async init() {
            try {
                let res = await $.getJSON(`${baseURL}/new/`);
                console.log(res);
                this.dkId = res.deck_id;
            } catch (e) {
                console.log("Error: ", e);
            }

        },
        async shuffle() {
            try {
                let res = await $.getJSON(`${baseURL}/${this.dkId}/shuffle/`);
                console.log(res);
            } catch (e) {
                console.log("Error: ", e);
            }
        },
        async drawCard(numCards = 1) {
            try {
                let res = await $.getJSON(`${baseURL}/${this.dkId}/draw/?count=${numCards}`)
                let cardImg = res.cards[0].image
                let rotateAngle = Math.random() * 1 - 3;
                let styleString = `style="transform: rotate(${rotateAngle}turn)"`
                $('.card-box').append(`<img src="${cardImg}" ${styleString}>`)

                if (res.remaining === 0) {
                    $btn.hide();
                }
            } catch (e) {
                console.log("Error: ", e);
            }

        }
    }

    await cardDeck.init();
    await cardDeck.shuffle();

    // Set up the button click event to draw a card
    $btn.on('click', () => {
        cardDeck.drawCard()
    });
});


// STEP 1 - Make a request to the Deck of Cards API
async function drawCardAsync() {
    try {
        const res = await $.getJSON(`${baseURL}/new/shuffle/?deck_count=1`);
        console.log(res);
        let dk_id = res.deck_id;
        console.log(dk_id);
        const drawRes = await $.getJSON(`${baseURL}/${dk_id}/draw/?count=1`);
        console.log(drawRes);
        console.log(`Your card is the ${drawRes.cards[0].value} of ${drawRes.cards[0].suit}`);
    } catch (err) {
        console.log(err);
    }
}


//STEP 2 - Make a request to the deck of cards API to request a single card from a newly shuffled deck.
async function shuffleDrawAsyn() {
    try {
        let res1 = await $.getJSON(`${baseURL}/new/draw/?count=1`);
        let deckId = res1.deck_id;
        console.log(
            `Your first card is: ${res1.cards[0].value} of ${res1.cards[0].suit}`
        );
        let res2 = await $.getJSON(`${baseURL}/${deckId}/draw/?count=1`);
        console.log(
            `Your second card is: ${res2.cards[0].value} of ${res2.cards[0].suit}`
        );
    } catch (e) {
        console.log("Error: ", e);
    }
}





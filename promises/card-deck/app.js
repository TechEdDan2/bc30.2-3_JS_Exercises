$(document).ready(function () {

    // Variables
    const baseURL = 'https://www.deckofcardsapi.com/api/deck'

    let $btn = $('button');


    // STEP 1 - Make a request to the Deck of Cards API

    $.getJSON(`${baseURL}/new/shuffle/?deck_count=1`)
        .then(res => {
            console.log(res)
            let dk_id = res.deck_id;
            console.log(dk_id)
            return $.getJSON(`${baseURL}/${dk_id}/draw/?count1`)
        })
        .then(res => {
            console.log(res)
            console.log(`Your card is the ${res.cards[0].value} of ${res.cards[0].suit}`)
        })
        .catch(err => {
            console.log(err)
        })

    //STEP 2 - Make a request to the deck of cards API to request a single card from a newly shuffled deck. 
    $.getJSON(`${baseURL}/new/draw/?count=1`)
        .then(res => {
            console.log(res)
            let dk_id = res.deck_id;
            console.log(dk_id)
            console.log(`Your card is the ${res.cards[0].value} of ${res.cards[0].suit}`)
            return $.getJSON(`${baseURL}/${dk_id}/draw/?count=1`)
        })
        .then(res => {
            console.log(res)
            console.log(`Your card is the ${res.cards[0].value} of ${res.cards[0].suit}`)
        })
    // .catch(err => {
    //     console.log(err)
    // });

    // STEP 3 = CREATE the UI to Display cards on a pile until all cards are gone

    let deck = null;

    $.getJSON(`${baseURL}/new/draw/?count=1`)
        .then(res => {
            console.log(res)
            deck = res.deck_id;
            console.log(`Final Deck ID: ${deck}`)
        })

    $btn.on('click', function () {
        $.getJSON(`${baseURL}/${deck}/draw/?count=1`)
            .then(res => {
                let cardImg = res.cards[0].image
                let rotateAngle = Math.random() * 1 - 3;
                let styleString = `style="transform: rotate(${rotateAngle}turn)"`
                $('.card-box').append(`<img src="${cardImg}" ${styleString}>`)

                if (res.remaining === 0) {
                    $btn.hide();
                }
            })
            .catch(err => {
                console.log(err);
            });
    });





}); //END OF READY FUNCTION




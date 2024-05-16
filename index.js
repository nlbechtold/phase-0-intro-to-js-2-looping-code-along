const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
   
  }

  return gifts;
}

wrapGifts(gifts);

const myArrayOfNames = ["Jen", "Sam", "Al"]
const myEventName = "Christmas"


function writeCards(name, event) { 
    const newArray = []
    for (let i = 0; i < name.length; i++) {
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
       
    
    }

return newArray;
}



console.log (writeCards(myArrayOfNames, myEventName))

console.log (writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(number) {
    let count = number;
    while (count >= 0) {
        console.log(count);
        count--;
    }
    }
 




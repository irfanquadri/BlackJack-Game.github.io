
let cards = []// array - ordered list of items/
let sum = 0
let hasblackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// Objects Sneak Peak

let player = {
   Name: "Alpha",
   Chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": $" + player.Chips
// create a function getrandomcard() that always return the value 5
function getrandomcard() {
  let randomNumber = Math.floor(Math.random()*13) + 1
  if (randomNumber >10){
    return 10
  } else if (randomNumber === 1) {
    return 11
  }else {
    return randomNumber
  }
}


function startgame() {
  isAlive = true
  let firstCard = getrandomcard()
  let secondCard = getrandomcard()
  cards = [firstCard,secondCard]
  sum = firstCard + secondCard
    rendergame()
}

    function rendergame() { 
      cardsEl.textContent = "cards: "
      for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ", "
      }
       
        sumEl.textContent = "Sum: " + sum
            

        if (sum <= 20) {
            message = "Do you want to draw a new card?"
            
        } else if (sum === 21) {
            message = "you've got blackjack!"
            hasblackjack = true
        } else {
            message = "you're out of the game"
            isAlive = false
        }
        messageEl.textContent = message
        console.log(message)
    }

    function newcard() {
        if (isAlive === true && hasblackjack === false) {
          let card = getrandomcard()
          sum += card
          cards.push(card)
          console.log(cards)
          rendergame()
        }
        
    }
 

    


//create two variable name first and secondcard
//pick any number between 2 to 12
//and variable sum for the first and second card


// let firstCard = 12
// let secondCard = 1

// let Sum = firstCard + secondCard

// if (Sum < 21) {
//     console.log("Do you want to draw a new card?")
// } else if (Sum === 21) {
//     console.log("Wohoo! you,ve got BlackJack! ")
// } else {
//     console.log("OOPS! you,re out of the game! ")
// }

//FIRST IF ELSE STATEMENT

// check if the person is old enough to enter the nightclub(21)
//log a suitable message to the console in both cases
//   let  age = 21

//   if (age >= 21) {
//     console.log("Welcome!")
//   } else {
//     console.log("you can not enter the club!")
//   }
  /////

  // check if the person is eligible for a birthday card from the king! (100)

//   let age = 100

//   if (age < 100) {
//     console.log("Not eligible!")
//   } else if (age === 100) {
//     console.log("Here is your birthday card from the king!")
//   } else {
//     console.log("not eligible, you have already gotten one")
//   }

//WRITE THE CONDITION ACCORDING TO THESE RULES:
// let firstcard = 10
// let secondcard = 9
// let sum = firstcard + secondcard
// let hasblackjack = false
// let isAlive = true
// if (sum <= 20) {
//     console.log("Do you want to draw a new card?")
// } else if (sum === 21) {
//     console.log("Wohoo! you've got blackjack!")
//     hasblackjack = true
// } else {
//     console.log("you're out of the game")
//     isAlive = false
// }

// //LETS PRACTICE BOOLEAN CONDITION

// console.log(4 === 3) // false
// console.log(5 > 2)   // true
// console.log(12 > 12) // false
// console.log(3 < 0)   // false
// console.log(3 >= 3)  // true
// console.log(11 <= 11)// true
// console.log(3 <= 2)  // false

///  ADDING THE MESSAGE VARIABLE
// create a varible called message and assign its value to empty string
// reassign the message variable to the string we're logging out

// let firstcard = 11
// let secondcard = 10
// let sum = firstcard + secondcard
// let hasblackjack = false
// let isAlive = true
// let message = ""

// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")

//     function startgame() {
//         sumEl.textContent = "Sum " + sum
            

//         if (sum <= 20) {
//             message = "Do you want to draw a new card?"
            
//         } else if (sum === 21) {
//             message = "you've got blackjack!"
//             hasblackjack = true
//         } else {
//             message = "you're out of the game"
//             isAlive = false
//         }
//         messageEl.textContent = message
//         console.log(message)

//     }

/////Query selector

// let firstcard = 11
// let secondcard = 1
// let sum = firstcard + secondcard 
// let hasblackjack = false
// let isAlive = true
// let message = ""

// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")


//     function startgame() {
//         sumEl.textContent = "Sum: " + sum 
//         cardsEl.textContent = "Cards: " + firstcard + "," + secondcard
            

//         if (sum <= 20) {
//             message = "Do you want to draw a new card?"
            
//         } else if (sum === 21) {
//             message = "you've got blackjack!"
//             hasblackjack = true
//         } else {
//             message = "you're out of the game"
//             isAlive = false
//         }
//         messageEl.textContent = message
//         console.log(message)

//     }

//     function newcard() {
//         console.log("Drawing a new card from the deck!")
//         let card = 9
//         sum += card
//         startgame()

//     }

    ////RENAME THE START GAME FUNCTION




    // let firstcard = 11
    // let secondcard = 1
    // let sum = firstcard + secondcard 
    // let hasblackjack = false
    // let isAlive = true
    // let message = ""
    
    // let messageEl = document.getElementById("message-el")
    // let sumEl = document.getElementById("sum-el")
    // let cardsEl = document.getElementById("cards-el")
    
    // function startgame() {
    //     rendergame()
    // }
    
    //     function rendergame() {
    //         sumEl.textContent = "Sum: " + sum 
    //         cardsEl.textContent = "Cards: " + firstcard + "," + secondcard
                
    
    //         if (sum <= 20) {
    //             message = "Do you want to draw a new card?"
                
    //         } else if (sum === 21) {
    //             message = "you've got blackjack!"
    //             hasblackjack = true
    //         } else {
    //             message = "you're out of the game"
    //             isAlive = false
    //         }
    //         messageEl.textContent = message
    //         console.log(message)
    
    //     }
    
    //     function newcard() {
    //         console.log("Drawing a new card from the deck!")
    //         let card = 9
    //         sum += card
    //         rendergame() 
    //     }
///// SOLVING WITH ARRAY


// let firstcard = 11
// let secondcard = 1
// let cards = [firstcard,secondcard] // array - ordered list of items/
// let sum = firstcard + secondcard 
// let hasblackjack = false
// let isAlive = true
// let message = ""

// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startgame() {
//     rendergame()
// }

//     function rendergame() { 
//         cardsEl.textContent = "Cards: " + cards[0] + "," + cards[1]
//         sumEl.textContent = "Sum: " + sum
            

//         if (sum <= 20) {
//             message = "Do you want to draw a new card?"
            
//         } else if (sum === 21) {
//             message = "you've got blackjack!"
//             hasblackjack = true
//         } else {
//             message = "you're out of the game"
//             isAlive = false
//         }
//         messageEl.textContent = message
//         console.log(message)

//     }

//     function newcard() {
//         console.log("Drawing a new card from the deck!")
//         let card = 9
//         sum += card
//         rendergame() 
//     }

    // Arrays - ordered list of items

// 
// let experience = [
//     "Edureka!",
//     "4 Month Web developer Course",
//     "Front-end web Developer"
// ]
// let education = [
//     "10th(SSC-71%)",
//     "12th(HSC-48%)",
//     "BSC-IT(CGPA-7.8)"
// ]
// let skills = [
//     "HTML",
//     "CSS",
//     "JAVASCRIPT"
// ]
// console.log(experience[2])
// console.log(experience[1])
// console.log(experience[0])

/// ARRAYS WITH MULTIPLE DATA TYPES

// create an array that describes yourself use the three primitive data types you,ve learned
//it should contain your name (string) your age(number) and whether you like pizza (boolean)


// let Bio = ["Irfan Quadri",25,true]
// console.log(Bio)

//adding and removing items from arrays
//  let cards = [7,8]
//  cards.push(3)
//  console.log(cards)
// push the newmessage to the message array, and then log out the array

// let message = [
//     "Hey, how's it going?",
//     "I'm great, thank you! how about you?",
//     "All good. been working on my portfolio lately."
// ]
// let newMessage = "same here!"

// message.push(newMessage)
// console.log(message)

// message.pop()
// console.log(message)

/// CREATE THE CARDS ARRAY//
// let firstcard = 11
// let secondcard = 1
// let cards = [firstcard,secondcard] // array - ordered list of items/
// let sum = firstcard + secondcard 
// let hasblackjack = false
// let isAlive = true
// let message = ""

// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startgame() {
//     rendergame()
// }

//     function rendergame() { 
//         cardsEl.textContent = "Cards: " + cards[0] + "," + cards[1]
//         sumEl.textContent = "Sum: " + sum
            

//         if (sum <= 20) {
//             message = "Do you want to draw a new card?"
            
//         } else if (sum === 21) {
//             message = "you've got blackjack!"
//             hasblackjack = true
//         } else {
//             message = "you're out of the game"
//             isAlive = false
//         }
//         messageEl.textContent = message
//         console.log(message)
//     }

//     function newcard() {
//         console.log("Drawing a new card from the deck!")
//         let card = 10
//         sum += card
//         cards.push(card)
//         console.log(cards)
//         rendergame() 
//     }
////COUNTING IN JAVASCRIPT//

// for (let count = 10; count < 21; count +=1) {
//     console.log(count)
// }
// /// write your first lopp in javascript//

// for (let i =10; i < 101; i += 10) {
//     console.log(i)
// }
/// for loops and arrays
// let message = [
//     "Hey, how's it going?",
//      "I'm great, thank you! how about you?",
//      "All good. been working on my portfolio lately.",
//      "same here",
//      "good to hear",
//      "good bye",
//      "good evening",
//      "goodnight"
// ]
// console.log(message[0])
// console.log(message[1])
// console.log(message[2])
// console.log(message[3])

// for (i = 1; i < message.length;  i+=1) {
//     console.log(message[i])
// }

// let cards = [7,3,9,5,18,99]

// for (let i = 0; i < cards.length; i ++ ) {
//     console.log(cards[i])
// }
//FOR LOOPS,ARRAYS,AND DOM

// let sentence = ["hello", "my", "name", "is", "irfan"]
// let greetingEl = document.getElementById("greeting-el")


// for (let i = 0; i < sentence.length; i ++) {
//     greetingEl.textContent += sentence[i] + " "
    
// }
////////////////////////
//  let cards = [7,4,9]
//  for( let i = 0; i < cards.length; i ++) {
//     console.log(cards[i])
//  }
////

// FOR LOOPS ,ARRAYS, AND DOM

// let sentence = ["Hello", "My", "Name", "is", "Irfan Quadri"]
// let greetingEl = document.getElementById("greeting-el")

////////////////

// let firstcard = 11
// let secondcard = 10
// let cards = [firstcard,secondcard] // array - ordered list of items/
// let sum = firstcard + secondcard 
// let hasblackjack = false
// let isAlive = true
// let message = ""

// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startgame() {
//     rendergame()
// }

//     function rendergame() { 
//         cardsEl.textContent = "Cards: " + cards[0] + "," + cards[1]
//         sumEl.textContent = "Sum: " + sum
            

//         if (sum <= 20) {
//             message = "Do you want to draw a new card?"
            
//         } else if (sum === 21) {
//             message = "you've got blackjack!"
//             hasblackjack = true
//         } else {
//             message = "you're out of the game"
//             isAlive = false
//         }
//         messageEl.textContent = message
//         console.log(message)
//     }

//     function newcard() {
//         console.log("Drawing a new card from the deck!")
//         let card = 10
//         sum += card
//         cards.push(card)
//         console.log(cards)
//         rendergame() 
//     }
/////

//  let sentence = ["Hello", "Myself","Irfan","Quadri"]
//  let greetingEl = document.getElementById("greeting-el")

//  for (i = 0; i < sentence.length; i++) {
//   greetingEl.textContent += sentence[i] + " "
  
//  }

 //////

//  let firstcard = 7
// let secondcard = 8
// let cards = [firstcard, secondcard]// array - ordered list of items/
// let sum = firstcard + secondcard 
// let hasblackjack = false
// let isAlive = true
// let message = ""

// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startgame() {
//     rendergame()
// }

//     function rendergame() { 
//       cardsEl.textContent = "cards: "
//       for (i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + ", "
//       }
       
//         sumEl.textContent = "Sum: " + sum
            

//         if (sum <= 20) {
//             message = "Do you want to draw a new card?"
            
//         } else if (sum === 21) {
//             message = "you've got blackjack!"
//             hasblackjack = true
//         } else {
//             message = "you're out of the game"
//             isAlive = false
//         }
//         messageEl.textContent = message
//         console.log(message)
//     }

//     function newcard() {
//         console.log("Drawing a new card from the deck!")
//         let card = 6
//         sum += card
//         cards.push(card)
//         console.log(cards)
//         rendergame() 
//     }
 

///////////
//RETURNING VALUES IN FUNCTION
// let player1time = 101
// let player2time = 104


// function getfastestracetime() {
//   if (player1time < player2time) {
//     return player1time
//   }else if (player2time < player1time) {
//     return player2time
//   }else {
//     return player1time
//   }
// }

// // let fastestrace = getfastestracetime()

// function gettotalracetime() {
//   return player1time + player2time
// }
// let totaltime = gettotalracetime()
// console.log(totaltime)

////////

// let firstcard = getrandomcard()
// let secondcard = getrandomcard()
// let cards = [firstcard, secondcard]// array - ordered list of items/
// let sum = firstcard + secondcard 
// let hasblackjack = false
// let isAlive = true
// let message = ""

// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// // create a function getrandomcard() that always return the value 5
// function getrandomcard() {
//   return 5
// }




// function startgame() {
//     rendergame()
// }

//     function rendergame() { 
//       cardsEl.textContent = "cards: "
//       for (i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + ", "
//       }
       
//         sumEl.textContent = "Sum: " + sum
            

//         if (sum <= 20) {
//             message = "Do you want to draw a new card?"
            
//         } else if (sum === 21) {
//             message = "you've got blackjack!"
//             hasblackjack = true
//         } else {
//             message = "you're out of the game"
//             isAlive = false
//         }
//         messageEl.textContent = message
//         console.log(message)
//     }

//     function newcard() {
//         console.log("Drawing a new card from the deck!")
//         let card = getrandomcard()
//         sum += card
//         cards.push(card)
//         console.log(cards)
//         rendergame() 
//     }
  ///
  // GENEARTING RANDOM NUMBERS WITH MATH.RANDOM()

//  let randomNumber = Math.random() * 6
//  console.log(randomNumber)

// let flooredNumber = Math.floor(4.999)
// console.log(flooredNumber) 
//(it generate decimal)

///
// let randomNumber = Math.floor(Math.random() * 6)
// console.log(randomNumber5)

//write down all the positive values randomNumber can hold now
//0,1,2,3,4,5

// try to modify the expression so that we get range from 1 to 6
// let randomNumber = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber)

// create a function rolldice(), that returns a random number between 1 and 6

// function rollDice() {
//   let randomNumber = Math.floor( Math.random() * 6 ) + 1
//   return randomNumber
// }
// console.log( rollDice() )

/////

// 

///
//ASSIGN VALUE IN THE START GAME

////
//THE LOGICAL AND OPERATOR

// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//   generateCertificate()
// }

// function generateCertificate() {
//   console.log("Generating certificate ...")
// }

// create an if statement that checks that both variable are false,
// if so, run the showssolution() function

// let hasSolvedChallenge = false
// let hasHintLeft = false

// if (hasSolvedChallenge === false && hasHintLeft === false){
//   showSolution()
// }

// function showSolution() {
//   console.log("Showing the Solution....")
// }

// let LikesDocumentaries = false
// let LikesStartups = false

// if ( LikesDocumentaries === true || LikesStartups === false) {
//   recommendedMovie()
// }

// function recommendedMovie() {
//   console.log("Hey, check out this new film we think you will like!")
// }

/////////


/////
// Intro to Objects

// let course = {
//   title: "Learn javascript for free",
//   lessons: 18,
//   creator: "Irfan S Quadri",
//   length: 62,
//   level: 1,
//   isFree: true,
//   tags: ["html", "Css"]
// }

// console.log(course.isFree)


/////////
// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

// let AirBNB = {
//   title: "Live Like A King",
//   location: "United Kingdom",
//   isPrivate: true,
//   rating: 4.5,
//   Amenities: ["Bedrooms", "swimmingPool","Gym","MountainView"],
//   price: 190
// }

// console.log(AirBNB.price)
// console.log(AirBNB.title)
// console.log(AirBNB.Amenities[2])
// console.log(AirBNB.isPrivate)
///
// 
// let value = [1,2,3,4,5,2,3,4]
// function getvalue() {
  
//   value.pop([5])
//   value.pop([6])
//   value.pop([7])
//   console.log(value)
// }
// getvalue()
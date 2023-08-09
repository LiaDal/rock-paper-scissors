const process = require('process');
const readline = require('readline');
const crypto = require("crypto")


class Key {    
    static randomKeyGenerator() {
      const letters = 'ZYXWVUTSRQPONMLKJIHGFEDCBA0123456789'
      let word = ''
      for (let i = 0; i < 15; i++) {
        word += letters.charAt(Math.floor(Math.random() * letters.length))
      }
            
      return word
    }

    static moveGenerator() {
      const movesArr = ['rock', 'paper', 'scissors'];
      let move = Math.floor(Math.random() * movesArr.length)
      return movesArr[move]
    }  

    static showKey() {
        console.log(`HMAC key: ${Key.randomKeyGenerator()}`)
    }

}


class Hmac {  
  static generateHMAC() {
    const keyMove = Key.moveGenerator() + Key.randomKeyGenerator();
    const hash = crypto.createHash("SHA3-256");
    const imtired = hash.update(keyMove).digest("hex");
    console.log(`HMAC: ${imtired}`)
  }
}

class Message{
  static showMessage() {
    console.log('Available moves:\n1 - rock\n2 - paper\n3 - scissors\n0 - exit\n? - help\nEnter your move:\n')
  }
}

function startGame(callback){
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', answer => {
    if(answer == '0') {
    console.log('Game is over');
    rl.close(); 
  } else if(answer === '?') {
    console.log('Rules:');
    rl.close();  
  } else if((answer === 'rock'|| answer === '1')  && Key.moveGenerator() === 'scissors') {
    console.log('Your move: rock');
    console.log('Computer move: scissors');
    console.log('You win!');
    rl.close();
  } else if((answer === 'rock' || answer === '1') && Key.moveGenerator() === 'paper') {
    console.log('Your move: rock');
    console.log('Computer move: paper');
    console.log('You lose :(')
    rl.close();
  } else if((answer === 'rock' || answer === '1') && Key.moveGenerator() === 'rock') {
    console.log('Your move: rock');
    console.log('Computer move: rock');
    console.log('Draw')
    rl.close();
  } else if((answer === 'paper' || answer === '2') && Key.moveGenerator() === 'rock') {
    console.log('Your move: paper');
    console.log('Computer move: rock');
    console.log('You win!')
    rl.close();
  } else if((answer === 'paper' || answer === '2') && Key.moveGenerator() === 'paper') {
    console.log('Your move: paper');
    console.log('Computer move: paper');
    console.log('Draw')
    rl.close();
  } else if((answer === 'paper' || answer === '2') && Key.moveGenerator() === 'scissors') {
    console.log('Your move: paper');
    console.log('Computer move: scissors');
    console.log('You lose :(')
    rl.close();
  } else if((answer === 'scissors' || answer === '3') && Key.moveGenerator() === 'scissors') {
    console.log('Your move: scissors');
    console.log('Computer move: scissors');
    console.log('Draw')
    rl.close();
  } else if((answer === 'scissors' || answer === '3') && Key.moveGenerator() === 'paper') {
    console.log('Your move: scissors');
    console.log('Computer move: paper');
    console.log('You win!')
    rl.close();
  } else if((answer === 'scissors' || answer === '3') && Key.moveGenerator() === 'rock') {
    console.log('Your move: scissors');
    console.log('Computer move: rock');
    console.log('You lose :(')
    rl.close();
  } else {
    console.log ('Write your move');
  }

    callback()
})}


Hmac.generateHMAC()
Message.showMessage()
startGame(Key.showKey)


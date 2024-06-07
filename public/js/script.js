const myButton = document.getElementById('btn');
myButton.onclick = function () {
    const name =prompt('Enter your full name.');
    document.getElementById('name').innerText = name;
    document.getElementById ('name').style.backgroundColor = 'red';
}

//variables
const pi = 3.142;
let name = 'Freda';
let age = 10;
let present = false;
console.log(name)

// objects
const car = {
    numberPlate: 'GR-345-24',
    model: 'Rangerover', 
    color: 'pink',
    weight: 50,
    weightUnit:'KG',
    owner: {
        name: 'Freda',
        driver: {
            name:'Kwame'
            
        }
    }
}
console.log(car.weight);
console.log(car.model);
console.log(car.owner.driver.name);

car.owner.driver.name = 'Yaw';
console.log(car.owner.driver.name);


const tweet1 = {
    text:'i am learning js today',
    likes: 5,
    shares: 2,
    retweets: 1
  }
  
  const tweet2 = {
    text:'i am learning arrays today',
    likes: 8,
    shares: 3,
    retweets: 0
    
  }
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets
  
  // dates
  const today = new Date();
  today.toString();
  today.toLocaleDateString();
  
  // If/Else
  if (today.getHours() == 16){ 
    console.log('class has ended!');
  } else{
    console.log('class is in session');
  }
   // For loop
  for (let i= 0; i <= 10; i++) {
    console.log('Notify friends!', i);
  }
  
  
  const tweet1 = {
    text:'i am learning js today',
    likes: 5,
    shares: 2,
    retweets: 1
  }
  
  const tweet2 = {
    text:'i am learning arrays today',
    likes: 8,
    shares: 3,
    retweets: 0
    
  }
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets[1]
  
  // dates
  const today = new Date();
  today.toString();
  today.toLocaleDateString();
  
  // If/Else
  if (today.getHours() == 16){ 
    console.log('class has ended!');
  } else{
    console.log('we are false');
  }
  
  // Functions
  // Defining functions
  function login(username, password) {
   if(username == 'Freeda'&& password == '1234') {
      return 'User is logged in!'
   } else if (username != 'Freeda') {
     return 'Invalid username!';
   }
     else if (password != '1234') {
     return 'Invalid password!';
   }
     else {
     return 'invalid username or password!';
   }
  }
  
  // Invoking functions
  login('Freeda','1234');
  
  //Basic Arithmetric
  12 + 34;
  45 - 16;
  7 * 12;
  78 / 4;
  12 % 4;
  11 % 2
  15%4
  
  // Comparison operator
  2!== '2'
  2 === 2
  4==='4'
  
  // Built in Maths functions
  Math.round(37 / 24);
  Math.floor(37/ 24);
  Math.ceil(37 /24)
  Math.random()
  Math.max(78, 6 ,45)
  Math.min(5,16,35,36, 87)
  
  
  //order of operation
  1*8 + 4 -3
  
  //Handling user inputs
  1200 + Number('250')



  //string concatenation
const firstname = "Freda";
const lastname = "Astanga";
firstname.trim() + " " + lastname.trim()
// Template literal
`${firstname.trim()} ${lastname.trim()}`;

// String methods
firstname.length;
lastname.length;
`${firstname.trim()} ${lastname.trim()}`.length;
(firstname.trim() + " " + lastname.trim()).length;
// firstname.toUppercase();
lastname.charAt(1)
`${firstname.trim()} ${lastname.trim()}`.chart(0);
`${fristname.trim().charAt(0)}${lastname.trim().charAt(0)}`;

//String conversion
String(2014);


  
  
  
  
  
  
  
  
  
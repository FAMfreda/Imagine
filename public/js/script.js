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
  
  
  
  
  
  
  
  
  
  
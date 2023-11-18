console.log('App is connected');
// understand scope 

// Protagonist of our application
const barbie = {
    name: 'Barbie',
    wardrobe: [],
    wallet: 0,
    rental: [],
    garage: [],
    assets:[]
}



class Career {
    constructor(name, description, income, id){
        this.name = name;
        this.description = description;
        this.income = income;
        this.id = id;
    }
}

const careerDescriptions = [
    {
        name: 'lawyer',
        description: 'works as an attorney of a high end law firm'
    },
    {
        name: 'software-engineer',
        description: 'solves software related problems and build application architecture.'
    },
    {
        name: 'doctor',
        description: 'helps people with their boo boos'
    },
    {
        name: 'influencer',
        description: 'talk about stuff on social media and people say wow and i get paid'
    }
]
const careerIncomes = [
 8501,
 18501,
 2850,
 3850,
 4850,
 5850,
 6850
];
const careers = [];


const randomization = (limit) => {
 return Math.floor(Math.random() * limit)
}


for (let i = 10 ; i > 0; i--){
 const job = careerDescriptions[randomization(careerDescriptions.length)]
 const income = careerIncomes[randomization(careerIncomes.length)];
 careers.push(new Career(job.name, job.description, income, `${job.name}-${income}` ))
}


// barbie.career = careers[randomization(careers.length)];
// TASK1: CAREER CHANGE FEATURE 
barbie.career = {};

const careerOptions = document.getElementById("careeroptions");
const careerDropDownMenu = document.getElementById("careerdropdownmenu")
function showHide() {
    // careerDropDownMenu.classList.toggle("show");
    careerDropDownMenu.classList.add("show");
  }
  

careerOptions.addEventListener("click", () => {
    showHide();
})
// push all the career names into the dropmenu
for (let career of careers) {
    let careerName = document.createElement("li");
    careerName.innerHTML = `${career.name}`;
    careerName.style.boxShadow = "1px 1px 2px black";
    careerName.style.listStyleType = "none";
    careerName.style.paddingLeft= "1rem";
    careerDropDownMenu.append(careerName);
}
// careerOptions.addEventListener("click", () => {
//     for (let career of careers) {
//        let careerName = document.createElement("li");
//        careerName.innerHTML = `${career.name}`;
//        careerName.style.boxShadow = "1px 1px 2px black";
//        careerName.style.listStyleType = "none";
//        careerName.style.paddingLeft= "1rem";
//        careerDropDownMenu.append(careerName);
//     };
//     careerDropDownMenu.style.display = "block";
// })



const careerOption = document.querySelectorAll("#careerdropdownmenu li");
// each career option is clickable and update the info about job and salary
for (let i = 0; i< careerOption.length; i++) {
    careerOption[i].addEventListener("click", () => {
        barbie.career = careers[i];
        barbie.render();
        careerDropDownMenu.classList.remove("show");
    })
}
// for (let element of careerOption) {
//     element.addEventListener("click", () => {
//         console.log(element);
//         barbie.career = careers.find(ob => ob.name === element)
//     })
// }


// Task 2 Sell Wardrobe items
// Implement a feature allowing Barbie to sell items from her wardrobe.
// Add buttons next to each wardrobe item with the label "Sell".
// When clicked, add the item's price back to Barbie's wallet and remove the item from the wardrobe.
class Clothing {
    constructor(name, designer, color, type, size, price){
        this.name = name;
        this.designer = designer;
        this.color = color;
        this.type = type;
        this.size = size;
        this.price = price;
    }
}

const birkin = new Clothing('Birkin Bag', 'Hermes', 'purple', 'bag', 'lg', 15470 )
const redBottoms = new Clothing('Red Bottoms', 'Christian Loboutin', 'black', 'shoes', '6', 3000)




// Game Screen

barbie.el = document.getElementById('barbie');

barbie.render = () => {
    barbie.el.innerHTML = `
    <h1>${barbie.name} Status</h1>
    <h3>${barbie.name} works as a ${barbie.career.name} </h3>
    <h3> Each week ${barbie.name} takes home $${barbie.career.income}</h3>
    <h3> Currently ${barbie.name} has $${barbie.wallet} in their bank account</h3>
    <div> <h2>Wardrobe Contains: </h2> 
    <ul>${
        barbie.wardrobe.map((item => {
            return `<li>
            ${barbie.name} has a ${item.color} 
            ${item.name} made by ${item.designer}
            that is worth ${item.price} in size 
            ${item.size} <button id = "wardrobeindividualsellbtn">Sell the item</button>
            </li> `
        } 
        )).join('')
    }</ul>
    </div>
    <div><h2>Rental Contains: </h2>
    <ul>${
        barbie.rental.map((item => {
            return `<li>
            ${barbie.name} has bought a ${item.type} 
            ${item.name} locateed in ${item.location}
            that costs ${item.price} and adds ${item.income} to ${barbie.name}'s income  
            </li>`
        })).join('')
        
    }</ul>
    </div>
    <div><h2>Garage Contains: </h2>
    <ul>${
        barbie.garage.map((item => {
            return `<li>
            ${barbie.name} has bought a ${item.color} ${item.type} 
            ${item.name} 
            that costs ${item.price} and deducts ${item.income} from ${barbie.name}'s income  
            </li>`
        })).join('')
        
    }</ul>
    </div>
    <div> <h2>assets Contains: </h2> 
    <ul>${
        barbie.assets.map((item => {
            return `<li>
            ${barbie.name} has a new
            ${item.name}
            <button id ="assetsindividualsellbtn">Sell the asset</button></li>`
        } 
        )).join('')
    }</ul>
    </div>
`;
const wardrobeIndividualSellBtn = document.querySelectorAll("#barbie #wardrobeindividualsellbtn")
const assetsIndividualSellBtn = document.querySelectorAll("#barbie #assetsindividualsellbtn")
thingsToSell(wardrobeIndividualSellBtn, barbie.wardrobe);
thingsToSell(assetsIndividualSellBtn, barbie.assets);
// const individualSellBtn = document.querySelectorAll("#barbie #individualsellbtn");
// console.log(individualSellBtn);
// for (let i = 0; i< individualSellBtn.length; i++){
//     let itemToSell = barbie.wardrobe[i];
//     const index = i;
//     individualSellBtn[i].addEventListener("click",()=> {
//     barbie.wardrobe.splice(index,1);
//     const sellingPrice = (Math.floor(Math.random()* ((200 - 70) + 1) + 70)) * 0.01
//     barbie.wallet += Math.floor(sellingPrice * itemToSell.price) 
//     barbie.render()  
//     console.log(barbie.wardrobe)
//     })
//  }
}

barbie.render()

// TASK3 function to sell assets and wardrobe
function thingsToSell(things, category) {
    for (let i = 0; i< things.length; i++){
        let itemToSell = category[i];
        const index = i;
        things[i].addEventListener("click",()=> {
        category.splice(index,1);
        const sellingPrice = (Math.floor(Math.random()* ((200 - 70) + 1) + 70)) * 0.01
        barbie.wallet += Math.floor(sellingPrice * itemToSell.price) 
        if (itemToSell.name === "")
        barbie.render()  
        })
     }
}


const birkinButton = document.getElementById('birkin');

birkinButton.addEventListener('click', ()=>{
    if(barbie.wallet >= birkin.price){
        barbie.wardrobe.push(birkin);
        barbie.wallet -= birkin.price;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }

})

const workButton = document.getElementById('work');

workButton.addEventListener('click', ()=>{
    barbie.wallet += barbie.career.income; // WE updated the wllet that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    barbie.render();
})

const rbButton = document.getElementById('red-bottoms')

rbButton.addEventListener('click', () => {
    if(barbie.wallet >= redBottoms.price){
        barbie.wardrobe.push(redBottoms);
        barbie.wallet -= redBottoms.price;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }
})

class RentalProperty {
    constructor(name, type, price, location, income) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.location = location;
        this.income = income;
    }
}

const condo = new RentalProperty('Condo', 'Rental', 50000, 'Miami', 500)

const condoBtn = document.getElementById('condo')

condoBtn.addEventListener('click', () => {
    if(barbie.wallet >= condo.price){
        barbie.rental.push(condo);
        barbie.assets.push(condo);
        barbie.wallet -= condo.price;
        barbie.career.income += condo.income
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }
})

const sellBtn = document.getElementById('sell')

// const spanForIndividualSellBtn = document.querySelectorAll("#barbie span")
// function createSellBtn() {
//     for (let i = 0; i< spanForIndividualSellBtn.length; i++){
//         const individualSellBtn = document.createElement("button");
//         individualSellBtn.innerHTML = "sell this item";
//         spanForIndividualSellBtn[i].append(individualSellBtn);
//     }
// }
// sellBtn.addEventListener('click', () => {
//   barbie.render();
//     createSellBtn();
// }
// )
// sellBtn.addEventListener('click', () => {
//     if(barbie.wardrobe.length > 0) {    
//     const randomIndex = randomization(barbie.wardrobe.length)
//     const itemToSell = barbie.wardrobe[randomIndex]
//     barbie.wardrobe.splice(randomIndex, 1)
//     const sellingPrice = (Math.floor(Math.random()* ((200 - 70) + 1) + 70)) * 0.01
//     barbie.wallet += Math.floor(sellingPrice * itemToSell.price)
//     barbie.render();

//     } else {
//         alert('You have NOTHING to sell bro')
//     }
// })

class Car {
    constructor(name, type, price, color, income){
        this.name = name
        this.type = type
        this.price = price
        this.color = color
        this.income = income
    }

}

const tesla = new Car('Tesla', 'Electric', 50000, 'red', -150)

const teslaBtn = document.getElementById('tesla')

teslaBtn.addEventListener('click', () => {
    if(barbie.wallet >= tesla.price) {
        barbie.garage.push(tesla);
        barbie.assets.push(tesla);
        barbie.wallet -= tesla.price;
        barbie.career.income += tesla.income
        barbie.render()
    } else {
        alert('Stop trippin you know you aint got it like that')
    }
})
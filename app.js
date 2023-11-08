console.log('App is connected');

// Protagonist of our application
const barbie = {
    name: 'Barbie',
    wardrobe: [],
    wallet: 0
}
// define a career class 
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
 // clever way to create random jobs with random income , career 
 careers.push(new Career(job.name, job.description, income, `${job.name}-${income}` ))
}


barbie.career = careers[randomization(careers.length)]

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

const types = [
    {name:'Birkin Bag', type: 'bag'},
    {name:'shoes', type: 'shoes'},
    {name:'silver belt', type: 'belt'},
    {name:'diamond ring', type: 'jewelry'}
 ]

 const randomtype = types[randomization(types.length)];
 

// get random color 

const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

function getCharacter(index) {
	return hexCharacters[index]
}

function generateNewColor() {
	let hexColorRep = "#"

	for (let index = 0; index < 6; index++){
		const randomPosition = Math.floor ( Math.random() * hexCharacters.length ) 
    	hexColorRep += getCharacter( randomPosition )
	}
	
	return hexColorRep
}

const clothes = new Clothing (randomtype.name, "Hermes", generateNewColor(),randomtype.type, "small",3000)

const birkin = new Clothing('Birkin Bag', 'Hermes', 'purple', 'bag', 'lg', 15470 )
const redBottomShoes = new Clothing('red bottom shoes', 'Dior', 'red', 'shoes', "size 24", 5000 )






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
            ${item.size} 
            </li>`
        })).join('')
    }</ul>
    </div>
`;
}

barbie.render()



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



const redbotton = document.getElementById("redbuttoms");
redbotton.addEventListener("click", ()=>{
    if (barbie.wallet >= redBottomShoes.price){
        barbie.wardrobe.push(redBottomShoes);
        barbie.wallet -= redBottomShoes.price;
        barbie.render();
    } else {
        alert("You do not have enough money to buy red bottoms shoes.")
    }   
});

const randomClothes = document.getElementById("randomClothes");
randomClothes .addEventListener("click", ()=>{
    if (barbie.wallet >= clothes.price){
        barbie.wardrobe.push(clothes);
        barbie.wallet -= clothes.price;
        barbie.render();
    } else {
        alert("You do not have enough money to buy red bottoms shoes.")
    }   
});
redbotton.addEventListener("mouseover", (e) =>{
  e.target.style.backgroundColor = "red";
});


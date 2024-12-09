//primo esercizio
const User = function ( ) {
    this.firstName = '';
    this.lastName = '';
    this.age = 0;
    this.location ='';

    this.comparation = function (secondUser) {
        if (this.age>secondUser.age) {
            return `${this.firstName} ${this.lastName} è più vecchio/a di ${secondUser.firstName} ${secondUser.lastName}`
        } else if (this.age <secondUser.age) {
            return `${this.firstName} ${this.lastName} è più giovane di ${secondUser.firstName} ${secondUser.lastName}`  
        } else {
            return `${this.firstName} ${this.lastName} e ${secondUser.firstName} ${secondUser.lastName} hanno la stessa età`  
        }
    }
}

const user1 =new User();

user1.firstName = 'Rachele';
user1.lastName = 'Barberis';
user1.age =23;
user1.location ='Andorno';

const user2 =new User();

user2.firstName = 'Riccardo';
user2.lastName = 'Barberis';
user2.age =53;
user2.location ='Andorno';

const user3 =new User();

user3.firstName = 'Luisella';
user3.lastName = 'Fiore';
user3.age =55;
user3.location ='Andorno';

console.log(user1.comparation(user2));
console.log(user1.comparation(user3));
console.log(user2.comparation(user3));

//secondo esercizio
const btnAdd =document.getElementById('add');
const petList= document.getElementById('petList');

class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName =_petName;
        this.ownerName =_ownerName;
        this.species = _species;
        this.breed = _breed;
    }
}

btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    let petName = document.getElementById('petName').value;
    let ownerName = document.getElementById('ownerName').value;
    let species = document.getElementById('species').value;
    let breed= document.getElementById('breed').value;
    const newPet = new Pet (petName, ownerName, species, breed);

    const listItems = document.createElement('li');
    listItems.innerHTML = `${newPet.petName} è di proprietà di ${newPet.ownerName}.`
    petList.appendChild(listItems);

    petForm.reset();
});

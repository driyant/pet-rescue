const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = (name, species) => {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz.., `);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log(`Too tired to play!`);
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play! `);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

const sora = createPet("Sore", "ferret");
const clover = createPet("Clover", "Rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "tutrle");

// console.log(sora, clover, baxter, cleo, francine);

// clover.play();
// baxter.sleep();

clover.isTired = 8;
francine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, francine];
// console.log(allPets);

const showPets = (allPets) => {
  pets.innerHTML = "";
  for (let petItem of allPets) {
    let status = "Ready to play!";
    if (petItem.isTired >= 7) {
      status = "sleeping";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${petItem.name}</span> the ${petItem.species} is ${status}`;
    pets.appendChild(li);
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets);
});

import { useEffect, useState } from 'react';
import './App.css'; // Import your CSS file

function App() {
  const animals = [
    "Dog", "Cat", "Elephant", "Tiger", "Lion", "Giraffe", "Zebra", "Monkey", "Gorilla", "Hippopotamus",
    "Rhinoceros", "Bear", "Wolf", "Fox", "Rabbit", "Deer", "Kangaroo", "Koala", "Panda", "Dolphin",
    "Whale", "Shark", "Octopus", "Squid", "Jellyfish", "Starfish", "Seahorse", "Turtle", "Frog", "Toad",
    "Salamander", "Newt", "Alligator", "Crocodile", "Snake", "Python", "Cobra", "Anaconda", "Lizard",
    "Gecko", "Chameleon", "Iguana", "Komodo dragon", "Hawk", "Eagle", "Falcon", "Owl", "Vulture", "Parrot",
    "Cockatoo", "Toucan", "Hummingbird", "Penguin", "Ostrich", "Emu", "Kiwi", "Goose", "Duck", "Swan",
    "Flamingo", "Pelican", "Albatross", "Pigeon", "Sparrow", "Robin", "Blue jay", "Cardinal", "Woodpecker",
    "Crow", "Raven", "Magpie", "Peacock", "Pheasant", "Quail", "Turkey", "Chicken", "Rooster", "Hen", "Cow",
    "Horse", "Donkey", "Mule", "Pony", "Camel", "Dromedary", "Bactrian", "Llama", "Alpaca", "Sheep", "Goat",
    "Pig", "Boar", "Warthog", "Wildebeest", "Antelope", "Bison", "Buffalo", "Moose", "Elk", "Caribou",
    "Reindeer", "Gazelle", "Raccoon", "Squirrel", "Chipmunk", "Beaver", "Otter", "Badger", "Wolverine",
    "Skunk", "Ferret", "Mink", "Weasel", "Stoat", "Marten", "Ocelot", "Lynx", "Bobcat", "Cheetah", "Jaguar",
    "Leopard"
  ];

  const [search, setSearch] = useState("");
  const [animalslist, setAnimals] = useState(animals);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    // Do something with search
  }, [search]);

  const filteredArray = animalslist.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <input
        onChange={handleSearch}
        name="search"
        id="search"
        placeholder="Search Animals..."
      />
      <div className="animal-list">
        {search !== "" &&
          filteredArray.map((item, index) => {
            return <a href={`https://www.google.com/search?q=${item}`}><p key={index}>{item}</p></a>
          })}
      </div>
    </div>
  );
}

export default App;

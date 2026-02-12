import { useState } from "react";

const characters = [
  {
    name: "yoda",
    label: "Yoda",
    image: "/images/sw_0006.jpg",
  },
  {
    name: "darthvader",
    label: "Darth Vader",
    image: "/images/sw_0000.jpg",
  },
  {
    name: "obiwan",
    label: "Obi-Wan",
    image: "/images/sw_0005.jpg",
  },
  {
    name: "leia",
    label: "Leia Organa",
    image: "/images/sw_0003.jpg",
  },
  {
    name: "lukeskywalker",
    label: "Luke Skywalker",
    image: "/images/sw_0002.jpg",
  },
  {
    name: "hansolo",
    label: "Han Solo",
    image: "/images/sw_0007.jpg",
  },
  {
    name: "emperor",
    label: "Emperor",
    image: "/images/sw_0004.jpg",
  },
  {
    name: "c3po",
    label: "C-3PO",
    image: "/images/sw_0001.jpg",
  },
];

const API = () => {
  const [quote, setQuote] = useState(null);
  const [answer, setAnswer] = useState("");
  const [correctCharacter, setCorrectCharacter] = useState(null);

  const fetchData = async () => {
    const randomCharacter =
      characters[Math.floor(Math.random() * characters.length)];
    setCorrectCharacter(randomCharacter);

    const url = `https://star-wars-quotes-api-character-collection.p.rapidapi.com/quote?character=${randomCharacter.name}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "star-wars-quotes-api-character-collection.p.rapidapi.com",
        "x-rapidapi-key": "b914e90786mshba3191d8b405c6bp167744jsn911e982b48f3",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setQuote(result);
      setAnswer(""); // Nollställer och genererar ett nytt citat
    } catch (error) {
      console.error(error);
    }
  };

  const handleGuess = (characterName) => {
    if (!correctCharacter) return;
    if (characterName === correctCharacter.name) {
      setAnswer("Yup! The force is strong with this one");
    } else {
      setAnswer("Nope! Try another");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="md:text-6xl text-4xl font-bold text-center mb-4">
        Star Wars Quotes
      </h1>
      <button
        onClick={fetchData}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Generate Quote
      </button>
      <div className="h-10"></div>
      <div className="min-w-[300px] min-h-[120px] p-6 m-5 text-center bg-white rounded-3xl shadow-md flex flex-col justify-center">
        <p className="text-base text-blue-950 mb-4">
          Which character said this quote?
        </p>
        {quote ? (
          <p className="text-lg italic">"{quote.quote}"</p>
        ) : (
          <p className="text-lg italic text-gray-400">
            Click the button to start the quizz
          </p>
        )}
      </div>

      {answer && <div className="p-5 text-xl font-semibold mb-4">{answer}</div>}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4">
        {characters.map((char) => (
          <button
            key={char.name}
            onClick={() => handleGuess(char.name)}
            className="flex flex-col items-center focus:outline-none"
            disabled={!quote}
          >
            <div className="h-4 lg:h-8"></div>

            <img
              src={char.image}
              alt={char.label}
              className="md:w-20 md:h-20 h-10 w-10 rounded-full border-2 md:border-4 border-blue-300 hover:border-yellow-400 transition"
              style={{ objectFit: "cover" }}
            />
            <span className="mt-2 text-xs md:text-sm font-medium">
              {char.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default API;

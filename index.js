import express from "express";
import { sequelize } from "./config.js";
import { User } from "./user.js";

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

try {
  await sequelize.authenticate();
  await sequelize.sync();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// const jane = await User.create({
//   firstName: "Manoj",
//   lastName: "Dhanekula",
// });

// middleware -> converting the body

const app = express();
const data = [
  {
    id: "99",
    name: "Vikram",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    rating: 8.4,
    summary:
      "Members of a black ops team must track and eliminate a gang of masked murderers.",
    trailer: "https://www.youtube.com/embed/OKBMCL-frPU",
  },
  {
    id: "100",
    name: "RRR",
    poster:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
  },
  {
    id: "101",
    name: "Iron man 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    trailer: "https://www.youtube.com/embed/wKtcmiifycU",
  },
  {
    id: "102",
    name: "No Country for Old Men",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 8.1,
    summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    trailer: "https://www.youtube.com/embed/38A__WT3-o0",
  },
  {
    id: "103",
    name: "Jai Bhim",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
  },
  {
    id: "104",
    name: "The Avengers",
    rating: 8,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
  },
  {
    id: "105",
    name: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 8.6,
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    id: "106",
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
  },
  {
    id: "107",
    name: "Ratatouille",
    poster:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    summary:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
  },
  {
    name: "PS2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
    summary:
      "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
    rating: 8,
    trailer: "https://www.youtube.com/embed/KsH2LA8pCjo",
    id: "108",
  },
  {
    name: "Thor: Ragnarok",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
    rating: 8.8,
    trailer: "https://youtu.be/NgsQ8mVkN8w",
    id: "109",
  },
];
const PORT = 4000;
// middleware -> converting the body
app.use(express.json());

app.get("/user", async function (request, response) {
  const userData = await User.findAll();
  response.send(userData);
});
app.get("/user/:id", async function (request, response) {
  const { id } = request.params;
  const userData = await User.findOne({
    where: {
      id: id,
    },
  });
  const not_Found = { msg: "ID Not Found" };
  console.log(not_Found);

  userData ? response.send(userData) : response.status(404).send(not_Found);
});

app.post("/user", async function (request, response) {
  console.log(request.body);

  const { firstName, lastName } = request.body;
  const userDataPost = await User.create({ firstName, lastName });
  const not_Found = { msg: "Not Inserted" };
  userDataPost
    ? response.send(userDataPost)
    : response.status(404).send(not_Found);
});

app.put("/user/:id", async function (request, response) {
  console.log(request.body);
  const { id } = request.params;

  const { firstName, lastName } = request.body;
  const userDataUpdate = await User.update(
    { firstName, lastName },
    {
      where: {
        id: id,
      },
    }
  );
  const not_Found = { msg: "Not Updated" };
  userDataUpdate
    ? response.send(userDataUpdate)
    : response.status(404).send(not_Found);
});

app.delete("/user/:id", async function (request, response) {
  const { id } = request.params;
  // const { firstName, lastName } = request.body;
  const userDataDelete = await User.destroy({
    where: {
      id: id,
    },
  });

  console.log(dataDelete);
  console.log(userDataDelete);
  const not_Found = { msg: "Not found" };
  userDataDelete
    ? response.send(dataDelete)
    : response.status(404).send(not_Found);
});

app.get("/moviesDetail", function (request, response) {
  console.log(request.query);
  const not_Found = { msg: "Movie Not Found" };
  const name = request.query.name;

  if (name) {
    const movieId = data.find((x) => x.name == request.query.name);
    movieId ? response.send(movieId) : response.status(404).send(not_Found);
  } else {
    response.send(data);
  }
});
app.get("/moviesDetail/:id", function (request, response) {
  console.log(request.params.id);

  const not_Found = { msg: "Movie Not Found" };
  console.log(not_Found);

  const movieId = data.find((x) => x.id === request.params.id);

  movieId ? response.send(movieId) : response.status(404).send(not_Found);
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

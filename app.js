var movies = [
  {
    watched: true,
    name: "The Irishman",
    year: 2019,
    country: "USA",
    annotation: "HIS STORY CHANGED HISTORY",
    actors: ["Robert De Niro", "Al Pacino", "Joe Pesci"],
  },
  {
    watched: true,
    name: "Uncut Gems",
    year: 2017,
    country: "USA",
    annotation: "THIS IS HOW I WIN.",
    actors: ["Adam Sandler", "Julia Fox"],
  },
  {
    watched: false,
    name: "Blade Runner 2049",
    year: 2017,
    country: "USA",
    annotation: "THE KEY TO THE FUTURE IS FINALLY UNEARTHED.",
    actors: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"],
  },
];

function displayMovies() {
  let tableContents = "";
  movies.forEach((movie) => {
    var isWatched = '<td><input type="checkbox" name="checkbox" ></td>';
    if (movie.watched) {
      isWatched = '<td><input type="checkbox" name="checkbox"   checked></td>';
    }

    tableContents += `<tr>
  
    ${isWatched} 
    <td>${movie.name}</td>
    <td>${movie.year}</td>
    <td>${movie.country}</td>
    <td>${movie.annotation}</td>
    <td>${movie.actors}</td>
    
    </tr>`;
  });

  document.getElementById("moviesTableBody").innerHTML = tableContents;
  var bla = document.getElementsByName("checkbox");
  bla.forEach((element) => {
    if (element.checked) {
      element.closest("tr").style.backgroundColor = "#D1E7DD";
    } else {
      element.closest("tr").style.backgroundColor = "#F8D7DA";
    }

    element.addEventListener("change", function () {
      if (this.checked) {
        element.closest("tr").style.backgroundColor = "#D1E7DD";
      } else {
        element.closest("tr").style.backgroundColor = "#F8D7DA";
      }
    });
  });
}

function getUserInput() {
  let form_watched;
  if (document.getElementById("form_watched").value === "true") {
    form_watched = true;
  } else {
    form_watched = false;
  }
  let form_name = document.getElementById("form_name").value;
  let form_year = document.getElementById("form_year").value;
  let form_country = document.getElementById("form_country").value;
  let form_annotation = document.getElementById("form_annotation").value;
  let form_actors = document.getElementById("form_actors").value.split(",");

  return {
    watched: form_watched,
    name: form_name,
    year: form_year,
    country: form_country,
    annotation: form_annotation,
    actors: form_actors,
  };
}

function validate(movie) {
  valid = true;
  // Ovo sam uradio ovako da bih sprijecio unosenje praznih stringova kao ime a ne samo "" stringove
  if (/^\s+$/.test(movie.name)) {
    alert("Please put in a valid name");
    return false;
  }

  if (movie.year > "2021" || movie.year < "1930") {
    alert("Please set the year beetween 2021 and 1930");
    return false;
  }

  let test = false;
  movie.actors.forEach((element) => {
    if (/^\s+$/.test(element)) {
      alert("Please input valid actor names");
      test = true;
    }
  });
  if (test) {
    valid = false;
  }
  return valid;
}

function addNewMovie() {
  let newMovie = getUserInput();

  if (validate(newMovie)) {
    movies.push(newMovie);
  }
  document.getElementById("movie_form").reset();
  displayMovies();
}
displayMovies();
// document
//   .getElementById("submit")
//   .addEventListener("click", () => addNewMovie());

function clearForm() {}

document.getElementById("movie_form").addEventListener("submit", (e) => {
  e.preventDefault();
  addNewMovie();
});

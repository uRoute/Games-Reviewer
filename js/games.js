import { Display } from "./UI.js";
export class Games {


  constructor() {

    this.getGames();
    let links = Array.from(document.getElementsByClassName("nav-link"));
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", () => {
        if (links[i].innerHTML == "ALL") {
          this.getGames();
        } else {
          this.getByCategory(links[i].innerHTML);
        }
      });
    }
    
  }

  async getGames() {
    const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "034e7187cfmsh52510c6b943c593p1c8140jsn082ad1755dab",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log();

      let display = new Display(result.splice(0, 104));
    } catch (error) {
      console.error(error);
    }
  }

  async getByCategory(category) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "034e7187cfmsh52510c6b943c593p1c8140jsn082ad1755dab",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      let display = new Display(result.splice(0, 30));

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}

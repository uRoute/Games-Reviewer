export class Details {
  constructor() {
    // this.getGames();
    let cards = Array.from(document.getElementsByClassName("game-card"));
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", () => {
        document.body.classList.add('overflow-hidden')
        document.getElementById("details").classList.add("d-flex");

        this.getDetails(cards[i].attributes.getNamedItem("data-id").value);
      });
    }
  }

  async getDetails(id) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
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
      console.log(result);
      this.diplay(result);
    } catch (error) {
      console.error(error);
    }
  }

  diplay(arr) {
    let box = ``;
    box += `
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 p-2">
                    <div class="game-image">
                        <img class="w-100" src="${arr.thumbnail}" alt="">
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 p-2">
                    <div class="game-details">
                    <div id="closeMark" class="close-mark text-center fs-3">
                <i class="fa-solid fa-xmark fa-fade"></i>
            </div>
                        <h5>Title: <span>${arr.title}</span></h5>
                        <h5>Category: <span>${arr.genre}</span></h5>
                        <h5>Platform: <span>${arr.platform}</span></h5>
                        <h5>Status: <span>${arr.status}</span></h5>
                        <p>${arr.description.slice(0,800)}</p>
                        <button class="btn btn-outline-warning"><a href="${arr.game_url}" target="_blank">Show Game</a></button>
                    </div>
                </div>
            `;
    document.getElementById("ditalsDisplay").innerHTML = box;
    document.getElementById("closeMark").addEventListener("click", () => {
        document.body.classList.remove('overflow-hidden')
        
      if (document.getElementById("details").classList) {
        document.getElementById("details").classList.remove("d-flex");
      } else {
        document.getElementById("details").classList.add("d-flex");
      }
    });
  }
}

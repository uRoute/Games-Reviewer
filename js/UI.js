import { Details } from './details.js'
export class Display {
  diplay(arr) {
    let box = ``;
    for (let i = 0; i < arr.length; i++) {
      box += `
            <div class="col-12 col-sm-12 col-md-4 col-lg-3 p-2">
                    <div data-id=`+arr[i].id+` class="game-card">
                        <div class="game-img my-2">
                            <img src="${arr[i].thumbnail}" class="w-100" alt="">
                        </div>
                        <div class="game-text">
                            <p class="text-white">Title: <span class="info">${arr[i].title}</span> </p>
                            <p class="text-white">Category: <span class="info">${arr[i].genre}</span> </p>
                            <p class="text-white">Platform: <span class="info">${arr[i].platform}</span> </p>
                            <p class="text-white">Authoer: <span class="info">${arr[i].developer}</span> </p>
                        </div>
                    </div>
                   
                </div>
            `;
    }
    document.getElementById("displayRow").innerHTML = box;
  }
  constructor(api) {
    this.diplay(api);
    let details = new Details()
  }
}

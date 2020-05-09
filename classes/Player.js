/*
 Player ( un simplu div ), 
 iar daca apasam arrow down, sa il miscam in jos
 */
class Player {
  constructor() {
    this.div = Player.display();
    this.move();
    this.hitWalls();
  }


  move() {
    console.log('miscare', this)
    document.addEventListener('keyup', (event) => {

      if (event.keyCode === 40) { 
        const oldTop = parseInt(this.div.style.top);
        this.div.style.top = `${oldTop + 20}px`;
        console.log(this.div.style.top);
        // if(this.div.style.top === `388px`){
        //   console.log("ba!");
        //   event.keyCode === 0;
        // }
        this.hitWalls();
      } else if (event.keyCode === 39) {
        const oldLeft = parseInt(this.div.style.left);
        this.div.style.left = `${oldLeft + 20}px`;
        console.log(this.div.style.left);
      } else if (event.keyCode === 37) {
        const oldRight = parseInt(this.div.style.left)
        this.div.style.left = `${oldRight - 20}px`
        console.log(this.div.style.left);
      } else if (event.keyCode === 38) {
        const oldDown = parseInt(this.div.style.top);
        this.div.style.top = `${oldDown - 20}px`
        console.log(this.div.style.top);
      }

    })
  }

  // afisarea div-ului
  static display() {
    const gameContainer = document.querySelector('#gameContainer')
    console.log(gameContainer.style);
    const div = document.createElement('div');
    const { style } = div;
    style.width = "20px";
    style.height = "20px";
    style.backgroundColor = "red";
    style.position = "absolute";
    style.top = "20px"
    style.left = "20px"

    gameContainer.appendChild(div);



    return div;

  }

  hitWalls(){
    if(parseInt(this.div.style.top) === gameContainer.offsetWidth - 20){
        console.log(parseInt(this.div.style.top));
        console.log('ai trecut limita')
    }
    console.log(document.querySelector('#gameContainer').offsetWidth);
  }

}

const player1 = new Player();
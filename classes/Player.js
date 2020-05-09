/*
 Player ( un simplu div ), 
 iar daca apasam arrow down, sa il miscam in jos
 */
class Player {
  constructor() {
    this.div = Player.display();
    this.move();
    this.hitWall();
  }


  move() {
    console.log('miscare', this)
    document.addEventListener('keyup', (event) => {

      if (event.keyCode === 40) {
        const oldTop = parseInt(this.div.style.top);
        this.div.style.top = `${oldTop + 20}px`

      } else if (event.keyCode === 39) {
        const oldLeft = parseInt(this.div.style.left);
        this.div.style.left = `${oldLeft + 20}px`;

      } else if (event.keyCode === 37) {
        const oldRight = parseInt(this.div.style.left)
        this.div.style.left = `${oldRight - 20}px`

      } else if (event.keyCode === 38) {
        const oldDown = parseInt(this.div.style.top);
        this.div.style.top = `${oldDown - 20}px`

      }
      this.hitWall();

    })
  }

  // afisarea div-ului
  static display() {
    const gameContainer = document.querySelector('#gameContainer')
    console.log(gameContainer.style);
    let div = document.createElement('div');
    let { style } = div;
    style.width = "20px";
    style.height = "20px";
    style.backgroundColor = "red";
    style.position = "absolute";
    style.top = "20px"
    style.left = "20px"

    gameContainer.appendChild(div);

    return div;

  }

  hitWall() {
    if (parseInt(this.div.style.top) === gameContainer.offsetHeight) {
      console.log('ai trecut limita de jos')
      alert("STOP !")
      parseInt(this.div.style.top) === gameContainer.offsetHeight;

    } else if (parseInt(this.div.style.top) === -20) {
      console.log('ai trecut limita de sus')
      alert("STOP !")
    } else if (parseInt(this.div.style.left) === -20) {
      console.log('ai trecut limita din stanga')
      alert("STOP !")
    } else if (parseInt(this.div.style.left) === gameContainer.offsetWidth) {
      console.log('ai trecut limita din dreapta')
      alert("STOP !")
    }
  }

}

const player1 = new Player();
player1.hitWall();
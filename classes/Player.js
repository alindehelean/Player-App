/*
 Player ( un simplu div ), 
 iar daca apasam arrow down, sa il miscam in jos
 */
class Player {
  constructor() {
    this.div = Player.display();
    this.move();
  }


  move() {
    console.log('miscare', this)
    document.addEventListener('keyup',(event) => {

      if (event.keyCode === 40) {
        const oldTop = parseInt(this.div.style.top);
        this.div.style.top = `${oldTop + 20}px`;
        console.log(this.div.style.top);
        this.hitButtomWall();

      } else if (event.keyCode === 39) {
        const oldLeft = parseInt(this.div.style.left);
        this.div.style.left = `${oldLeft + 20}px`;
        // console.log(this.div.style.left);
        this.hitRightWall();
      } else if (event.keyCode === 37) {
        const oldRight = parseInt(this.div.style.left)
        this.div.style.left = `${oldRight - 20}px`
        //console.log(this.div.style.left);
        this.hitLeftWall();
      } else if (event.keyCode === 38) {
        const oldDown = parseInt(this.div.style.top);
        this.div.style.top = `${oldDown - 20}px`
        //console.log(this.div.style.top);
        this.hitTopWall();
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

  hitButtomWall() {
    if (parseInt(this.div.style.top) === gameContainer.offsetHeight ) {
      console.log('ai trecut limita de jos')
      alert("STOP !")
    }
  }

  hitTopWall() {
    if (parseInt(this.div.style.top) === -20) {
      console.log('ai trecut limita de sus')
      alert("STOP !")
    }
  }

  hitLeftWall() {
    if (parseInt(this.div.style.left) === -20) {
      console.log('ai trecut limita din stanga')
      alert("STOP !")
    }
  }

  hitRightWall() {
    if (parseInt(this.div.style.left) === gameContainer.offsetWidth) {
      console.log('ai trecut limita din dreapta')
      alert("STOP !")
    }
  }

}

const player1 = new Player();
function setup() {
    createCanvas(500, 400);
  }
  
  let xJogador1 = 0;
  let xJogador2 = 0;
  
  function draw() {
    if (focused == true) {
      background("#E8EBB5");
    } else {
      background("rgb(178,210,238)");
    }
  
    textSize(40);
    text("👨‍🦽", xJogador1, 100);
    text("🏃", xJogador2, 300);
    rect(350, 0, 10, 400);
    if (xJogador1 > 350) {
      text("Jogador 1 atropelou!", 20, 200);
      noLoop();
    }
    if (xJogador2 > 350) {
      text("parabéns 2!", 50, 200);
      noLoop();
    }
  }
  
  function keyReleased() {
    if (key == "w") {
      xJogador1 += random(40);
    }
    if (key == "p") {
      xJogador2 += random(30);
    }
  }
  
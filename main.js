let islive = true;
let next = true;
const st = document.querySelector(".status"); //current status
const cs = document.querySelectorAll(".eachgrid"); //represents all the divisions of cell

var a,b,c;
a=b=c=0;
var k=0;

const click = (e) => {
  const classList = e.target.classList;

  if (!islive || classList[1] === "x" || classList[1] === "o") {
    return;
  }

  if (next == true) {
    classList.add("x");
    currentstats();
  } else {
    classList.add("o");
    currentstats();
  }
};

for (const c of cs) {
  c.addEventListener("click", click);
}

const msg = (letter) => {
  if (k==1){
    cs[a].classList.add('won');
    cs[b].classList.add('won');
    cs[c].classList.add('won');
    }
  islive = false;
  if (letter === "x") {
    st.innerHTML = `🥳WINNER : X🥇`;
  } else {
    st.innerHTML = `🥳WINNER : O🥇`;
  }
};

const currentstats = () => {
  const g1 = cs[0].classList[1];
  const g2 = cs[1].classList[1];
  const g3 = cs[2].classList[1];
  const g4 = cs[3].classList[1];
  const g5 = cs[4].classList[1];
  const g6 = cs[5].classList[1];
  const g7 = cs[6].classList[1];
  const g8 = cs[7].classList[1];
  const g9 = cs[8].classList[1];

  // main tic tac toe conditions for match
  if (g1 && g1 === g2 && g1 === g3) {
    k=1;a=0;b=1;c=2;msg(g1);
  } else if (g4 && g4 === g5 && g4 === g6) {
    k=1;a=3;b=4;c=5;msg(g4);
  } else if (g7 && g7 === g8 && g7 === g9) {
    k=1;a=6;b=7;c=8;msg(g7);
  } else if (g1 && g1 === g4 && g1 === g7) {
    k=1;a=0;b=3;c=6; msg(g1);
  } else if (g2 && g2 === g5 && g2 === g8) {
    k=1;a=1;b=4;c=7;msg(g2);
  } else if (g3 && g3 === g6 && g3 === g9) {
    k=1;a=2;b=5;c=8;msg(g3);
  } else if (g1 && g1 === g5 && g1 === g9) {
    k=1;a=0;b=4;c=8;msg(g1);
  } else if (g3 && g3 === g5 && g3 === g7) {
    k=1;a=2;b=4;c=6;msg(g3);
  } else if (g1 && g2 && g3 && g4 && g5 && g6 && g7 && g8 && g9) {
    islive = false;
    st.innerHTML = "TIE!!! Click Reload Button to Play Again";
  } else {
    next = !next;
    if (next) {
      st.innerHTML = `NEXT TURN: X`;
    } else {
      st.innerHTML = `<span>NEXT TURN: O</span>`;
    }
  }
};

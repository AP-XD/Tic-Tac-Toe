let islive = true;
let next = true;
const st = document.querySelector(".status"); //current status
const cs = document.querySelectorAll(".eachgrid"); //represents all the divisions of cell

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
  islive = false;
  if (letter === "x") {
    st.innerHTML = `WINNER : X`;
  } else {
    st.innerHTML = `<span>WINNER : O</span>`;
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
    msg(g1);
  } else if (g4 && g4 === g5 && g4 === g6) {
    msg(g4);
  } else if (g7 && g7 === g8 && g7 === g9) {
    msg(g7);
  } else if (g1 && g1 === g4 && g1 === g7) {
    msg(g1);
  } else if (g2 && g2 === g5 && g2 === g8) {
    msg(g2);
  } else if (g3 && g3 === g6 && g3 === g9) {
    msg(g3);
  } else if (g1 && g1 === g5 && g1 === g9) {
    msg(g1);
  } else if (g3 && g3 === g5 && g3 === g7) {
    msg(g3);
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

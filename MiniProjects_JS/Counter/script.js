//------------------------------------------------------ Counter ---------------------------------------------
function counter() {
  const count = document.querySelector(".count");
  const add = document.querySelector(".add");
  const sub = document.querySelector(".sub");
  const reset = document.querySelector(".reset");

  add.addEventListener("click", () => {
    count.innerHTML++;
    changeColor();
  });
  sub.addEventListener("click", () => {
    count.innerHTML--;
    changeColor();
  });
  reset.addEventListener("click", () => {
    count.innerHTML = 0;
    changeColor();
  });

  function changeColor() {
    if (count.innerHTML > 0) {
      count.style.backgroundColor = "#f84a1f";
    } else if (count.innerHTML < 0) {
      count.style.backgroundColor = "#2828fcf5";
    } else {
      count.style.backgroundColor = "#22da22f1";
    }
  }
}
counter();

// ------------------------------------------------------  Random ---------------------------------------------

function generateNumber() {
  const random = document.querySelector(".random");
  const genrate = document.querySelector(".genrate");

  genrate.addEventListener("click", generateNum);

  function generateNum() {
    const num = Math.floor(Math.random() * 100 + 1);
    random.innerHTML = num;
  }
}
generateNumber();

// --------------------------------------------------- Generate Hex ---------------------------------------------
function GenerateHex() {
  const changeBtn = document.querySelector(".hexcolor");
  const hex = document.querySelector(".hex");

  function changeHex() {
    const rand = Math.random().toString(16).substring(2, 8);
    changeBtn.style.backgroundColor = `#${rand}`;
    hex.innerHTML = `#${rand}`;
    hex.style.color = `#${rand}`;
  }

  changeBtn.addEventListener("click", changeHex);
}

GenerateHex();

// -------------------------------------------------- Check Vowel --------------------------------------------------

function CheckVowelTxt() {
  const vowelbtn = document.querySelector(".vowelbtn");
  let input = document.querySelector(".input-form");
  const para = document.querySelector(".para");

  vowelbtn.addEventListener("click", checkVowel);

  function checkVowel() {
    let count = 0;
    let word = input.value.toLowerCase();

    for (let i = 0; i < word.length; i++) {
      let alphabet = word[i];
      if (
        alphabet == "a" ||
        alphabet == "e" ||
        alphabet == "i" ||
        alphabet == "o" ||
        alphabet == "u"
      ) {
        count++;
      }
    }
    para.innerHTML = `${word.toUpperCase()} has ${count} vowels`;
  }
}

CheckVowelTxt();

// -------------------------------------------- Filter text -----------------------------------------------------

function searchFilter() {
  const inputfilter = document.querySelector(".input-filter");
  const listview = document.querySelectorAll(".list li");

  inputfilter.addEventListener("keyup", searchList);

  function searchList() {
    const inputfilterValue = inputfilter.value;
    for (let i = 0; i < listview.length; i++) {
      if (listview[i].innerHTML.toLowerCase().includes(inputfilterValue)) {
        listview[i].style.display = "";
      } else {
        listview[i].style.display = "none";
      }
    }
  }
}
searchFilter();

// -------------------------------------------- BMI Calc ---------------------------------------------------------
function calculateBmiTotal() {
  const bmiHeight = document.querySelector("#bmi-height");
  const bmiWeight = document.querySelector("#bmi-weight");
  const bmiCalc = document.querySelector(".button-bmi");
  const bmiReset = document.querySelector(".button-reset");
  const resultBmi = document.querySelector(".p-bmi");

  bmiCalc.addEventListener("click", calculateBmi);
  bmiReset.addEventListener("click", () => {
    bmiHeight.value = "";
    bmiWeight.value = "";
    resultBmi.innerHTML = "";
  });
  function calculateBmi() {
    let height = bmiHeight.value;
    let weight = bmiWeight.value;
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    resultBmi.innerHTML = `Your BMI is ${bmi}`;
    if (bmi < 18.5) {
      resultBmi.innerHTML += "<br><span>Underweight</span>";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      resultBmi.innerHTML += "<br><span>Normal weight</span>";
    } else if (bmi >= 25 && bmi <= 29.9) {
      resultBmi.innerHTML += "<br><span>Overweight</span>";
    } else {
      resultBmi.innerHTML += "<br><span>Obesity</span>";
    }
  }
}
calculateBmiTotal();

// ------------------------------------------------ Counter -------------------------------------------------------
function counterTime() {
  const counternum = document.querySelectorAll(".counter");

  counternum.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;

      const increment = target / 200;

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}
counterTime();

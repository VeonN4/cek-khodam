const khodamResult = document.querySelector(".khodam-result");
const checkButton = document.getElementById("check-khodam");

function khodamChecker() {
  const listKhodamA = ["Monyet", "Semangka", "Tiang", "Speaker", "Lampu", "Sang", "Kucing", "Harimau"]
  const listKhodamB = ["Afrika", "Garut", "Tumbler", "Mouse", "Air", "Tanah", "Api"]

  let result = listKhodamA[Math.floor(Math.random() * listKhodamA.length)] + " " + listKhodamB[Math.floor(Math.random() * listKhodamB.length)]

  showKhodam(result)
}


function showKhodam(text) {
  khodamResult.innerText = text
}

checkButton.addEventListener("click", khodamChecker)
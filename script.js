let balance = 0

let depositBox = document.getElementById("deposit").value
let withdrawBox = document.getElementById("withdraw").value
let balanceAdjust = document.getElementById("balance").value

function deposit() {
  depositBox = document.getElementById("deposit").value
  balance = balance + parseInt(depositBox)
  balanceAdjust = "Balance: " + balance
  document.getElementById("balance").innerText = balanceAdjust
}

function withdraw() {
  withdrawBox = document.getElementById("withdraw").value
  balance = balance - parseInt(withdrawBox)
  balanceAdjust = "Balance: " + balance
  document.getElementById("balance").innerText = balanceAdjust
}
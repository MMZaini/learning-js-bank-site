let balance = 0
let overDraft = -5000


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
  if (balance - withdrawBox > overDraft) {
    balance = balance - parseFloat(withdrawBox)
    balanceAdjust = "Balance: " + balance.toFixed(1)
    document.getElementById("balance").innerText = balanceAdjust
  } else {
    window.alert("You have gone over your overdraft limit!")
  }
}
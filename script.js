let balance = 0
let overDraft = -1000

document.getElementById("odLimit").innerHTML = "<input id='changeOd' value='-1000' type='text' class='form-control' placeholder='-1000'>"

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
  overDraft = document.getElementById("changeOd").value
  if (balance - withdrawBox > overDraft - 1) {
    balance = balance - parseFloat(withdrawBox)
    balanceAdjust = "Balance: " + balance.toFixed(1)
    document.getElementById("balance").innerText = balanceAdjust
  } else {
    window.alert("You have gone over your overdraft limit!")
  }
}

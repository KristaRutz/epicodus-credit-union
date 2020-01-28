function Account(name, initialDeposit){
  this.name = name;
  this.initialDeposit = initialDeposit;
  this.transactions = [],
  this.currentBalance = this.initialDeposit,
  this.currentId = 0
}

Account.prototype.addTransaction =function(transaction){
  transaction.id = this.assignId();
  this.transactions.push(transaction);
  if (transaction.type === "deposit"){
    this.currentBalance += transaction.amount;
  } else{
    this.currentBalance -= transaction.amount;
  }
}


function Transaction (amount, type){
  this.amount = amount,
  this.type = type
}

$(document).ready(function() {

  $("#createNewAccountForm").submit(function(event) {
    event.preventDefault();
    $("#type").text($("input:radio[name=type]:checked").val());
    $(".newAccounts").hide();
    $(".transactions").show();
    $(".balance").show();
  })
})
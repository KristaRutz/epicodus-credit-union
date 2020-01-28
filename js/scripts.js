function Account(name, initialDeposit){
  this.name = name;
  this.initialDeposit = initialDeposit;
  this.transactions = [],
  this.currentBalance = this.initialDeposit,
  this.currentId = 0
}

Account.prototype.addTransaction = function(transaction){
  transaction.id = this.assignId();
  this.transactions.push(transaction);
  if (transaction.type === "deposit"){
    this.currentBalance += transaction.amount;
  } else if (transaction.type === "withdrawal" && transaction.amount > this.currentBalance) {
    displayError();
    return false;
  } else {
      this.currentBalance -= transaction.amount;
  }
}

Account.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Transaction (amount, type){
  this.amount = amount,
  this.type = type
}

// USER INTERFACE LOGIC ----------------------------------

var account = new Account();

function displayCurrentBalance(account){
  currentBalance = account.currentBalance;
  $("#balance-output").html("$" + currentBalance)
};

function displayError(){
  $(".balance-output").text("Your balance is too low to complete this transaction")
}

// function compareToBalance(withdrawal){
//   if (transactionType === "withdrawal") {
//     if(compareToBalance(transaction)){
//       account.addTransaction(transaction)
//     }
//   } else {
//     account.addTransaction(transaction)
//   }

//   if (withdrawal.amount > account.currentBalance){
//     $(".balance-output").text("Your balance is too low to complete this transaction")
//     return false;
//   } else {
//     return true;
//   }
// }

$(document).ready(function() {

  $("#createNewAccountForm").submit(function(event) {
    event.preventDefault();
    
    // $(".newAccounts").hide();
    $(".transactions").show();
    $(".balance").show();

    var inputtedAccountName = $("#new-account").val();
    var inputtedInitialDeposit = parseInt($("#new-initial-deposit").val());

    account = new Account(inputtedAccountName, inputtedInitialDeposit);
    displayCurrentBalance(account);
  });
  
  $("#transactionForm").submit(function(event) {
    event.preventDefault();
    $(".balance-output").text("");
    var transactionType = $("input:radio[name=type]:checked").val();
    var inputtedAmount = parseInt($("#new-transaction-amount").val());

    var transaction = new Transaction(inputtedAmount, transactionType);

    account.addTransaction(transaction);
    displayCurrentBalance(account);
  });
});
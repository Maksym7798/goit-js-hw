const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {

  balance: 0,

  transactions: [],

  id: 0,

  createTransaction(amount, type) {
    this.amount = amount;
    this.type = type;
    this.id++;

    if(this.type == 'deposit'){
      this.balance += this.amount;
    }

    if(this.type == 'withdraw'){

      if(this.balance > this.amount + 1){
        this.balance -= this.amount
      } else {
        console.log('error');
      }

    }
    this.transactions.push({id: this.id, amount: this.amount, type: this.type, })
  },

  deposit(amount) {
    this.createTransaction(amount, 'deposit')
  },

  withdraw(amount) {
    this.createTransaction(amount, 'withdraw');
  },

  getBalance() {
    console.log(this.balance);
  },

  getTransactionDetails(id) {
    if(this.transactions.length >= id){
      console.log(this.transactions[id - 1])
    } else {
      console.log('warn');
    }
  },

  getTransactionTotal(type) {
    console.log(this.transactions
      .filter(el => el.type == type)
      .reduce( (acc, el) => acc += el.amount, 0));
  },
};

account.deposit(1000);
account.withdraw(100);
account.deposit(400);
account.withdraw(600);
account.getBalance();
account.getTransactionDetails(2);
account.getTransactionDetails(4);
account.getTransactionTotal('deposit');
account.getTransactionTotal('withdraw');
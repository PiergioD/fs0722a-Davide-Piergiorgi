class SonAccount {
  balanceInit: number;
  movements: number[];
  constructor(balanceInit: number = 0, movements: number[] = []) {
    this.balanceInit = balanceInit;
    this.movements = movements;
  }

  oneDeposit(val: number) {
    this.movements.push(val);
    console.log(
      `Hai depositato ${val}$, il tuo saldo attuale è ${(this.balanceInit +=
        val)}$`
    );
  }

  oneWithdraw(val: number) {
    this.movements.push(val * -1);
    console.log(
      `Hai prelevato ${val}$, il tuo saldo attuale è ${(this.balanceInit -=
        val)}$`
    );
  }
}

class MotherAccount extends SonAccount {
  balanceInit: number;
  interestRate: number;
  movements: number[];
  constructor(
    balanceInit: number = 0,
    interestRate: number = 10,
    movements: number[] = []
  ) {
    super(balanceInit, movements);
    this.interestRate = interestRate;
  }
  interest() {
    console.log(
      `Hai un tasso di interesse del ${this.interestRate}% che è ${
        (this.interestRate * this.balanceInit) / 100
      }$ sul conto di ${this.balanceInit}$`
    );
  }
}

let mother = new MotherAccount();
let son = new SonAccount();
son.oneDeposit(3000);
son.oneWithdraw(200);

mother.oneDeposit(4500);
mother.oneDeposit(2000);
mother.oneWithdraw(1200);
console.log(mother.movements);
console.log(son.movements);
mother.interest();

export {};

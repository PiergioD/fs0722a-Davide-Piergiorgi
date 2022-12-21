var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var SonAccount = /** @class */ (function () {
  function SonAccount(balanceInit, movements) {
    if (balanceInit === void 0) {
      balanceInit = 0;
    }
    if (movements === void 0) {
      movements = [];
    }
    this.balanceInit = balanceInit;
    this.movements = movements;
  }
  SonAccount.prototype.oneDeposit = function (val) {
    this.movements.push(val);
    console.log(
      "Hai depositato "
        .concat(val, "$, il tuo saldo attuale \u00E8 ")
        .concat((this.balanceInit += val), "$")
    );
  };
  SonAccount.prototype.oneWithdraw = function (val) {
    this.movements.push(val * -1);
    console.log(
      "Hai prelevato "
        .concat(val, "$, il tuo saldo attuale \u00E8 ")
        .concat((this.balanceInit -= val), "$")
    );
  };
  return SonAccount;
})();
var MotherAccount = /** @class */ (function (_super) {
  __extends(MotherAccount, _super);
  function MotherAccount(balanceInit, interestRate, movements) {
    if (balanceInit === void 0) {
      balanceInit = 0;
    }
    if (interestRate === void 0) {
      interestRate = 10;
    }
    if (movements === void 0) {
      movements = [];
    }
    var _this = _super.call(this, balanceInit, movements) || this;
    _this.interestRate = interestRate;
    return _this;
  }
  MotherAccount.prototype.interest = function () {
    console.log(
      "Hai un tasso di interesse del "
        .concat(this.interestRate, "% che \u00E8 ")
        .concat((this.interestRate * this.balanceInit) / 100, "$ sul conto di ")
        .concat(this.balanceInit, "$")
    );
  };
  return MotherAccount;
})(SonAccount);
var mother = new MotherAccount();
var son = new SonAccount();
son.oneDeposit(3000);
son.oneWithdraw(200);
mother.oneDeposit(4500);
mother.oneDeposit(2000);
mother.oneWithdraw(1200);
console.log(mother.movements);
console.log(son.movements);
mother.interest();

// PER AGGANCIARE ELEMENTI HTML CON TS USA AS HTMLBUTTONELEMENT( AL POSTO DI BUTTON USARE DIV,PARAGRAPH ECC ECC)

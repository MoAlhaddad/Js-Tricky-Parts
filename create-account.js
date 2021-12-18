function createAccount2(pin, amount = 0) {
  return {
    checkBalance(inputPin) {
      if (inputPin !== pin) return "Invalid Pin!";
      return `$${amount}`;
    },
    deposit(inputPin, newAmount) {
      if (inputPin !== pin) return "Invalid Pin!";
      amount += newAmount;
      return `Successfully deposited $${newAmount}  currentBalance: $${amount}.`;
    },
    withdraw(inputPin, withdrawAmount) {
      if (inputPin !== pin) return "Invalid Pin!";
      if (withdrawAmount > amount) return "INSUFFICEINT BALANCE";

      amount -= withDrawalAmount;
      return `Successfully withdrawed $${withDrawalAmount} currentBalance: $${amount}`;
    },
    changePin(oldPin, newPin) {
      if (oldPin !== newPin) return "Invalid Pin";
      pin = newPin;
      return "Logged in";
    },
  };
}

module.exports = { createAccount2 };

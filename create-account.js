function createAccount(pinput, amount = 0) {
    let balance = amount;
    let pin = pinput.toString();
    function validPin(pinIn) {
        return pinIn.toString() === pin ? true : false;
    }
    return {
        checkBalance: function(pin) {
            return validPin(pin) ? `$${balance}` : "Invalid PIN.";
        },
        deposit: function(pin, amt) {
            if (validPin(pin)) {
                balance += amt;
                return `Succesfully deposited $${amt}. Current balance: $${balance}.`;
            } else return "Invalid PIN.";
        },
        withdraw: function(pin, amt) {
            if (validPin(pin)) {
                if (amt > balance) {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled."
                } else {
                    balance -= amt;
                    return `Succesfully withdrew $${amt}. Current balance: $${balance}.`;
                }
            } else return "Invalid PIN.";
        },
        changePin: function(oldPin, newPin) {
            if (validPin(oldPin)) {
                pin = newPin;
                return "PIN successfully changed!";
            } else return "Invalid PIN.";
        }
    }
}

module.exports = { createAccount };

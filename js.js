let customer = {
    name: "Bayram",
    surname: "Behbudov",
    credit_limit: 1000,
    balance: 100,
    ide: "Askj51B",
    precentOfMinPay: "10%",
    borc: 0,

    fullName: function () {
        return `${this.name} ${this.surname}`
    }
}

function updateCustomerInfo() {
    document.getElementById("customerName").textContent = customer.fullName();
    document.getElementById("creditLimit").textContent = customer.credit_limit;
    document.getElementById("borc").textContent = customer.borc;
    document.getElementById("balance").textContent = customer.balance;
}


document.getElementById("credit").onclick = function () {
    borcMeblegi = +prompt("Əldə etmək istədiyiniz məbləği daxil edin")
    if (borcMeblegi < 1000) {
        if (customer.borc < 1000) {
            customer.credit_limit -= borcMeblegi;
            customer.borc += borcMeblegi;
            customer.balance += borcMeblegi;
            document.getElementById("return").textContent = borcMeblegi + " AZN kredit alındı";
            
        } else {
            document.getElementById("return").textContent = "Sizin " + customer.borc + " AZN borcunuz var. Yeni kredit almaq üçün öncə borcunuzu ödəyin!";
        }
    } else {
        document.getElementById("return").textContent = "Sizin kredit limitiniz " + customer.credit_limit + " AZN-dir!";
    }
    updateCustomerInfo()
};

document.getElementById("payment").onclick = function () {
    cash = +prompt("Mədaxil etmək istədiyiniz məbləği daxil edin")
    if (customer.credit_limit < 1000) {
        if (customer.credit_limit + cash > 1000) {
            customer.balance-=cash
            customer.balance += ((customer.credit_limit + cash) - 1000)
            customer.credit_limit = 1000
            customer.borc = 0
            document.getElementById("return").textContent = cash + " AZN ödənildi ";
        } else {
            customer.credit_limit += cash
            customer.borc -= cash
            customer.balance-=cash

        }
    } else {
        customer.balance += cash
    }
    updateCustomerInfo();
};

document.getElementById("about").onclick = function () {
    updateCustomerInfo();    
    document.getElementById("return").textContent = "Məlumat dərc edildi";
};


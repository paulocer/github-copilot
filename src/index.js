function validateCreditCard(cardNumber) {
    // Remove all non-digit characters
    const sanitizedCardNumber = cardNumber.replace(/\D/g, '');

    const cardPatterns = {
        Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        Mastercard: /^5[1-5][0-9]{14}$/,
        "American express": /^3[47][0-9]{13}$/,
        Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        "Diners Club": /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        JCB: /^(?:2131|1800|35\d{3})\d{11}$/,
        Hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
        EnRoute: /^(2014|2149)\d{11}$/,
        Voyager: /^8699[0-9]{11}$/,
        Aura: /^50[0-9]{14,17}$/
    };

    for (let [issuer, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(sanitizedCardNumber)) {
            return { valid: true, bandeira: issuer };
        }
    }

    return { valid: false, bandeira: 'Bandeira Desconhecida' };
}

// Example usage:
const cardInfo = validateCreditCard('2149 9455156 2735');
console.log(cardInfo); // { valid: true, bandeira: 'aura' }
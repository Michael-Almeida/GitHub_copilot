function validateCreditCard(number) {
  if (number.length < 13 || number.length > 19) {
    throw new Error("Invalid credit card number length");
  }

  const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const masterCardRegex = /^5[1-5][0-9]{14}$/;
  const eloRegex = /^(4011[0-9]{12}|4312[0-9]{12}|4389[0-9]{12})$/;
  const amexRegex = /^3[47][0-9]{13}$/;
  const discoverRegex = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
  const jcbRegex = /^(?:2131|1800|35\d{3})\d{11}$/;
  const dinersClubRegex = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
  const unionPayRegex = /^(62[0-9]{14,17})$/;
  const maestroRegex = /^(5[06789]\d{0,2}|6\d{0,2})\d{10,17}$/;
  const hipercardRegex = /^(606282\d{10}(\d{3})?)|(3841\d{15})$/;

  if (visaRegex.test(number)) {
    return "Visa";
  } else if (masterCardRegex.test(number)) {
    return "MasterCard";
  } else if (eloRegex.test(number)) {
    return "Elo";
  } else if (amexRegex.test(number)) {
    return "American Express";
  } else if (discoverRegex.test(number)) {
    return "Discover";
  } else if (jcbRegex.test(number)) {
    return "JCB";
  } else if (dinersClubRegex.test(number)) {
    return "Diners Club";
  } else if (unionPayRegex.test(number)) {
    return "UnionPay";
  } else if (maestroRegex.test(number)) {
    return "Maestro";
  } else if (hipercardRegex.test(number)) {
    return "Hipercard";
  }
  return "Unknown";
}

function validateAndReturnCardFlag(cardNumber) {
  const cardType = validateCreditCard(cardNumber);
  return `The card type is: ${cardType}`;
}

function testCardNumber() {
  const cardNumber = "5581475145616421"
  const cardType = validateCreditCard(cardNumber);
  console.log(`The card type is: ${cardType}`);
}

// Call the function to test
testCardNumber();

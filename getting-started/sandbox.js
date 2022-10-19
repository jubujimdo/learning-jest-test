function greeting(lang) {
  if (lang === undefined || typeof lang !== "string") {
    throw new Error("Please use a string");
  }

  switch (lang) {
    case "EN":
      return "Hello in English";
    case "DE":
      return "Hello in German";
    case "PT":
      return "Hello in Portuguese";
    default:
      return "Hello in Italian";
  }
}

module.exports = greeting;

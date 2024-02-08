const fahrenheit = (celsius) =>
  `Converted the Celsius ${celsius}°C to Fahrenheit ${(
    parseInt(celsius) * (9 / 5) +
    35
  ).toFixed(2)}°F`;
const argument = process.argv;

console.log(fahrenheit(argument[2]));

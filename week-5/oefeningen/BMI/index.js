const length = parseFloat(window.prompt("What is your length? (Use meters)"));
const weight = parseFloat(window.prompt("What is your weight? (In kilograms)"));

function calculateBMI(weight, length) {
  const bmi = Math.floor(weight / (length * length));
  return bmi;
}

function bmiToString(bmi) {
  if (bmi <= 18.5) {
    return `Jouw bmi is ${bmi}. Je hebt ondergewicht.`;
  } else if (bmi > 18.5 && bmi < 25) {
    return `Jouw bmi is ${bmi}. Je bent het aanbevolen gewicht.`;
  } else if (bmi >= 25 && bmi <= 30) {
    return `Jouw bmi is ${bmi}. Je hebt overwicht.`;
  } else if (bmi > 30) {
    return `Jouw bmi is ${bmi}. Je bent obesitas.`;
  } else {
    return `Je hebt geen geldige gegevens ingegeven`;
  }
}

const bmi = calculateBMI(weight, length);
const output = window.alert(bmiToString(bmi));

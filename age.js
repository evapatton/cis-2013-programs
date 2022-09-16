var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
floatAge = parseFloat(prompt("What is your age?"));
floatDays = parseFloat(floatAge * 365.25);
floatMonths = parseFloat(floatAge * 12);
intWeeks = parseInt(floatDays/7);
intFortnights = parseInt(floatDays/14);
alert("Your age in years " + floatAge + ".\n" + "Your age in days " + floatDays + ".\n Your age in weeks " +intWeeks + ".\n Your age in months " + floatMonths + ".\nYour age in Fortnights " + intFortnights);
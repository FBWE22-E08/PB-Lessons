const euroCities = ["Paris", "London", "Rome", "Prague", "Valletta"];

const asianCities = ["Hong Kong", "Taiwan", "Seoul", "Osaka", "Manila"];

const worldCities = euroCities.concat(asianCities);

console.log("worldCities => ", worldCities);

worldCities.splice(1, 0, "Washington");

console.log("worldCities => ", worldCities);

// output

/**
 [
  'Paris',  Washington,   'London', 
  'Rome',     'Prague',
  'Valletta', 'Hong Kong',
  'Taiwan',   'Seoul',
  'Osaka',    'Manila'
]
 */

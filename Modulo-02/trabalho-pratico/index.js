import {promises as fs} from 'fs'
import path from 'path'

let STATES = []

init();

async function init() {
  const CITIES_FILE = await readFileCities();
  const STATES_FILE = await readFileStates();
  await createStatesFiles(STATES_FILE, CITIES_FILE);

  await createStatesObject();

  console.log(`\nEstados com mais cidades:`);
  totalCitiesInStates(`max`);

  console.log(`\nEstados com menos cidades:`);
  totalCitiesInStates();

  console.log(`\nCidade com os menores nomes por estado:`);
  cityLengthByState();
  
  console.log(`\nCidade com os maiores nomes por estado:`);
  cityLengthByState(`min`);

  console.log(
    `\nCidade com o maior nome:`,
    largeNameCity(STATES_FILE, CITIES_FILE)
  );
  console.log(
    `\nCidade com o menor nome:`,
    tinyNameCity(STATES_FILE, CITIES_FILE)
  );
}

function largeNameCity(states, cities) {
  const orderedCities = cities
    .map((city) => ({
      ...city,
      nameLength: city.Nome.length,
    }))
    .sort(orderCities)
    .reverse();

  const state = states.find((state) => state.ID === orderedCities[0].Estado);
  return `${orderedCities[0].Nome} - ${state.Sigla}`;
}

function tinyNameCity(states, cities) {
  const orderedCities = cities
    .map((city) => ({
      ...city,
      nameLength: city.Nome.length,
    }))
    .sort(orderCities);
  const state = states.find((state) => state.ID === orderedCities[0].Estado);
  return `${orderedCities[0].Nome} - ${state.Sigla}`;
}

async function createStatesObject() {
  const statesFiles = await fs.readdir(path.resolve(`data`, `states`));
  for (const state of statesFiles) {
    const cities = await JSON.parse(
      await fs.readFile(path.resolve(`data`, `states`, `${state}`))
    ).map((city) => ({
      ...city,
      nameLength: city.Nome.length,
    }));

    const sortedCities = cities.sort(orderCities);

    STATES.push({
      uf: state.split(`.`)[0],
      cities: sortedCities,
      totalCities: cities.length,
    });
  }
}

function orderCities(a, b) {
  if (a.nameLength === b.nameLength) {
    return a.Nome - b.Nome;
  }
  return a.nameLength - b.nameLength;
}

function totalCitiesInStates(type) {
  let cities = null;
  STATES.sort((a, b) => a.totalCities - b.totalCities);
  if (type === `max`) {
    cities = STATES.slice(-5);
  } else {
    cities = STATES.slice(0, 5);
  }
  cities.reverse();
  for (let i = 0; i < 5; i++) {
    console.log(`${cities[i].uf} - ${cities[i].totalCities}`);
  }
}

function cityLengthByState(type) {
  for (const state of STATES) {
    const city = state.cities;

    if (type === `min`) {
      city.reverse();
    }

    console.log(`${city[0].Nome} - ${state.uf}`);
  }
}

async function citiesByState(state) {
  const cities = JSON.parse(
    await fs.readFile(path.resolve(`data`, `states`, `${state}.json`))
  );

  return cities.length;
}

async function createStatesFiles(states, cities) {
  for (const state of states) {
    const stateCities = cities.filter((city) => city.Estado === state.ID);
    await fs.writeFile(
      path.resolve(`data`, `states`, `${state.Sigla}.json`),
      JSON.stringify(stateCities)
    );
  }
}

async function readFileStates() {
  try {
    return JSON.parse(await fs.readFile(`data/states.json`));
  } catch (err) {
    console.log(err);
  }
}

async function readFileCities() {
  try {
    return JSON.parse(await fs.readFile(`data/cities.json`));
  } catch (err) {
    console.log(err);
  }
}
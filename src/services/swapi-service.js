
export default class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) throw new Error(`Could not fetch ${url}, received ${res.status} `)
    return await res.json();
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person)
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  }

  _extractId = (item) => {
    const idRegExp = /\/(\d+)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    const { name, population, rotation_period: rotationPeriod, diameter } = planet;

    return {
      id: this._extractId(planet),
      name,
      population,
      rotationPeriod,
      diameter,
    }
  }

  _transformStarship = (starship) => {
    const { name, model, manufacturer, cost_in_credits: costInCredits, crew, passengers, cargo_capacity: cargoCapacity } = starship;
    return {
      id: this._extractId(starship),
      name,
      model,
      manufacturer,
      costInCredits,
      length: starship.length,
      crew,
      passengers,
      cargoCapacity,
    }
  }

  _transformPerson = (person) => {
    const { name, gender, birth_year: birthYear, eye_color: eyeColor } = person;
    return {
      id: this._extractId(person),
      name,
      gender,
      birthYear,
      eyeColor,
    }
  }
}
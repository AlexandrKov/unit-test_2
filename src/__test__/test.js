import {heroes, sortHeroes} from "../index"

const sorted = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]

  test("Отсортированные герои", () => {
    const a = sortHeroes(heroes)
    expect(a).toEqual(sorted)
  })
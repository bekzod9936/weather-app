const weeksOfDay = [
  {
    id: 0,
    value: 'Вс',
  },
  {
    id: 1,
    value: 'Пн',
  },
  {
    id: 2,
    value: 'Вт',
  },
  {
    id: 3,
    value: 'Ср',
  },
  {
    id: 4,
    value: 'Чт',
  },
  {
    id: 5,
    value: 'Пт',
  },
  {
    id: 6,
    value: 'Сб',
  },
]

export const getWeeksOfName = (day: number) => weeksOfDay.find((v) => v.id === day)?.value

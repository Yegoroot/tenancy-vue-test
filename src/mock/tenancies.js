export const getTenancies = () => ([
  {
    id: 'tc1001',
    name: 'Петр',
    adress: 'Санкт Петербург',
    dateStart: new Date ('12.12.2020'),
    dateEnd: new Date ('12.12.2021'),
    tenants: [
      '1001',
      '1002'
    ]
  },
  {
    id: 'tc1002',
    name: 'John',
    adress: 'London',
    dateStart: new Date ('12.12.2020'),
    dateEnd: new Date ('12.12.2021'),
    tenants: [
      '1003',
      '1001'
    ]
  },
  {
    id: 'tc1003',
    name: 'Keyn',
    adress: 'New York',
    dateStart: new Date ('12.12.2020'),
    dateEnd: new Date ('12.12.2021'),
    tenants: []
  }
])

export const SERVER_DATA = [
  {
    type: 'select',
    name: 'client',
    ui: { label: 'Client', placeholder: 'Select...' },
    validators: {
      required: true
    },
    source: [
      { value: "BANK", text: 'BANK' },
      { value: "COLLEGE", text: 'College' },
      { value: "SCHOOL", text: 'School' }
    ]
  }
];

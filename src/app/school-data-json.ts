export const SCHOOL_SERVER_DATA = [
    {
     type: 'text',
     name: 'schoolName',
     validators: {
       required: true
     },
     ui: { label: 'School Name', placeholder: 'Enter school name here...' }
   }, {
    type: 'select',
    name: 'listOfBranches',
    ui: { label: 'List of Branches',placeholder: 'Select...' },
    validators: {
      required: true
    },
    source: [
      { value: "Class 1", text: 'Class 1' },
      { value: "Class 2", text: 'Class 2' }
    ]
  }
 ];
 
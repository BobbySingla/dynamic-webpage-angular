export const COLLEGE_SERVER_DATA = [
    {
     type: 'text',
     name: 'collegeName',
     value:"SRM University",
     validators: {
       required: true
     },
     ui: { label: 'College Name', placeholder: 'Enter college name here...' }
   },
   {
    type: 'date',
    name: 'dateOfAffiliation',
    validators: {
      required: true
    },
    ui: { label: 'Date of Affiliation' }
  }
 ];
 
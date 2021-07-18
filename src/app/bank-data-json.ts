export const BANK_SERVER_DATA = [
     {
      type: 'text',
      name: 'bankName',

      validators: {
        required: true
      },
      value:"CANARA Bank",
      ui: { label: 'Bank Name', placeholder: 'Enter bank name here...' }
    },
    {
        type: 'text',
        name: 'headOffice',
        
        validators: {
          required: true
        },
        ui: { label: 'Head Office', placeholder: 'Enter Head Office here...' }
      }
  ];
  
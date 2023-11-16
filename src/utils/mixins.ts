export const disableBrowserAutofillStyles = () => `
  &: -webkit-autofill, 
  &: -webkit-autofill:focus, 
  &: -webkit-autofill:hover, 
  &: -webkit-autofill:active {
    -webkit-text-fill-color: black !important;
    transition-delay: 9999s;
  }
`;

import React, { useCallback } from 'react';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { CodeInput } from './components/Input';

import { useFormik } from 'formik';
import { theme } from './theme';

function App() {
  const {
    setErrors,
    setFieldValue,
    handleSubmit,
    errors,
    values,
    setFormikState,
  } = useFormik({
    initialValues: {
      sms: '',
    },
    onSubmit: ({ sms }) => console.log('onSubmit sms=', sms),
  });

  const handleSubmitSms = useCallback(
    () => setTimeout(() => alert('submit')),
    []
  );

  const handleChangeSmsCode = useCallback(
    (nextValue: string) => {
      setFieldValue('sms', nextValue);
    },
    [setFieldValue]
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Тест OTP кода из смс</h1>
        <form>
          <CodeInput
            onChange={handleChangeSmsCode}
            name="sms"
            value={''}
            label={''}
            inputCount={5}
            webOtpApiEnabled
            focusOnInit
            onComplete={handleSubmitSms}
          />
        </form>
      </div>
    </ThemeProvider>
  );
}

export default App;

import React, { useCallback } from 'react';
import './App.css';
import { CodeInput } from './components/Input';

import { useFormik } from 'formik';

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

  console.log('values', values);

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
    <div className="App">
      <h1>Тест OTP кода из смс</h1>
      <form>
        <CodeInput
          onChange={handleChangeSmsCode}
          name="sms"
          value={values.sms}
          label={''}
          inputCount={5}
          webOtpApiEnabled
          focusOnInit
          onComplete={handleSubmitSms}
        />
      </form>
    </div>
  );
}

export default App;

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../button/button';

const ContactUs = () => {
  const {
    values,
    handleSubmit,
    handleChange,
    errors,
    touched,
    handleBlur,
    resetForm,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      musicTaste: 'default',
      message: 'I like this music because...',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().min(2, 'Too short!').trim().required('Required'),
      lastName: Yup.string().min(2, 'Too short!').trim().required('Required'),
      email: Yup.string().email('Invalid email').trim().required('Required'),
      musicTaste: Yup.string().required('Required'),
      message: Yup.string()
        .min(2, 'Too short')
        .max(200, 'Too long')
        .trim()
        .required('Required'),
    }),

    onSubmit: (values) => {
      setTimeout(() => {
        console.log(values);
        setSubmitting(false);
      }, 800);
    },
  });

  console.log('errors', errors);
  return (
    <div style={{ margin: '50px' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          width: '40%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <input
          name='firstName'
          id='firstName'
          placeholder='First Name'
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        <p style={{ color: 'red', margin: '0' }}>
          {touched.firstName && errors.firstName}
        </p>
        <br />
        <input
          name='lastName'
          id='lastName'
          placeholder='Last Name'
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        <p style={{ color: 'red', margin: '0' }}>
          {touched.lastName && errors.lastName}
        </p>
        <br />
        <input
          name='email'
          id='email'
          placeholder='Email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        <p style={{ color: 'red', margin: '0' }}>
          {touched.email && errors.email}
        </p>
        <br />
        <select
          name='musicTaste'
          id='musicTaste'
          value={values.musicTaste}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value='default'>Select your Music Taste</option>
          <option value='classical'>Classical</option>
          <option value='rap'>Rap</option>
          <option value='edm'>EDM</option>
          <option value='heavyMetal'>Heavy Metal</option>
        </select>
        <p style={{ color: 'red', margin: '0' }}>
          {touched.musicTaste && errors.musicTaste}
        </p>
        <br />
        <textarea
          name='message'
          id='message'
          placeholder='Message'
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
        ></textarea>
        <p style={{ color: 'red', margin: '0' }}>
          {touched.message && errors.message}
        </p>
        <Button type='submit' disabled={isSubmitting}>
          Submit
        </Button>
        <Button
          style={{ background: 'red', margin: '0' }}
          type='reset'
          onClick={resetForm}
        >
          Reset
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;

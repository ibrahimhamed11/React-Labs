import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css'
const cities = ['Mnsoura', 'Aswan', 'cairo']; // Replace with your own list of cities

const RegistrationForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    city: '',
    password: ''
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    city: Yup.string().required('City is required'),
    password: Yup.string().required('Password is required')
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (

    <div className='formcontainer'>
    <div>
      <h1>Registration Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <Field type="text" id="fullName" name="fullName" />
            <ErrorMessage name="fullName" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
            

            
          </div>

          <div>
            <label htmlFor="city">City</label>
            <Field as="select" id="city" name="city">
              <option value="">Select a city</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </Field>
            <ErrorMessage name="city" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
    </div>
  );
};

export default RegistrationForm;

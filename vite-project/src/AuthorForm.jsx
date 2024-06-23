import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    birthDate: Yup.date().required('Birth Date is required'),
    biography: Yup.string().required('Biography is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <Field type="text" id="name" name="name" className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`} />
            <ErrorMessage name="name" component="div" className="invalid-feedback" />
          </div>
          <div className="mb-3">
            <label htmlFor="birthDate" className="form-label">Birth Date</label>
            <Field type="date" id="birthDate" name="birthDate" className={`form-control ${errors.birthDate && touched.birthDate ? 'is-invalid' : ''}`} />
            <ErrorMessage name="birthDate" component="div" className="invalid-feedback" />
          </div>
          <div className="mb-3">
            <label htmlFor="biography" className="form-label">Biography</label>
            <Field as="textarea" id="biography" name="biography" className={`form-control ${errors.biography && touched.biography ? 'is-invalid' : ''}`} />
            <ErrorMessage name="biography" component="div" className="invalid-feedback" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default AuthorForm;

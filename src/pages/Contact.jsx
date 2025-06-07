import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().min(10, 'Minimum 10 characters').required('Required')
});

const Contact = () => (
  <div className="p-6 max-w-md mx-auto">
    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form className="space-y-4">
        <div>
          <label>Name</label>
          <Field name="name" className="input" />
          <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
        </div>
        <div>
          <label>Email</label>
          <Field name="email" type="email" className="input" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
        </div>
        <div>
          <label>Message</label>
          <Field name="message" as="textarea" className="input" />
          <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default Contact;

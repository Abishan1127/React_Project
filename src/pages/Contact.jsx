import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Your name is required'),
  email: Yup.string()
    .required('Email is required')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Enter a valid email address'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required').min(10, 'Minimum 10 characters'),
});

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-2 text-center">Contact Us</h2>
        <p className="text-gray-600 mb-8 text-center">
          Reach out to us for any inquiries or to discuss your project needs.
        </p>

        <Formik
          initialValues={{ name: '', email: '', subject: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log('Form submitted:', values);
            resetForm();
          }}
        >
          {() => (
            <Form className="grid grid-cols-1 gap-6">
              {/* Name */}
              <div>
                <label className="block font-semibold mb-1">Your Name</label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Email */}
              <div>
                <label className="block font-semibold mb-1">Your Email</label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Subject */}
              <div>
                <label className="block font-semibold mb-1">Subject</label>
                <Field
                  name="subject"
                  type="text"
                  placeholder="Enter the subject"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Message */}
              <div>
                <label className="block font-semibold mb-1">Message</label>
                <Field
                  name="message"
                  as="textarea"
                  placeholder="Enter your message"
                  rows={5}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow"
                >
                  Send Message
                </button>
              </div>
            </Form>
          )}
        </Formik>

        {/* Contact Info */}
        <div className="mt-12 border-t pt-8 text-sm text-gray-600">
          <h3 className="font-semibold mb-2 text-lg">Our Office</h3>
          <p className="mb-1"><strong>Address:</strong> 186 Green Street, Kili Town, Kilinochchi City, Sri Lanka</p>
          <p className="mb-1"><strong>Phone:</strong> +94 (076) 410–1633</p>
          <p><strong>Email:</strong> info@ecosolutions.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

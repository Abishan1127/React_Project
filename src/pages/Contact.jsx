import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Your name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required').min(10, 'Minimum 10 characters'),
});

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
      <p className="text-gray-600 mb-8">
        We’re here to help. Reach out to us for any inquiries or to discuss your project needs.
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
          <Form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block font-medium mb-1">Your Name</label>
              <Field
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">Your Email</label>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Subject */}
            <div>
              <label className="block font-medium mb-1">Subject</label>
              <Field
                name="subject"
                type="text"
                placeholder="Enter the subject"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium mb-1">Message</label>
              <Field
                name="message"
                as="textarea"
                placeholder="Enter your message"
                rows={5}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md"
            >
              Send Message
            </button>
          </Form>
        )}
      </Formik>

      {/* Office Info */}
      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-2">Our Office</h3>
        <p className="text-gray-700 mb-6">
          Visit us at our office or contact us through the details below:
        </p>

        <div className="space-y-4 text-sm">
          <div className="flex justify-between border-t pt-4">
            <span className="font-medium text-gray-600">Address</span>
            <span className="text-right text-gray-800">
              123 Green Street, Suite 456, Sustainable City, CA 90001
            </span>
          </div>
          <div className="flex justify-between border-t pt-4">
            <span className="font-medium text-gray-600">Phone</span>
            <span className="text-right text-gray-800">+1 (555) 123–4567</span>
          </div>
          <div className="flex justify-between border-t pt-4">
            <span className="font-medium text-gray-600">Email</span>
            <span className="text-right text-gray-800">info@ecosolutions.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

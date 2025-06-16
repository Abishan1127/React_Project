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
    <div className="py-5 bg-light min-vh-100">
      <div className="container">
        <div className="card shadow-sm border-0 p-4 mx-auto" style={{ maxWidth: '700px' }}>
          <h2 className="text-center fw-bold mb-2">Contact Us</h2>
          <p className="text-center text-muted mb-4">
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
              <Form>
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Your Name</label>
                  <Field name="name" type="text" placeholder="Enter your name" className="form-control" />
                  <ErrorMessage name="name" component="div" className="text-danger small mt-1" />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Your Email</label>
                  <Field name="email" type="email" placeholder="Enter your email" className="form-control" />
                  <ErrorMessage name="email" component="div" className="text-danger small mt-1" />
                </div>

                {/* Subject */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Subject</label>
                  <Field name="subject" type="text" placeholder="Enter the subject" className="form-control" />
                  <ErrorMessage name="subject" component="div" className="text-danger small mt-1" />
                </div>

                {/* Message */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Message</label>
                  <Field
                    name="message"
                    as="textarea"
                    rows={5}
                    placeholder="Enter your message"
                    className="form-control"
                  />
                  <ErrorMessage name="message" component="div" className="text-danger small mt-1" />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button type="submit" className="btn btn-primary px-5 shadow-sm">
                    Send Message
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          {/* Contact Info */}
          <div className="mt-5 pt-4 border-top text-muted small">
            <h5 className="fw-semibold mb-2">Our Office</h5>
            <p className="mb-1"><strong>Address:</strong> 186 Green Street, Kili Town, Kilinochchi City, Sri Lanka</p>
            <p className="mb-1"><strong>Phone:</strong> +94 (076) 410–1633</p>
            <p><strong>Email:</strong> info@ecosolutions.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

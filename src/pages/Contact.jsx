import "./Contact.css";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <section className="contact">
      {/* Back Button just below navbar */}
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>⬅ Back</button>
      </div>

      <h2>Contact Me</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" placeholder="Enter your name" />

        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter your email" />

        <label>Message:</label>
        <textarea name="message" placeholder="Write your message"></textarea>

        <button type="submit">Send</button>
      </form>

      {/* Footer Section (only one place for contact info) */}
      
    </section>
  );
}

export default Contact;

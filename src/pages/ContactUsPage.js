import React from "react";
import { FORMSPREE } from "../utils/utils";
import { useForm, ValidationError } from "@formspree/react";
import Fade from "react-reveal/Fade";

function ContactUsPage() {
  const [state, handleSubmit] = useForm(FORMSPREE);
  if (state.succeeded) {
    return <p>Thanks for submitting!</p>;
  }
  return (
    <div>
      <Fade bottom>
        {" "}
        <h1>Contact Moi</h1>
      </Fade>

      <div className="container my-5 py-5 z-depth-1">
        <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
          <div className="row d-flex justify-content-center">
            <form
              className="text-center"
              onSubmit={handleSubmit}
            >
              <p className="h4 mb-4">Leave a Message</p>
              <input
                id="name"
                type="text"
                name="name"
                className="form-control mb-4"
                placeholder="Name"
              />
              <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
              />
              <input
                id="message"
                type="text"
                name="message"
                className="form-control"
                placeholder="Message"
              />
              <ValidationError
                prefix="message"
                field="message"
                errors={state.errors}
              />
              <br />

              <button
                type="submit"
                disabled={state.submitting}
                className="btn btn-outline-dark waves-effect"
              >
                Post
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactUsPage;

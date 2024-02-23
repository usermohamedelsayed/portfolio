"use client";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.scss";
import { FaCheck } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const refEmail = useRef<HTMLInputElement>(null);
  const refTextarea = useRef<HTMLTextAreaElement>(null);
  const [state, handleSubmit] = useForm("mgegkyak");
  const [isSubmit, setIsSubmit] = useState("submit");
  useEffect(() => {
    if (state.submitting) {
      setIsSubmit("submitting");
    } else if (state.succeeded) {
      setIsSubmit("submitted");
      if (refEmail.current) {
        refEmail.current.value = "";
      }
      if (refTextarea.current) {
        refTextarea.current.value = "";
      }
      setTimeout(() => {
        setIsSubmit("submit");
      }, 2000);
    } else if (!state.succeeded) {
      setIsSubmit("failed");
      setTimeout(() => {
        setIsSubmit("submit");
      }, 2000);
    }
  }, [state.submitting, state.succeeded]);
  return (
    <div className="Contact Page">
      <div className="container">
        <div className="liensY"></div>
        <h1 className="titlePage">
          <span>Contact Me</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="inp">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="enter your email address"
              required
              ref={refEmail}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="inp">
            <label htmlFor="message">Your Message</label>
            <textarea
              required
              id="message"
              name="message"
              placeholder="enter your message"
              ref={refTextarea}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="btn-full" disabled={state.submitting}>
            {isSubmit === "submit" ? (
              "submit"
            ) : isSubmit === "submitting" ? (
              <>
                Submitting..<span></span>
              </>
            ) : isSubmit === "submitted" ? (
              <>
                Submitted <FaCheck />
              </>
            ) : (
              "failed"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

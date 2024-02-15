import "./Contact.scss"
import animatContact from "../../animation/animatContact.json"
import { Player } from "@lottiefiles/react-lottie-player";
import { MdMail } from "react-icons/md";
import { useForm, ValidationError } from '@formspree/react';
import { useRef } from "react";
const Contact = () => {
    const refInputEmail = useRef()
    const refInputMessage = useRef()
    const refSentSuccessful = useRef()
    const [state, handleSubmit] = useForm("mgegkyak");
    if (state.succeeded) {
        refInputEmail.current.value = ""
        refInputMessage.current.value = ""
        refSentSuccessful.current.classList.add("active")
        setTimeout(() => {
            refSentSuccessful.current.classList.remove("active")
        }, 2000)
    }
    return (
        <div className='Contact showComponent'>
            <div className="container">
                <div className="infos">
                    <h1>
                        <i><MdMail /></i>
                        contact me
                    </h1>
                    <span className="desc">contact us for more information and get notidied when i publish something new.</span>
                    <form action="" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">email address</label>
                            <input ref={refInputEmail} autoComplete="of" name="email" type="email" required placeholder="enter your email address" />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div>
                            <label htmlFor="message">your message</label>
                            <textarea
                                required
                                ref={refInputMessage}
                                name="message"
                                id="message"
                                placeholder="enter your message"
                            ></textarea>
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <p ref={refSentSuccessful} className="sentSuccessful">your message has been sent successfuly</p>
                        <button className="btn" disabled={state.submitting}>
                            {state.submitting ? "submitting..." : "submit"}
                            <span className={state.submitting ? "active" : ""}></span>
                        </button>
                    </form>
                </div>
                <div className="animat">
                    <div className="player">
                        <Player src={animatContact} loop autoplay />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
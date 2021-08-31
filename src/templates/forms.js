import React, { useCallback, useState } from "react"
import { navigate } from 'gatsby-link'

export const encode = (data) => Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

export const ContactForm = () => {

    const [submitted, setSubmitted] = useState(false);
    const [formValues, setFormValues] = useState({})
    const handleChange = useCallback(({ target: { name, value } }) => setFormValues(values => ({
        ...values,
        [name]: value
    })), [setFormValues])

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...formValues,
            }),
        })
            .then(() => {
                setSubmitted(true)
            })
            .catch((error) => alert(error))
    }, [formValues, setSubmitted])

    return (
        <div className="content">
            <h1>Contact</h1>
            {submitted ? (
                <p>Thank you for your enquiry. We will get back to you as soon as possible.</p>
            ) : (
                <form
                    name="contact"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                        <label>
                            Don’t fill this out:{' '}
                            <input name="bot-field" onChange={handleChange} />
                        </label>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor={'name'}>
                            Your name
                        </label>
                        <div className="control">
                            <input
                                className="input"
                                type={'text'}
                                name={'name'}
                                onChange={handleChange}
                                id={'name'}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor={'email'}>
                            Email
                        </label>
                        <div className="control">
                            <input
                                className="input"
                                type={'email'}
                                name={'email'}
                                onChange={handleChange}
                                id={'email'}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor={'message'}>
                            Message
                        </label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                name={'message'}
                                onChange={handleChange}
                                id={'message'}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <button className="button is-link" type="submit">
                            Send
                        </button>
                    </div>
                </form>)}
        </div>
    )
}
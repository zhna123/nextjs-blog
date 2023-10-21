import Head from "next/head";
import Layout from "../components/layout";
import { SITE_TITLE } from "../lib/constant";
import Profile from "../components/profile";
import { FormEvent, useState } from "react";


export default function Contact() {

  const title = `${SITE_TITLE}-Contact`

  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true)
    setError(null)
    setSent(false)
    
    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch('/api/message', {
        method: 'POST',
        body: formData,
      })
      if (response.status !== 200) {
        throw new Error('Failed to submit the data. Please try again.')  
      } 
      setSent(true)
    } catch(err) {
      setError(err.message)
      console.log(err)
    } finally {
      setIsSubmitting(false)
      const form: HTMLFormElement = document.querySelector('#contact-form')
      form.reset()
    }
  }

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Profile />
      { error ? <div className="text-center mb-6 text-red-600">{error}</div> 
            : ( sent ? <div className="text-center mb-6 text-green-600">I've received your message and will get back to you soon!</div> : '')
      }
      <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto text-gray-800">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" className="form-input mb-4 border-b-gray-300 border-x-0 border-t-0" required/>

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" className="form-input mb-4 border-b-gray-300 border-x-0 border-t-0" required/>

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" className="form-textarea mb-8 border-b-gray-300 border-x-0 border-t-0" required></textarea>

        <button type="submit" disabled={isSubmitting} className={`form-input border-none rounded-sm bg-gray-300 drop-shadow ${isSubmitting ? 'text-gray-400' : ''}`}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </Layout>
  )
}
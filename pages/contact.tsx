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

  async function createContactsIfNotExists() {
    const response = await fetch('/api/create-contacts-table')
    if (response.status !== 200) {
      throw new Error('Failed to create contacts table. Please try again.')  
    } 
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true)
    setError(null)
    setSent(false)

    const formElement = event.currentTarget
    
    try {
      await createContactsIfNotExists()
      console.log(formElement)
      const formData = new FormData(formElement);
      const formDataObj = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      }
      const response = await fetch('/api/add-contacts', {
        method: 'POST',
        body: JSON.stringify(formDataObj),
      })
      if (response.status !== 200) {
        throw new Error('Failed to submit the data. Please try again.')  
      } 
      setSent(true)
      const res = await response.json()
      console.log(JSON.stringify(res.message))
    } catch(err) {
      setError(err.message)
      console.log(err)
    } finally {
      setIsSubmitting(false)
      formElement.reset()
    }
  }

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      {/* <Profile /> */}
      { error ? <div className="text-center mb-6 text-red-600">{error}</div> 
            : ( sent ? <div className="text-center mb-6 text-green-600">I've received your message and will get back to you soon!</div> : '')
      }
      <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto text-slate-800">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" aria-label="name" className="form-input mb-4 border-b-slate-300 border-x-0 border-t-0" required/>

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" aria-label="email" className="form-input mb-4 border-b-slate-300 border-x-0 border-t-0" required/>

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" aria-label="message" className="form-textarea mb-8 border-b-slate-300 border-x-0 border-t-0" required></textarea>

        <button type="submit" disabled={isSubmitting} className={`form-input border-none rounded bg-blog_green drop-shadow text-blog_bg_green ${isSubmitting ? 'text-slate-400' : ''}`}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </Layout>
  )
}
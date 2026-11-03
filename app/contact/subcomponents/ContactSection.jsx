'use client'

import { useId, useRef, useState } from 'react'
import styled from 'styled-components'
import { Container } from '@/components/landing/LandingShell'
import Eyebrow from '@/components/landing/Eyebrow'
import { SITE, telHref } from '@/components/landing/site'
import { gsap, useGSAP, MOTION_OK, inView, riseLines, fadeUp } from '@/components/landing/motion'

const PHONE_LABELS = ['Local', 'Mobile']
const EMPTY = { name: '', email: '', phone: '', subject: '', message: '' }

const validate = (v) => {
  const errors = {}
  if (!v.name.trim()) errors.name = 'Please tell us your name.'
  if (!v.email.trim()) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) errors.email = 'That email address doesn’t look right.'
  if (v.phone.trim() && !/^[+\d][\d\s()-]{6,}$/.test(v.phone.trim())) errors.phone = 'Please enter a valid phone number.'
  if (!v.message.trim()) errors.message = 'Please add a short message.'
  return errors
}

// Interim delivery: opens the visitor's email app with the enquiry pre-filled
// to the company inbox. Swap for a POST to an API route or form service once
// one is chosen (see context/progress-tracker.md, Open Questions).
const sendEnquiry = (v) => {
  const subject = v.subject.trim() || `Website enquiry from ${v.name.trim()}`
  const body = [v.message.trim(), '', '—', v.name.trim(), v.email.trim(), v.phone.trim()].filter((line, i) => i < 3 || line).join('\n')
  window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const Field = ({ id, label, error, as = 'input', optional, ...props }) => {
  const Tag = as
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label htmlFor={id}>
        {label}
        {optional && <span className='optional'> (optional)</span>}
      </label>
      <Tag id={id} aria-invalid={error ? 'true' : undefined} aria-describedby={error ? `${id}-error` : undefined} {...props} />
      {error && (
        <p id={`${id}-error`} className='error'>
          {error}
        </p>
      )}
    </div>
  )
}

const ContactSection = () => {
  const ref = useRef(null)
  const uid = useId()
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        fadeUp('[data-eyebrow], .intro p', { stagger: 0.1, scrollTrigger: inView('.details') })
        riseLines('.title', { scrollTrigger: inView('.details') })
        gsap.utils.toArray('.item', ref.current).forEach((item, i) => {
          gsap.from(item, { '--rule': 0, duration: 1.2, ease: 'power3.inOut', delay: i * 0.08, scrollTrigger: inView('.list', 'top 85%') })
          fadeUp(item.children, { stagger: 0.06, delay: 0.15 + i * 0.08, scrollTrigger: inView('.list', 'top 85%') })
        })
        gsap.from('.form-card', { autoAlpha: 0, y: 60, duration: 1.2, ease: 'power3.out', scrollTrigger: inView('.form-card', 'top 85%') })
      })
    },
    { scope: ref }
  )

  const update = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    // Clear a field's error as soon as it is corrected.
    if (errors[name]) setErrors((err) => ({ ...err, [name]: validate({ ...values, [name]: value })[name] }))
  }

  const submit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      ref.current.querySelector(`[name='${first}']`)?.focus()
      return
    }
    sendEnquiry(values)
    setSent(true)
  }

  const id = (name) => `${uid}-${name}`

  return (
    <Section ref={ref}>
      <Container className='grid'>
        <div className='details'>
          <div className='intro'>
            <Eyebrow>Contact Details</Eyebrow>
            <h2 className='title'>Talk to our team.</h2>
            <p>
              For any further information required, or any inquiry you wish to make, kindly consider using any of the
              contact options listed below.
            </p>
          </div>

          <ul className='list'>
            <li className='item'>
              <span className='label'>Find us</span>
              <address className='value serif'>
                {SITE.address[0]}
                <br />
                {SITE.address[1]}
              </address>
            </li>
            <li className='item'>
              <span className='label'>Call us today</span>
              <div className='value serif'>
                {SITE.phones.map((phone, i) => (
                  <a key={phone} href={telHref(phone)}>
                    <span className='kind'>{PHONE_LABELS[i]}</span>
                    {phone}
                  </a>
                ))}
              </div>
            </li>
            <li className='item'>
              <span className='label'>Email us now</span>
              <a className='value serif' href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </li>
            <li className='item'>
              <span className='label'>Working hours</span>
              <span className='value serif'>{SITE.hours}</span>
            </li>
            <li className='item'>
              <span className='label'>Follow us</span>
              <div className='value serif social'>
                {SITE.social.map((s) => (
                  <a key={s.label} href={s.href} target='_blank' rel='noopener noreferrer'>
                    {s.label}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>

        <div className='form-card'>
          {sent ? (
            <div className='sent' role='status'>
              <span className='label'>Almost there</span>
              <h3 className='serif'>Thank you, {values.name.trim().split(' ')[0]}.</h3>
              <p>
                Your email app should now be open with your message ready to send. If nothing opened, email us directly at{' '}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call {SITE.phones[0]}.
              </p>
              <button
                type='button'
                className='text-button'
                onClick={() => {
                  setValues(EMPTY)
                  setSent(false)
                }}
              >
                Write another message
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={submit} aria-label='Send us a message'>
              <h3 className='serif'>Send us a message</h3>
              <div className='pair'>
                <Field id={id('name')} name='name' label='Name' autoComplete='name' value={values.name} onChange={update} error={errors.name} />
                <Field
                  id={id('email')}
                  name='email'
                  type='email'
                  label='Email'
                  autoComplete='email'
                  value={values.email}
                  onChange={update}
                  error={errors.email}
                />
              </div>
              <div className='pair'>
                <Field
                  id={id('phone')}
                  name='phone'
                  type='tel'
                  label='Phone'
                  optional
                  autoComplete='tel'
                  value={values.phone}
                  onChange={update}
                  error={errors.phone}
                />
                <Field id={id('subject')} name='subject' label='Subject' optional value={values.subject} onChange={update} />
              </div>
              <Field
                id={id('message')}
                name='message'
                as='textarea'
                rows={5}
                label='Message'
                value={values.message}
                onChange={update}
                error={errors.message}
              />
              <button type='submit' className='submit'>
                <span className='submit-label'>
                  <span>Send Message</span>
                  <span aria-hidden='true'>Send Message</span>
                </span>
                <svg viewBox='0 0 16 16' width='16' height='16' aria-hidden='true'>
                  <path d='M2 8h11M8.5 3.5 13 8l-4.5 4.5' fill='none' stroke='currentColor' strokeWidth='1.4' />
                </svg>
              </button>
              <p className='note'>Submitting opens your email app with this message ready to send.</p>
            </form>
          )}
        </div>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding-block: var(--section);

  .grid {
    display: grid;
    grid-template-columns: 1fr 1.05fr;
    align-items: start;
    gap: clamp(40px, 6vw, 112px);
  }

  .title {
    font-size: clamp(32px, 3.7vw, 54px);
    line-height: 1.1;
  }
  .intro p {
    max-width: 440px;
    margin-top: 24px;
    color: var(--text);
    font-size: 15px;
  }
  .list {
    margin-top: clamp(40px, 4.5vw, 64px);
    list-style: none;
  }
  .item {
    --rule: 1;
    position: relative;
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 16px;
    padding: 22px 0;
    &::before {
      content: '';
      position: absolute;
      inset: 0 0 auto 0;
      height: 1px;
      background: var(--line);
      transform: scaleX(var(--rule));
      transform-origin: left;
    }
  }
  .label {
    padding-top: 4px;
    color: var(--muted);
    font-size: 13px;
  }
  .value {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: clamp(19px, 1.6vw, 23px);
    font-style: normal;
    line-height: 1.25;
    word-break: break-word;
  }
  .value a,
  a.value {
    width: fit-content;
    background: linear-gradient(currentColor, currentColor) 0 100% / 0 1px no-repeat;
    transition: background-size 0.5s cubic-bezier(0.65, 0, 0.25, 1);
    &:hover,
    &:focus-visible {
      background-size: 100% 1px;
    }
  }
  .kind {
    display: inline-block;
    min-width: 64px;
    color: var(--muted);
    font-family: var(--font-sans), sans-serif;
    font-size: 13px;
  }
  .social {
    flex-direction: row;
    gap: 24px;
  }

  .form-card {
    padding: clamp(28px, 3.4vw, 52px);
    border-radius: 14px;
    background: var(--olive);
  }
  form h3,
  .sent h3 {
    margin-bottom: 36px;
    font-size: clamp(28px, 2.6vw, 38px);
    line-height: 1.1;
  }
  .pair {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 28px;
  }
  .field {
    position: relative;
    margin-bottom: 28px;
  }
  .field label {
    display: block;
    margin-bottom: 6px;
    color: #45463f;
    font-size: 13px;
  }
  .optional {
    color: rgba(25, 25, 23, 0.45);
  }
  input,
  textarea {
    width: 100%;
    padding: 8px 0 10px;
    border: 0;
    border-bottom: 1px solid rgba(25, 25, 23, 0.3);
    border-radius: 0;
    background: transparent;
    color: var(--ink);
    font: inherit;
    font-size: 17px;
    outline: none;
    transition: border-color 0.3s ease;
    &:focus {
      border-bottom-color: var(--ink);
      box-shadow: 0 1px 0 0 var(--ink);
    }
  }
  textarea {
    resize: vertical;
    min-height: 120px;
  }
  .has-error input,
  .has-error textarea {
    border-bottom-color: var(--error);
  }
  .error {
    margin-top: 6px;
    color: var(--error);
    font-size: 13px;
  }

  .submit {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    height: 52px;
    padding: 0 26px;
    border: 0;
    border-radius: 999px;
    background: var(--ink);
    color: var(--cream);
    font-family: var(--font-serif), Georgia, serif;
    font-size: 18px;
    cursor: pointer;
    svg {
      transition: transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);
    }
    &:hover svg,
    &:focus-visible svg {
      transform: translateX(4px);
    }
    &:focus-visible {
      outline: 1px solid var(--ink);
      outline-offset: 4px;
    }
  }
  .submit-label {
    display: block;
    height: 1.2em;
    overflow: hidden;
    line-height: 1.2em;
    span {
      display: block;
      transition: transform 0.5s cubic-bezier(0.65, 0, 0.25, 1);
    }
  }
  .submit:hover .submit-label span,
  .submit:focus-visible .submit-label span {
    transform: translateY(-100%);
  }
  .note {
    margin-top: 14px;
    color: rgba(25, 25, 23, 0.55);
    font-size: 12px;
  }

  .sent p {
    max-width: 440px;
    color: #45463f;
    font-size: 15px;
    a {
      color: var(--ink);
      text-decoration: underline;
    }
  }
  .sent .label {
    display: block;
    margin-bottom: 14px;
  }
  .text-button {
    margin-top: 28px;
    padding: 0;
    border: 0;
    background: none;
    color: var(--ink);
    font: inherit;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 1023px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 599px) {
    .item {
      grid-template-columns: 1fr;
      gap: 8px;
    }
    .pair {
      grid-template-columns: 1fr;
    }
  }
`

export default ContactSection

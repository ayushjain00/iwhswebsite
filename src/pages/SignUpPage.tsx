// src/SignUpPage.tsx
import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { supabase } from '../supabaseClient'

interface FormData {
  name: string
  age: string
  email: string
  password: string
}

interface Message {
  type: 'success' | 'error'
  text: string
}

export default function SignUpPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    age: '',
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<Message | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    const strongPasswordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]:;"'<>,.?/~`|\\]).{6,}$/

    if (!strongPasswordRegex.test(form.password)) {
      setMessage({
        type: 'error',
        text: 'Password must include at least one uppercase letter, one number, and one special character.',
      })
      setLoading(false)
      return
    }

    // Sign up user
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    })

    if (signUpError) {
      setMessage({
        type: 'error',
        text: signUpError.message,
      })
      setLoading(false)
      return
    }

    // Wait for session or confirmation
    const { data: sessionData } = await supabase.auth.getSession()
    const userId = sessionData.session?.user?.id || signUpData.user?.id

    if (!userId) {
      setMessage({
        type: 'success',
        text: 'Account created! Please check your email to confirm your account before continuing.',
      })
      setLoading(false)
      return
    }

    // Insert profile into database
    const { error: insertError } = await supabase.from('profiles').insert([
      {
        id: userId,
        name: form.name,
        age: parseInt(form.age),
      },
    ])

    if (insertError) {
      setMessage({ type: 'error', text: insertError.message })
    } else {
      setMessage({ type: 'success', text: 'Account created successfully!' })
      setForm({ name: '', age: '', email: '', password: '' })
    }

    setLoading(false)
  }

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Create an Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        {message && (
          <p
            className={`text-sm ${
              message.type === 'error' ? 'text-red-500' : 'text-green-600'
            }`}
          >
            {message.text}
          </p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>
    </div>
  )
}

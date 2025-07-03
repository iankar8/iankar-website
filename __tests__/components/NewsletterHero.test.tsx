import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import NewsletterHero from '@/components/NewsletterHero'

// Mock fetch
global.fetch = jest.fn()

describe('NewsletterHero', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders with default props', () => {
    const { container } = render(<NewsletterHero />)
    
    expect(screen.getByText('Stay Updated')).toBeInTheDocument()
    expect(screen.getByText('Get my latest posts and thoughts directly in your inbox.')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
    
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders with custom props', () => {
    const { container } = render(
      <NewsletterHero 
        title="Custom Newsletter"
        description="Custom description text"
        newsletter="machine-earnings"
        className="custom-class"
      />
    )
    
    expect(screen.getByText('Custom Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Custom description text')).toBeInTheDocument()
    
    expect(container.firstChild).toMatchSnapshot()
  })

  it('handles email input changes', () => {
    render(<NewsletterHero />)
    
    const emailInput = screen.getByPlaceholderText('Enter your email')
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    
    expect(emailInput).toHaveValue('test@example.com')
  })

  it('shows loading state during submission', async () => {
    ;(global.fetch as jest.Mock).mockImplementation(() => 
      new Promise(resolve => setTimeout(resolve, 100))
    )

    render(<NewsletterHero />)
    
    const emailInput = screen.getByPlaceholderText('Enter your email')
    const submitButton = screen.getByRole('button', { name: 'Subscribe' })
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.click(submitButton)
    
    expect(screen.getByText('Subscribing...')).toBeInTheDocument()
  })

  it('shows success message after successful submission', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true })
    })

    render(<NewsletterHero />)
    
    const emailInput = screen.getByPlaceholderText('Enter your email')
    const submitButton = screen.getByRole('button', { name: 'Subscribe' })
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Thanks for subscribing!')).toBeInTheDocument()
      expect(screen.getByText('Please check your email to confirm.')).toBeInTheDocument()
    })
  })

  it('shows error message on submission failure', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Failed to subscribe' })
    })

    render(<NewsletterHero />)
    
    const emailInput = screen.getByPlaceholderText('Enter your email')
    const submitButton = screen.getByRole('button', { name: 'Subscribe' })
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Failed to subscribe')).toBeInTheDocument()
    })
  })

  it('disables submit button when email is empty', () => {
    render(<NewsletterHero />)
    
    const submitButton = screen.getByRole('button', { name: 'Subscribe' })
    expect(submitButton).toBeDisabled()
  })
}) 
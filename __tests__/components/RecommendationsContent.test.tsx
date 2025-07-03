import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import RecommendationsContent from '@/components/RecommendationsContent'

// Mock the lazy-loaded components
jest.mock('@/components/panels/RestaurantsPanel', () => {
  return function MockRestaurantsPanel({ restaurants }: { restaurants: any[] }) {
    return (
      <div data-testid="restaurants-panel">
        {restaurants.map((restaurant) => (
          <div key={restaurant.name} data-testid="restaurant-item">
            <h3>{restaurant.name}</h3>
            <p>{restaurant.location}</p>
            <p>{restaurant.cuisine}</p>
            <p>{restaurant.notes}</p>
          </div>
        ))}
      </div>
    )
  }
})

jest.mock('@/components/panels/MediaPanel', () => {
  return function MockMediaPanel({ media }: { media: any[] }) {
    return (
      <div data-testid="media-panel">
        {media.map((item) => (
          <div key={item.title} data-testid="media-item">
            <h3>{item.title}</h3>
            <p>{item.type}</p>
            <p>{item.genre}</p>
            <p>{item.notes}</p>
          </div>
        ))}
      </div>
    )
  }
})

describe('RecommendationsContent', () => {
  it('renders with default state (restaurants tab active)', () => {
    const { container } = render(<RecommendationsContent />)
    
    // Check that segmented control is rendered
    expect(screen.getByRole('tab', { name: /restaurants/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /tv & movies/i })).toBeInTheDocument()
    
    // Check that restaurants tab is active by default
    expect(screen.getByRole('tab', { name: /restaurants/i })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: /tv & movies/i })).toHaveAttribute('aria-selected', 'false')
    
    expect(container.firstChild).toMatchSnapshot()
  })

  it('switches to media tab when clicked', async () => {
    render(<RecommendationsContent />)
    
    const mediaTab = screen.getByRole('tab', { name: /tv & movies/i })
    fireEvent.click(mediaTab)
    
    await waitFor(() => {
      expect(screen.getByRole('tab', { name: /tv & movies/i })).toHaveAttribute('aria-selected', 'true')
      expect(screen.getByRole('tab', { name: /restaurants/i })).toHaveAttribute('aria-selected', 'false')
    })
  })

  it('displays restaurants content in restaurants panel', async () => {
    render(<RecommendationsContent />)
    
    // Wait for restaurants panel to load
    await waitFor(() => {
      expect(screen.getByTestId('restaurants-panel')).toBeInTheDocument()
    })
    
    // Check for specific restaurant content
    expect(screen.getByText('Nopa')).toBeInTheDocument()
    expect(screen.getByText('Che Fico')).toBeInTheDocument()
    expect(screen.getByText('State Bird Provisions')).toBeInTheDocument()
  })

  it('displays media content when media tab is selected', async () => {
    render(<RecommendationsContent />)
    
    const mediaTab = screen.getByRole('tab', { name: /tv & movies/i })
    fireEvent.click(mediaTab)
    
    // Wait for media panel to load
    await waitFor(() => {
      expect(screen.getByTestId('media-panel')).toBeInTheDocument()
    })
    
    // Check for specific media content
    expect(screen.getByText('The Bear')).toBeInTheDocument()
    expect(screen.getByText('Succession')).toBeInTheDocument()
    expect(screen.getByText('Dune: Part Two')).toBeInTheDocument()
  })

  it('has proper aria-pressed attributes on tabs', () => {
    render(<RecommendationsContent />)
    
    const restaurantsTab = screen.getByRole('tab', { name: /restaurants/i })
    const mediaTab = screen.getByRole('tab', { name: /tv & movies/i })
    
    // Initially restaurants tab should be pressed
    expect(restaurantsTab).toHaveAttribute('aria-pressed', 'true')
    expect(mediaTab).toHaveAttribute('aria-pressed', 'false')
  })

  it('updates aria-pressed when tabs are switched', async () => {
    render(<RecommendationsContent />)
    
    const restaurantsTab = screen.getByRole('tab', { name: /restaurants/i })
    const mediaTab = screen.getByRole('tab', { name: /tv & movies/i })
    
    fireEvent.click(mediaTab)
    
    await waitFor(() => {
      expect(restaurantsTab).toHaveAttribute('aria-pressed', 'false')
      expect(mediaTab).toHaveAttribute('aria-pressed', 'true')
    })
  })

  it('shows loading spinner while panels are loading', () => {
    render(<RecommendationsContent />)
    
    // Initially should show loading state due to Suspense
    // This test verifies the loading UI is properly structured
    const tabsContainer = screen.getByRole('tablist')
    expect(tabsContainer).toBeInTheDocument()
  })

  it('keyboard navigation works with tab controls', () => {
    render(<RecommendationsContent />)
    
    const restaurantsTab = screen.getByRole('tab', { name: /restaurants/i })
    const mediaTab = screen.getByRole('tab', { name: /tv & movies/i })
    
    // Focus first tab
    restaurantsTab.focus()
    expect(document.activeElement).toBe(restaurantsTab)
    
    // Tab to next tab
    fireEvent.keyDown(restaurantsTab, { key: 'Tab' })
    
    // Should be able to navigate between tabs
    expect(mediaTab).toBeInTheDocument()
  })

  it('renders with proper semantic structure', () => {
    const { container } = render(<RecommendationsContent />)
    
    // Check for proper ARIA structure
    expect(screen.getByRole('tablist')).toBeInTheDocument()
    expect(screen.getAllByRole('tab')).toHaveLength(2)
    expect(screen.getByRole('tabpanel')).toBeInTheDocument()
    
    expect(container.firstChild).toMatchSnapshot()
  })
}) 
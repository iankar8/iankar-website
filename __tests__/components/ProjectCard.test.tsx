import React from 'react'
import { render, screen } from '@testing-library/react'
import ProjectCard from '@/components/ProjectCard'

describe('ProjectCard', () => {
  const mockProps = {
    title: 'Test Project',
    description: 'This is a test project description that should be rendered correctly.',
    tags: ['React', 'TypeScript', 'Next.js'],
    link: '/test-project',
    external: false,
  }

  it('renders with basic props', () => {
    const { container } = render(
      <ProjectCard 
        title={mockProps.title}
        description={mockProps.description}
      />
    )
    
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('This is a test project description that should be rendered correctly.')).toBeInTheDocument()
    
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders with all props including tags and link', () => {
    const { container } = render(<ProjectCard {...mockProps} />)
    
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('This is a test project description that should be rendered correctly.')).toBeInTheDocument()
    
    // Check tags are rendered
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Next.js')).toBeInTheDocument()
    
    // Check arrow icon is present when link exists
    expect(screen.getByRole('link')).toBeInTheDocument()
    
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders with external link', () => {
    const { container } = render(
      <ProjectCard 
        {...mockProps}
        link="https://external-link.com"
        external={true}
      />
    )
    
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', 'https://external-link.com')
    expect(linkElement).toHaveAttribute('target', '_blank')
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer')
    
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders without link', () => {
    const { container } = render(
      <ProjectCard 
        title={mockProps.title}
        description={mockProps.description}
        tags={mockProps.tags}
      />
    )
    
    // Should not have a link element
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders with custom className', () => {
    const { container } = render(
      <ProjectCard 
        {...mockProps}
        className="custom-test-class"
      />
    )
    
    expect(container.firstChild).toHaveClass('custom-test-class')
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders without tags', () => {
    const { container } = render(
      <ProjectCard 
        title={mockProps.title}
        description={mockProps.description}
        tags={[]}
      />
    )
    
    // Should not render any tag elements
    expect(screen.queryByText('React')).not.toBeInTheDocument()
    
    expect(container.firstChild).toMatchSnapshot()
  })

  it('applies proper ARIA attributes for accessibility', () => {
    render(<ProjectCard {...mockProps} />)
    
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveClass('focus-visible:outline-none')
    expect(linkElement).toHaveClass('focus-visible:ring-2')
  })
}) 
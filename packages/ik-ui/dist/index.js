const React = require('react')

function Ik3dMarqueeUnit({ children, className = '', speed = 20, ...props }) {
  const style = {
    '--marquee-duration': `${speed}s`,
  }
  return React.createElement(
    'div',
    { className: `relative overflow-hidden h-10 ${className}`, style, ...props },
    React.createElement('div', {
      className: 'ikui-marquee-track whitespace-nowrap inline-flex items-center gap-8 pointer-events-none',
      children,
    })
  )
}

module.exports = {
  Ik3dMarqueeUnit,
} 
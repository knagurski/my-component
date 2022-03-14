import React from 'react'

const MyComponent = ({ children, heading }) => {
  const color = 'blue'

  return (
    <section style={{ borderRadius: '1rem', border: `2px solid ${color}` }}>
      <header style={{ backgroundColor: color, padding: '1rem' }}>
        <h1 style={{ color: 'white', fontSize: '2rem', margin: 0 }}>
          {heading}
        </h1>
      </header>
      <div style={{ padding: '1rem' }}>{children}</div>
    </section>
  )
}

export default MyComponent

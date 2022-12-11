import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function IndexPage() {
  const [name, setName] = useState('');;
  const navigate = useNavigate()

  return (
    <div>
      <p>
        <a href="https://github.com/prall1024/react-mould" target='_blank' rel='noreferrer'>
          React mould
        </a>
      </p>

      <input
        type="text" placeholder="What's your name?"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div>
        <button onClick={() => navigate(`/hello/${encodeURIComponent(name)}`)}>
          Go
        </button>
      </div>
    </div>
  )
}

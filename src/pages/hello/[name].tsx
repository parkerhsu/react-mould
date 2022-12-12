import { useNavigate, useParams } from 'react-router-dom'

export default function Hello ({ name }: { name: string }) {
  const navigate = useNavigate()
  const params = useParams()

  return (
    <div>
      <p>Hello, { params.name } </p>

      <div>
        <button onClick={ () => navigate(-1) }>
          Back
        </button>
      </div>
    </div>
  )
}

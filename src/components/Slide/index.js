import './index.css'

const Slide = props => {
  const {data, index} = props

  return (
    <>
      <div className="card">
        <h1 className="heading">{data.heading}</h1>
        <p className="description">{data.description}</p>
      </div>
    </>
  )
}

export default Slide

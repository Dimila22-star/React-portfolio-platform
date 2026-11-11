import { useState } from 'react'

function ProjectForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    onAdd({ title, image, description, link })
    
    // Clear inputs
    setTitle('')
    setImage('')
    setDescription('')
    setLink('')
  }

  return (
    <div className="form-container">
      <h2>Add a Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input required value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Image URL:</label>
          <input value={image} onChange={e => setImage(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea required value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Link:</label>
          <input required value={link} onChange={e => setLink(e.target.value)} />
        </div>
        <button type="submit">Save Project</button>
      </form>
    </div>
  )
}

export default ProjectForm

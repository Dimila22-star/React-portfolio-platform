import { useState, useEffect } from 'react'
import ProjectForm from './ProjectForm'
import ProjectCard from './ProjectCard'

function App() {
  const [projects, setProjects] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Fetch error:", err))
  }, [])

  const addProject = (newProject) => {
    fetch('http://localhost:3000/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProject)
    })
    .then(res => res.json())
    .then(saved => setProjects([...projects, saved]))
  }

    const filteredProjects = projects.filter(p => {
    const term = search.toLowerCase()
    return p.title.toLowerCase().includes(term) || p.description.toLowerCase().includes(term)
  })

  return (
    <div className="portfolio-container">
      <header>
        <h1>My Portfolio</h1>
        <input 
          className="search-input"
          type="text" 
          placeholder="Search projects..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <ProjectForm onAdd={addProject} />
      
      <div className="project-list">
        {filteredProjects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          filteredProjects.map(p => <ProjectCard key={p.id} project={p} />)
        )}
      </div>
    </div>
  )
}

export default App

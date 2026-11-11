function ProjectCard({ project }) {
  const placeholder = 'https://via.placeholder.com/300x150?text=No+Image'
  
  return (
    <div className="project-card">
      <img 
        src={project.image || placeholder} 
        alt={project.title} 
        className="project-image" 
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" className="project-link">
        View Code
      </a>
    </div>
  )
}

export default ProjectCard

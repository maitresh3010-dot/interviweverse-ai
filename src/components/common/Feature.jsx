import './feature.css'

const Feature = () => {
  const features = [
    {
      id: 1,
      title: 'AI Mock Interview',
      description: 'Practice real interview questions with AI.'
    },
    {
      id: 2,
      title: 'Coding Challenges',
      description: 'Solve coding problems like real interviews.'
    },
    {
      id: 3,
      title: 'Performance Analytics',
      description: 'Track your interview progress.'
    },
    {
      id: 4,
      title: 'HR Interview',
      description: 'Practice HR interview questions.'
    },
    {
      id: 5,
      title: 'Resume Review',
      description: 'Improve your resume using AI.'
    },
    {
      id: 6,
      title: 'AI Career Assistant',
      description: 'Ask career-related questions anytime.'
    }
  ]

  return (
    <section className="feature-container">
      <h2 className='feature-heading'>Why Choose InterviewVerse AI?</h2>

      <div className="feature-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.id}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Feature

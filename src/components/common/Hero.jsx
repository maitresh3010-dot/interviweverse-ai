
import './Hero.css'
import heroimage from  '../../assets/interviweverse-ai.png'
 

const Hero = () => {
  return (
    <div className='main-container'>

        <div className="left-section">

          

                <h1 className='firstheading'> Ace Your Dream Job </h1>

                <h1 className='secondheading'>with <span>AI-powered</span> Interviews </h1>

                
                    <p className='descripption'>Prepare for technical and HR interviews with AI-powered mock interviews,
coding challenges, personalized feedback, and company-specific questions.</p>
                


                <div className="hero-buttons">
                    <button className='get-started'>Get Started</button>
                    <button className='demo-button'> Watch Demo</button>
                
            </div>


        </div>

        <div className="right-section">

            <img src={heroimage} alt="AI Interview Assistant" />
        </div>
      
    </div>
  )
}

export default Hero

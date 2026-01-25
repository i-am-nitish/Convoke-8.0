import './App.css'

function App() {
  return (
    <div className="container">
      <video 
        className="background-video"
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
      >
        <source src="/convokelanding1.mp4" type="video/mp4" />
      </video>
      
    
    </div>
  )
}

export default App

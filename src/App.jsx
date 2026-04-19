import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projeler from './components/Projeler'
import Beceriler from './components/Beceriler'
import Iletisim from './components/Iletisim'  

function App() {
  return (
    <div style={{ background: '#0f0f0f', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      <Navbar />
      <Hero />
      <Projeler />
      <Beceriler />
      <Iletisim />
    </div>
  )
}

export default App
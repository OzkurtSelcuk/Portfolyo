function Iletisim() {
  return (
    <section id="iletisim" style={{ padding: '80px 60px', background: '#0f0f0f' }}>
      <h2 style={{ color: '#ffffff', fontSize: '32px', fontWeight: 600, marginBottom: '8px' }}>İletişim</h2>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '48px' }}>Benimle iletişime geç</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
        <a href="mailto:selcukozkurt668@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#888', textDecoration: 'none', fontSize: '14px' }}>
          📧 selcukozkurt668@gmail.com
        </a>
        <a href="https://github.com/OzkurtSelcuk" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#888', textDecoration: 'none', fontSize: '14px' }}>
          🐙 github.com/OzkurtSelcuk
        </a>
        <a href="https://www.linkedin.com/in/selcukozkurt/" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#888', textDecoration: 'none', fontSize: '14px' }}>
          💼 linkedin.com/in/selcukozkurt
        </a>
      </div>
    </section>
  )
}

export default Iletisim
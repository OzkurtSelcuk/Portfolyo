const beceriler = [
  { kategori: 'Programlama', liste: ['Python', 'JavaScript', 'Java', 'C++'] },
  { kategori: 'Web', liste: ['Node.js', 'Express', 'React', 'HTML/CSS'] },
  { kategori: 'Veritabanı', liste: ['PostgreSQL', 'SQLite', 'MySQL'] },
  { kategori: 'Araçlar', liste: ['Git', 'GitHub', 'VS Code', 'Linux'] },
]

function Beceriler() {
  return (
    <section id="beceriler" style={{ padding: '80px 60px', background: '#0f0f0f' }}>
      <h2 style={{ color: '#ffffff', fontSize: '32px', fontWeight: 600, marginBottom: '8px' }}>Beceriler</h2>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '48px' }}>Kullandığım teknolojiler</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {beceriler.map(b => (
          <div key={b.kategori} style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{b.kategori}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {b.liste.map(item => (
                <span key={item} style={{ color: '#888', fontSize: '14px' }}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Beceriler
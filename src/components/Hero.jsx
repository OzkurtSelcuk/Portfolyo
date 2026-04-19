function Hero() {
  return (
    <section style={{ padding: '100px 60px', background: '#0f0f0f',textAlign: 'left' ,id: 'hakkimda' }}>
      <p style={{ color: '#888', fontSize: '14px', marginBottom: '12px' }}>Merhaba, ben</p>
      <h1 style={{ color: '#ffffff', fontSize: '56px', fontWeight: 700, marginBottom: '16px' }}>Selçuk Özkurt</h1>
      <h2 style={{ color: '#888', fontSize: '24px', fontWeight: 400, marginBottom: '24px' }}>Bilgisayar Mühendisliği Öğrencisi</h2>
      <p style={{ color: '#666', fontSize: '16px', maxWidth: '500px', lineHeight: '1.7', marginBottom: '40px' }}>
        Web geliştirme ve siber güvenlik üzerine projeler yapıyorum. 
        Yeni teknolojiler öğrenmekten ve gerçek problemler çözmekten keyif alıyorum.
      </p>
      <div style={{ display: 'flex', gap: '16px' }}>
        <a href="#projeler" style={{ background: '#ffffff', color: '#0f0f0f', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}>
          Projelerimi Gör
        </a>
        <a href="https://github.com/OzkurtSelcuk" target="_blank" style={{ border: '1px solid #333', color: '#ffffff', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px' }}>
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Hero
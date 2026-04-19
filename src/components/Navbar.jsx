function Navbar() {
  const linkler = [
    { isim: 'Hakkımda', id: 'hakkimda' },
    { isim: 'Projeler', id: 'projeler' },
    { isim: 'Beceriler', id: 'beceriler' },
    { isim: 'İletişim', id: 'iletisim' },
  ]

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 60px', background: '#0f0f0f', borderBottom: '1px solid #1f1f1f', position: 'sticky', top: 0, zIndex: 100 }}>
      <span style={{ color: '#fff', fontWeight: 600, fontSize: '18px' }}>
        Selcuk.dev
      </span>
      <div style={{ display: 'flex', gap: '32px' }}>
        {linkler.map(link => (
          <a key={link.id} href={'#' + link.id} style={{ color: '#888', textDecoration: 'none', fontSize: '14px' }}>
            {link.isim}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
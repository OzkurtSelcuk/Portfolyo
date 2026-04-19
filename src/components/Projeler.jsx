const projeler = [
  {
    isim: 'LinkShorter',
    aciklama: 'Node.js ve Express ile yapılmış link kısaltma uygulaması. Gerçek zamanlı tıklanma istatistikleri ve link silme özelliği var.',
    teknolojiler: ['Node.js', 'Express', 'JavaScript'],
    demo: 'https://linkshorter-rz9s.onrender.com',
    github: 'https://github.com/OzkurtSelcuk/LinkShorter'
  },
  {
    isim: 'Port Tarayıcı',
    aciklama: 'Python ile yazılmış çok iş parçacıklı port tarayıcı. Açık portları tespit edip servis adlarını gösteriyor.',
    teknolojiler: ['Python', 'Socket', 'Threading'],
    demo: null,
    github: 'https://github.com/OzkurtSelcuk'
  },
  {
  isim: 'MailSender',
  aciklama: 'C# Windows Forms ile geliştirilmiş e-posta gönderme uygulaması. SMTP protokolü üzerinden Gmail entegrasyonu ile gerçek mail gönderimi yapılıyor.',
  teknolojiler: ['C#', '.NET', 'SMTP', 'Windows Forms'],
  demo: null,
  github: 'https://github.com/OzkurtSelcuk/MailSender'
},
{
    isim:'Handgesture',
    aciklama:'Python ve OpenCV kullanarak el hareketlerini tanıyan bir uygulama. Gerçek zamanlı video akışında el hareketlerini algılayıp ekranda gösteriyor.',
    teknolojiler: ['Python', 'OpenCV', 'MediaPipe'],
    demo: null,
    github: 'https://github.com/OzkurtSelcuk/Handgesture'
},
{
    isim:'Ipinfo',
    aciklama:'Python ile yazılmış IP adresi sorgulama aracı. Girilen IP adresinin şehir, ülke, konum ve ISP bilgilerini ipinfo.io API üzerinden getiriyor.',
    teknolojiler: ['Python', 'OpenCV', 'MediaPipe'],
    demo: null,
    github: 'https://github.com/OzkurtSelcuk/IPinfo'
},
{
    isim:'IdentityServer',
    aciklama:'C# ve .NET ile geliştirilmiş basit bir kimlik doğrulama sunucusu. JWT token bazlı oturum yönetimi sağlıyor.',
    teknolojiler: ['C#', '.NET', 'JWT'],
    demo: null,
    github:'https://github.com/OzkurtSelcuk/IdentityServer'
}
]

function Projeler() {
  return (
    <section id="projeler" style={{ padding: '80px 60px', background: '#0f0f0f' }}>
      <h2 style={{ color: '#ffffff', fontSize: '32px', fontWeight: 600, marginBottom: '8px',textAlign:'left' }}>Projeler</h2>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '48px' }}>Yaptığım bazı çalışmalar textAlign:'left'</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {projeler.map(proje => (
          <div key={proje.isim} style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '28px' }}>
            <h3 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 600, marginBottom: '12px' }}>{proje.isim}</h3>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>{proje.aciklama}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {proje.teknolojiler.map(t => (
                <span key={t} style={{ background: '#0f0f0f', border: '1px solid #2a2a2a', color: '#888', padding: '4px 10px', borderRadius: '20px', fontSize: '12px' }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              {proje.demo && (
                <a href={proje.demo} target="_blank" style={{ background: '#ffffff', color: '#0f0f0f', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>Demo</a>
              )}
              <a href={proje.github} target="_blank" style={{ border: '1px solid #333', color: '#ffffff', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontSize: '13px' }}>GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projeler
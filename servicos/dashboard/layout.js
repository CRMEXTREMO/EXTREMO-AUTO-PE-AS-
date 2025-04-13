export default function DashboardLayout({ children }) {
  return (
    <div style={{ fontFamily: 'sans-serif', height: '100vh', margin: 0 }}>
      {/* Menu superior fixo */}
      <header style={{
        backgroundColor: '#0D1B2A', // azul escuro
        color: '#fff',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <h1 style={{ fontSize: '20px', margin: 0 }}>CRM EXTREMO</h1>
        <nav>
          <a href="/dashboard" style={{ color: '#fff', marginLeft: 16, textDecoration: 'none' }}>Início</a>
          <a href="/dashboard/leads" style={{ color: '#fff', marginLeft: 16, textDecoration: 'none' }}>Leads</a>
          <a href="/dashboard/relatorios" style={{ color: '#fff', marginLeft: 16, textDecoration: 'none' }}>Relatórios</a>
        </nav>
      </header>

      {/* Conteúdo */}
      <main style={{ padding: 24, backgroundColor: '#f4f4f4', height: '100%' }}>
        {children}
      </main>
    </div>
  );
}

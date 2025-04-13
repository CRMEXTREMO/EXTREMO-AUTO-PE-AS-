import { useEffect, useState } from 'react';
import { obterUsuarioAtual } from '../servicos/auth';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [usuario, setUsuario] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const verificarUsuario = async () => {
      const user = await obterUsuarioAtual();
      if (!user) {
        router.push('/login');
      } else {
        setUsuario(user);
      }
    };
    verificarUsuario();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      {usuario ? (
        <p>Bem-vindo, {usuario.email}</p>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

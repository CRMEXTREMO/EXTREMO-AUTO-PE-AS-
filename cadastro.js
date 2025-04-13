import { useState } from 'react';
import { cadastrarUsuario } from '../servicos/auth';
import { useRouter } from 'next/router';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleCadastro = async (e) => {
    e.preventDefault();
    const { error } = await cadastrarUsuario(email, senha);
    if (!error) {
      alert('Cadastro realizado com sucesso!');
      router.push('/login');
    } else {
      alert('Erro: ' + error.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Cadastro</h2>
      <form onSubmit={handleCadastro}>
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

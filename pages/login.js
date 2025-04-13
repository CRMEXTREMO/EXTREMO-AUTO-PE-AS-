export default function Login() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Página de Login</h1>
      <form>
        <input type="email" placeholder="Email" /><br />
        <input type="password" placeholder="Senha" /><br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

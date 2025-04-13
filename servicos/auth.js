import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://SEU-PROJETO.supabase.co',
  'CHAVE_PUBLICA_AQUI'
);

export const cadastrarUsuario = (email, senha) =>
  supabase.auth.signUp({ email, password: senha });

export const loginUsuario = (email, senha) =>
  supabase.auth.signInWithPassword({ email, password: senha });

export const obterUsuarioAtual = async () => {
  const { data } = await supabase.auth.getUser();
  return data?.user;
};

export const logout = () => supabase.auth.signOut();

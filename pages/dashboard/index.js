// pages/dashboard/index.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/services/supabaseClient';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/login');
      } else {
        setUser(user);
      }
    };

    getUser();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bem-vindo ao CRM EXTREMO!</h1>
      {user && <p>Você está logado como: {user.email}</p>}
    </div>
  );
      }

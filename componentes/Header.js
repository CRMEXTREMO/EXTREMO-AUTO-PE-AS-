"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/services/supabase";
import { useEffect, useState } from "react";

export default function Header() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };
    getSession();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <nav className="flex gap-6">
        <Link href="/atendimentos">Atendimentos</Link>
        <Link href="/alertas">Alertas</Link>
        <Link href="/orcamentos">Orçamentos</Link>
      </nav>
      {user && (
        <button
          onClick={handleLogout}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Sair
        </button>
      )}
    </header>
  );
      }

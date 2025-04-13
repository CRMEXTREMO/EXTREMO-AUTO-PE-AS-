'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/services/supabase'
import { useSession } from '@/hooks/useSession'

export default function DashboardPage() {
  const router = useRouter()
  const session = useSession()

  useEffect(() => {
    if (session === null) {
      router.push('/')
    }
  }, [session])

  if (!session) {
    return <p>Carregando...</p>
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Bem-vindo ao CRM EXTREMO!</h1>
      <p className="mt-4">Você está logado como <strong>{session.user.email}</strong></p>
    </div>
  )
}

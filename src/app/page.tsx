import { Button } from '@/components/ui/button'
import { LoginButton}  from '@/components/auth/loginButton'
import React from 'react'

export default function HomePage() {
  return (
    <main>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="relative">
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <LoginButton>
            <Button variant="secondary" size="lg">join us!</Button>
            </LoginButton>
          </div>
        </div>
    </main>
  )
}

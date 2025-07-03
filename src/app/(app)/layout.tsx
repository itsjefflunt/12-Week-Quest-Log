import type { ReactNode } from 'react';
import AppHeader from '@/components/app-header';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <AppHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            {children}
        </div>
      </main>
    </div>
  );
}

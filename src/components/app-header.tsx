import Link from 'next/link';
import { MainNav } from '@/components/main-nav';
import { UserNav } from '@/components/user-nav';
import { Rocket } from 'lucide-react';

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-card">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">12-Week Quest Log</span>
          </Link>
          <MainNav />
        </div>
        <div className="flex items-center space-x-4">
          <UserNav />
        </div>
      </div>
    </header>
  );
}

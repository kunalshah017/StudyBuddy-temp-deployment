'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  BookOpen,
  CalendarCheck,
  CheckSquare,
  Trophy,
  Calculator,
  Brain,
  Gift,
  Menu,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ModeToggle } from './mode-toggle';

const navigation = [
  { name: 'Library', href: '/library', icon: BookOpen },
  { name: 'Attendance', href: '/attendance', icon: CalendarCheck },
  { name: 'Tasks', href: '/tasks', icon: CheckSquare },
  { name: 'Leaderboard', href: '/leaderboard', icon: Trophy },
  { name: 'CGPA Calculator', href: '/calculator', icon: Calculator },
  { name: 'AI Buddy', href: '/ai-buddy', icon: Brain },
  { name: 'Rewards', href: '/rewards', icon: Gift },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full flex justify-center items-center px-5 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 w-full items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center space-x-2 mr-8">
            <BookOpen className="h-6 w-6" />
            <span className="font-bold">StudyBuddy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted',
                    pathname === item.href
                      ? 'text-primary bg-muted'
                      : 'text-muted-foreground'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
          <ModeToggle />
        </div>

        {/* Mobile Menu and Theme Toggle */}
        <div className="flex items-center md:hidden space-x-2">
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-in Panel */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Overlay */}
          <div
            className="fixed inset-0 "
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          ></div>

          {/* Menu Panel */}
          <div className="relative bg-background w-full h-full shadow-lg p-6">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col space-y-2 mt-8 px-5 rounded-b-2xl  bg-background">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'flex items-center  space-x-2 px-5 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted',
                      pathname === item.href
                        ? 'text-primary bg-muted'
                        : 'text-muted-foreground'
                    )}
                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

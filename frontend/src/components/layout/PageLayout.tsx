import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
export function PageLayout({ children }: { children?: ReactNode }) { return <div className="min-h-screen bg-[var(--color-background)]"><Navbar />{children ?? <Outlet />}<Footer /></div>; }

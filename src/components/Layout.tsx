// components/Layout.tsx

import React, { ReactNode } from 'react';
import Link from 'next/link';
interface LayoutProps {
    children: ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li>
              <Link href="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/admin/resources">Resources</Link>
            </li>
            <li>
              <Link href="/admin/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content area */}
      <div className="content">
        {/* Header */}
        <header className="header">
          <h1>Welcome to the Admin Panel</h1>
        </header>

        {/* Content */}
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

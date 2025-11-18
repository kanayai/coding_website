'use client';

import ThemeToggleButton from './ThemeToggleButton';
import Link from 'next/link';

const Navigation: React.FC = () => {
  const navItems = [
    { name: 'home', href: '#home' },
    { name: 'teaching', href: '#teaching' },
    { name: 'research', href: '#research' },
    { name: 'publications', href: '/publications' },
    { name: 'blog', href: '#blog' },
    { name: 'contact', href: '#contact' },
  ];

  return (
    <div className="python-script-nav">
      <div className="python-script-nav-header">
        <div className="python-script-nav-buttons">
          <span className="python-script-nav-button red"></span>
          <span className="python-script-nav-button yellow"></span>
          <span className="python-script-nav-button green"></span>
        </div>
        <div className="python-script-nav-title">
          karim_ai_navigation.py
        </div>
        <div style={{ flex: 1 }}></div>
        <ThemeToggleButton />
      </div>
      <div className="python-script-nav-content">
        {navItems.map((item, index) => (
          <div key={index} className="python-script-nav-line">
            <span className="python-keyword">import</span>{' '}
            <Link href={item.href} className="python-variable">
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;

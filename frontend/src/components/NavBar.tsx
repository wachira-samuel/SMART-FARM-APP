import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-green-700">
      <ul className="flex space-x-4">
        <li>
          <Link href="/"className="hover:text-green-300">Home
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="hover:text-green-300">Dashboard
          </Link>
        </li>
        <li>
          <Link href="/monitoring" className="hover:text-green-300">Monitoring
          </Link>
        </li>
        <li> 
        <Link href="/analytics"className="hover:text-green-300">Analytics
        </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

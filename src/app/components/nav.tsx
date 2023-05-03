import { useEffect } from 'react';
import styles from './page.module.css'
const Navbar = () => {
  useEffect(() => {
    const hamburger = document.querySelector('#menu-btn');
    const menu = document.querySelector('#menu');

    const toggleMenu = () => {
      if (menu !== null) {
        menu.classList.toggle('hidden');
      }
    };

    if (hamburger !== null) {
      hamburger.addEventListener('click', toggleMenu);
    }

    return () => {
      if (hamburger !== null) {
        hamburger.removeEventListener('click', toggleMenu);
      }
    };
  }, []);

  return (
    <nav className="relative container mx-auto p-6">
      {/* navbar content */}
    </nav>
  );
};

export default Navbar;

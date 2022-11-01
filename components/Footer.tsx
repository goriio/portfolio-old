import { my } from '@/data';
import { FaArrowUp } from 'react-icons/fa';
import { animateScroll } from 'react-scroll';

export function Footer() {
  return (
    <footer className="flex items-center justify-between mb-4 text-xs text-gray-500">
      <span>
        {new Date().getFullYear()}. {my.name}
      </span>
      <span
        className="flex items-center gap-1 hover:text-gray-800 active:text-gray-900 transition ease-in-out cursor-pointer"
        onClick={animateScroll.scrollToTop}
      >
        <FaArrowUp />
        <span>Back to top</span>
      </span>
    </footer>
  );
}

import Link from 'next/link';

const BottomNavigation = () => {
  return (
    <nav className=" bg-gray-800 text-white py-2">
      <div className="container mx-auto flex justify-around">
        <NavLink href="/" label="Home" />
        <NavLink href="/about" label="About" />
        <NavLink href="/services" label="Services" />
        <NavLink href="/contact" label="Contact" />
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; label: string }> = ({
  href,
  label
}) => {
  return (
    <Link href={href}>
      <div className="px-4 py-2 hover:text-gray-300 transition-colors duration-200">
        {label}
      </div>
    </Link>
  );
};

export default BottomNavigation;

/* This example requires Tailwind CSS v2.0+ */
const navigation = {
  main: [
    { name: 'Hiba', href: 'https://github.com/hiba-machfej' },
    { name: 'Mohammed', href: 'https://github.com/mhassanist' },
    { name: 'Rasha', href: 'https://github.com/rashaabdulrazzak' }
  ]
};

export default function Footer() {
  return (
    <footer className="">
      <div className="text-gray-900 dark:text-white max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <p className="px-2 py-2">
            Made with<span className="px-1">❤️</span> by
          </p>

          {navigation.main.map(item => (
            <div key={item.name} className="px-2 py-2">
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-base hover:text-green">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}

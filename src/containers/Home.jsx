import { Link } from 'react-router-dom';
import CardsSection from '../components/CardsSection';

export default function Home() {
  const sections = [
    // {
    //   title: 'Smart Contracts',
    //   description: 'Explore NEAR Smart Contracts example in both AssemblyScript and Rust',
    //   link: '/soon'
    // },
    {
      title: 'Frontend',
      description: 'Learn how to connect your NEAR smart contract in your favorite framework',
      link: '/frontend'
    }
    // {
    //   title: 'Hacks',
    //   description: 'Tricks and Hacks to speed your coding journey with NEAR',
    //   link: '/soon'
    // }
  ];

  return (
    <div className="mb-32 relative transition-colors duration-500 dark:bg-purples bg-gradient-radial from-greens-100 to-greens-50 dark:from-purples-red dark:to-purples h-screen pt-20">
      <div className="relative pt-6 pb-16 sm:pb-24 my-20">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center ">
            <h1 className="text-4xl tracking-tight font-extrabold text-darkGreen dark:text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">An introduction to NEAR with simple examples</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-900 dark:text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">Select your desired learning path</p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow w-1/2">
                <Link to="/example-list/as" className="w-full flex items-center justify-center px-8 py-3  text-base font-medium rounded-md text-gray-900 bg-green hover:bg-darkGreen md:py-4 md:text-lg md:px-10" type="button">
                  AssemblyScript
                </Link>
              </div>
              {/* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 w-1/2">
                <Link to="/example-list/rust" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-gray-900  bg-green hover:bg-darkGreen md:py-4 md:text-lg md:px-10" type="button">
                  Rust
                </Link>
              </div> */}
            </div>
          </div>
        </main>
        <div className="flex flex-col items-center justify-center mt-20">
          <svg class="animate-bounce w-8 h-8 text-green-600 mt-12 text-center dark:text-white text-green" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto text-center mt-52">
          <div className="mb-16">
            <h1 className="text-4xl tracking-tight font-bold text-darkGreen">Deepen your NEAR knowledge</h1>
            <p className="mb-3 max-w-md mx-auto text-base text-gray-900 dark:text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">Explore and get fluent in NEAR's Ecosystem</p>
          </div>
          <CardsSection sections={sections} />
        </div>
      </div>
    </div>
  );
}

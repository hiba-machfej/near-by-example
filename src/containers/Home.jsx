import { Link } from 'react-router-dom';
export default function Home() {


  return (
    <div className="relative overflow-hidden dark:bg-purples bg-gradient-radial from-lavender-blue to-lavender dark:from-purples-red dark:to-purples h-screen pt-20">
      <div className="relative pt-6 pb-16 sm:pb-24 my-20">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center ">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">An introduction to NEAR with simple examples</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">Select your desired learning path</p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow w-1/2">
                <Link to="/example-list/as" className="w-full flex items-center justify-center px-8 py-3 border border-green text-base font-medium rounded-md text-white bg-green hover:bg-gray-50 md:py-4 md:text-lg md:px-10" type="button">
                  AssemblyScript
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 w-1/2">
                <Link to="/example-list/rust" className="w-full flex items-center justify-center px-8 py-3 border border-green text-base font-medium rounded-md text-white bg-green hover:bg-gray-50 md:py-4 md:text-lg md:px-10" type="button">
                  Rust
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

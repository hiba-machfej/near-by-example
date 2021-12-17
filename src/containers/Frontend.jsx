const Frontend = () => {
  return (
    <div className="mb-32 relative h-screen pt-20">
      <ol className="relative space-y-2 mb-16 mx-auto max-w-7xl mt-52 ">
     
        <li className="relative pl-10 xl:grid grid-cols-5 before:content-['hello'] before:block">
          <div className="mb-6 col-span-2 xl:mb-0">
            <h3 className="text-sm leading-6 text-gray-900 font-semibold mb-2">Create your project</h3>
            <div className="prose prose-sm">
              <p>
                Start by creating a new React project with <a href="https://create-react-app.dev/docs/getting-started">Create React App</a> if you don't have one already set up.
              </p>
            </div>
          </div>
          <div className="relative z-10 -ml-10 col-span-3 bg-gray-800 rounded-xl shadow-lg xl:ml-0">
            <div className="relative flex text-gray-400 text-xs leading-6">
              <div className="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">Terminal</div>
              <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                <div className="flex-auto -mr-px bg-gray-700/50 border border-gray-500/30 rounded-tl"></div>
              </div>
              <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
                <div className="relative flex -mr-2">
                  <button type="button" className="text-gray-500 hover:text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" className="w-8 h-8">
                      <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
                      <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <pre className="text-sm leading-6 text-gray-50 flex ligatures-none overflow-auto">
                <code className="flex-none min-w-full p-5">
                  <span className="flex">
                    <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3">
                      <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span className="flex-auto">npx create-react-app my-project</span>
                  </span>
                  <span className="flex">
                    <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3">
                      <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span className="flex-auto">cd my-project</span>
                  </span>
                </code>
              </pre>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Frontend;

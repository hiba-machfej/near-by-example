import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function Notification({ id }) {
  const { name } = useParams();
  const route = name === 'as' ? 'Rust' : 'AssemblyScript';

  return (
    <>
      <div aria-live="assertive" className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-end">
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          <Link to={`/example-list/${name === 'as' ? 'rust' : 'as'}/${id}`}>
            <div class="relative w-96">
              <div className="max-w-sm dark:text-white bg-gray-500 bg-opacity-30 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
                <div className="p-4 flex items-start">
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium">Check out the {route} example</p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex"></div>
                </div>
              </div>

              <span className="flex absolute h-5 w-5 top-0 right-0 -mt-1 -mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-green"></span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

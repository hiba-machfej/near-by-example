import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useContent } from '../composables';
import { useEffect } from 'react';
import Loader from '../components/Loader/Loader';

const SideBar = ({ setRecords }) => {
  const { name, id } = useParams();
  const { records, getResult, loading } = useContent();

  useEffect(() => {
    getResult(name);
    // eslint-disable-next-line
  }, [name]);

  useEffect(() => {
    setRecords(records);

    // eslint-disable-next-line
  }, [records]);

  return (
    <div className="hidden lg:block fixed inset-0 top-[5rem] w-[20rem] pb-10 px-8 overflow-y-auto scrollbar">
      {loading === 'loading' && <Loader />}
      <nav className="lg:text-sm lg:leading-6 relative mt-10">
        {/* <div className="sticky top-0 -ml-0.5 pointer-events-none"> */}
        <div class="bg-white dark:bg-gray-900 relative pointer-events-auto ">
          <button type="button" class="hidden w-full lg:flex items-center text-sm leading-6 text-gray-400 rounded-md ring-1 ring-gray-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-gray-300 dark:bg-gray-800 dark:highlight-white/5 dark:hover:bg-gray-700">
            <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-3 flex-none">
              <path d="m19 19-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
            </svg>
            Quick search...
          </button>
        </div>
        <ul className="mt-12 lg:mt-8 z-60">
          {records &&
            records.map((example, index) =>
              id ? (
                <Link to={`/example-list/${name}/${example.id}`} key={index}>
                  <li className="">
                    <h5 className="mb-8 lg:mb-3 font-semibold text-gray-900 dark:text-gray-200">{example.fields.title}</h5>
                  </li>
                </Link>
              ) : (
                <HashLink to={example.fields.order === 1 ? '#top' : `#section-${example.fields.order - 1}`} key={index}>
                  <li className="">
                    <h5 className="mb-8 lg:mb-3 font-semibold text-gray-900 dark:text-gray-200">{example.fields.title}</h5>
                  </li>
                </HashLink>
              )
            )}
        </ul>
        {/* </div> */}
      </nav>
    </div>
  );
};

export default SideBar;

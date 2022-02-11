import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useContent } from '../composables';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';

const SideBar = ({ setRecords }) => {
  const { name } = useParams();
  const { records, getResult, loading } = useContent();
  const [filteredData, setFilteredData] = useState(records);

  useEffect(() => {
    getResult(name);
    // eslint-disable-next-line
  }, [name]);

  useEffect(() => {
    setRecords(records);
    setFilteredData(records);
    // eslint-disable-next-line
  }, [records]);

  const handleSearch = event => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = records.filter(cat => cat.fields.title.toLowerCase().includes(`${value}`.toLowerCase()));
    setFilteredData(result);
  };
  return (
    <div className="hidden lg:block fixed inset-0 top-[5rem] w-[20rem] pb-10 px-8 overflow-y-auto scrollbar">
      {loading === 'loading' && <Loader />}
      <nav className="lg:text-sm lg:leading-6 relative mt-10">
        {/* <div className="sticky top-0 -ml-0.5 pointer-events-none"> */}
        <div className="bg-white dark:bg-gray-900 relative pointer-events-auto ">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="button" className="p-1 focus:outline-none focus:shadow-outline  text-gray-400">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input type="search" name="q" className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 w-full lg:flex items-center leading-6 ring-1 ring-gray-900/10 shadow-sm py-1 pl-2 pr-3" placeholder="Quick search..." autoComplete="off" onChange={event => handleSearch(event)} />
        </div>

        <ul className="mt-12 lg:mt-8 z-60">
          {filteredData &&
            filteredData.map((example, index) => (
              <Link to={`/example-list/${name}/${example.id}`} key={index}>
                <li className="">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-gray-900 dark:text-gray-200">{example.fields.title}</h5>
                </li>
              </Link>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;

import { useEffect } from 'react';
import Example from '../components/Example';
import Loader from '../components/Loader/Loader';
import { useParams } from 'react-router';
import { useContent } from '../composables';
import { Link } from 'react-router-dom';
import rocket from '../images/rocket.png';
import SideBar from '../components/SideBar';
import Links from '../components/Links';

export default function ExamplesList() {
  const { name } = useParams();
  const { records, getResult, loading } = useContent();

  useEffect(() => {
    getResult(name);
    // eslint-disable-next-line
  }, [name]);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <SideBar records={records} />

        <div className="lg:pl-[19.5rem]">
          <div className="max-w-3x pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
            <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
              {name === 'as' ? (
                <div id="top" className="text-center">
                  <h3 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">AssemblyScript</span>
                  </h3>

                  <p className="text-gray-900 dark:text-white mt-4">If you are coming from a JS background, AssemblyScript is the easiest way to start your journey in writing smart contract with NEAR</p>
                </div>
              ) : (
                <div className="text-center">
                  <h3 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                    <span className="block xl:inline"> Rust </span>
                  </h3>

                  <p className="text-gray-900 dark:text-white mt-4">Here you will find the steps to walk you through your journey in writing contract with Rust</p>
                </div>
              )}
              <div className="relative pt-6 ">
                <img className="mx-auto mt-5" src={rocket} alt="rocket" />
                <div className="mx-auto w-1 h-36 border-l border-dashed border-gray-900 dark:border-white" />
              </div>
            </main>
          </div>
          {loading === 'loading' && <Loader />}
          <div className="max-w-3x xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16 mx-auto bg-gradient-radial bg-greens-50 dark:bg-purples">
            {records &&
              records.map((example, index) => (
                <Link to={`/example-list/${name}/${example.id}`} key={index} id={`section-${example.fields.order}`}>
                  <Example example={example.fields} expId={example.id} />
                  <div className="mx-auto w-1 h-20 border-l border-dashed border-gray-900 dark:border-white" />
                </Link>
              ))}
          </div>
        </div>
        <Links />
      </div>

      {/* <div className="relative h-screen pt-20 dark:bg-purples bg-gradient-radial from-greens-100 to-greens-50 dark:from-purples-red dark:to-purples">
        
        <div className="relative pt-6 pb-16 sm:pb-24 mt-32 ">
          
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
            
            {name === 'as' ? (
              <div className="text-center">
                <h3 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">AssemblyScript</span>
                </h3>

                <p className="text-gray-900 dark:text-white mt-4">If you are coming from a JS background, AssemblyScript is the easiest way to start your journey in writing smart contract with NEAR</p>
              </div>
            ) : (
              <div className="text-center">
                <h3 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline"> Rust </span>
                </h3>

                <p className="text-gray-900 dark:text-white mt-4">Here you will find the steps to walk you through your journey in writing contract with Rust</p>
              </div>
            )}
            <div className="relative pt-6 pb-16 sm:pb-24 my-20">
              <img className="mx-auto mt-5" src={rocket} alt="rocket" />
              <div className="mx-auto w-1 h-36 border-l border-dashed border-gray-900 dark:border-white" />
            </div>
          </main>
        </div>
      </div>
      {loading === 'loading' && <Loader />}
      <div className="dark:bg-purples bg-gradient-radial from-greens-100 to-greens-50 dark:from-purples-red dark:to-purples">
        {records &&
          records.map((example, index) => (
            <Link to={`/example-list/${name}/${example.id}`} key={index}>
              <Example example={example.fields} expId={example.id} />
              <div className="mx-auto w-1 h-20 border-l border-dashed border-gray-900 dark:border-white" />
            </Link>
          ))}
      </div> */}
    </>
  );
}

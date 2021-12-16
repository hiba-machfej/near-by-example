import { useEffect } from 'react';
import Example from '../components/Example';
import Loader from '../components/Loader/Loader';
import { useParams } from 'react-router';
import { useContent } from '../composables';
// import { Link } from 'react-router-dom';
import rocket from '../images/rocket.png';

export default function ExamplesList() {
  const { name } = useParams();
  const { records, getResult, loading } = useContent();

  useEffect(() => {
    getResult(name);
    // eslint-disable-next-line
  }, [name]);

  useEffect(() => {
    console.log(records);
  }, [records]);

  return (
    <>
      <div className="relative overflow-hidden h-screen dark:bg-purples bg-gradient-radial from-lavender-blue to-lavender dark:from-purples-red dark:to-purples">
        <div className="relative pt-6 pb-16 sm:pb-24 mt-32 ">
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 ">
            <div className="text-center">
              <h3 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{name === 'as' ? 'Assembly Script' : 'Rust'}</span>
              </h3>

              <p className="text-gray-900 dark:text-white mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="relative pt-6 pb-16 sm:pb-24 my-20 my-4">
      
                  <img className="mx-auto mt-5" src={rocket} alt="rocket" />
          
              </div>
            </div>
          </main>
        </div>
      </div>
      {loading === 'loading' && <Loader />}
      <div className="dark:bg-purples bg-gradient-radial from-lavender-blue to-lavender dark:from-purples-red dark:to-purples">{records && records.map((example, index) => <Example key={index} example={example.fields}></Example>)}</div>
    </>
  );
}

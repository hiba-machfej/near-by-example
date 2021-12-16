import ReactMarkdown from 'react-markdown'
import { useEffect } from 'react';

//import remarkGfm from 'remark-gfm' 
import { useParams } from 'react-router';
import { useContent } from '../composables';

export default function ExampleDetail() {
  const { name,id } = useParams();
  const { record, getRecord, loading } = useContent();

  useEffect(() => {
    getRecord(name,id);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(record);
  }, [record]);
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
        <div className="relative h-full max-w-7xl mx-auto"></div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center ">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">hey {record && record.title}</span>
            </h1>
           
          </div>
        </main>
      </div>
      <div>
      <ReactMarkdown>
               {record && record.code}
      </ReactMarkdown>
      </div>
    </div>
  );
}

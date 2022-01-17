// import '../App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import CopyUrlButton from '../components/CopyButton';
import { useContent } from '../composables';
import { useEffect } from 'react';
import Loader from '../components/Loader/Loader';

const Frontend = () => {
  const { records, getResult, loading } = useContent();

  useEffect(() => {
    getResult('frontend');
    // eslint-disable-next-line
  }, []);

  return (
    <div className="mb-32 relative h-screen pt-20">
      {loading === 'loading' && <Loader />}
      <ol className="relative space-y-2 mb-16 mx-auto max-w-7xl mt-52">
        {records &&
          records.map((record, index) => {
            return (
              <li key={index} className={`relative pl-10 xl:grid grid-cols-5 gap-16    pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-gray-200 dark:after:bg-white`}>
                <span className='absolute left-0 flex items-center justify-center w-[calc(1.375rem+1px)] h-[calc(1.375rem+1px)] text-[0.625rem] font-bold text-gray-700 rounded-md shadow-sm ring-1 ring-gray-900/5 bg-white dark:bg-gray-700 dark:text-gray-200 dark:ring-0 dark:shadow-none dark:highlight-white/5'>{record.fields.order}</span>
                <div className="mb-6 col-span-2 xl:mb-0">
                  <h4 className="text-sm leading-6 text-gray-900 font-semibold mb-2 dark:text-white">{record.fields.title}</h4>

                  <div className="prose prose-gray prose-sm dark:text-white">
                    <ReactMarkdown
                      children={record.fields.instruction}
                      components={{
                        a(props) {
                          return (
                            <a href={props.href} target="_blank" rel="noopener noreferrer nofollow" className="underline">
                              {props.children}
                            </a>
                          );
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="relative z-10 -ml-10 col-span-3 ">
                  <div className="relative">
                    <ReactMarkdown
                      children={record.fields.code}
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || '');
                          return !inline && match ? (
                            <div className="relative shadow-lg ">
                              <div className="absolute top-2 right-0 h-8 flex items-center pr-4 ">
                                <div className="relative flex -mr-2">
                                  <CopyUrlButton code={String(children).replace(/(```)+([^\s]+)?|(~~~)+([^\s]+)?/g, '')} />
                                </div>
                              </div>
                              <SyntaxHighlighter children={String(children).replace(/\n$/, '')} className="rounded-lg bg-gray-900" style={vscDarkPlus} language={match[1]} {...props} />
                            </div>
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          );
                        }
                      }}
                    />
                  </div>
                </div>
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default Frontend;

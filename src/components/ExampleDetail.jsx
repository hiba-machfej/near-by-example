import ReactMarkdown from 'react-markdown';
import { useEffect } from 'react';
import Loader from '../components/Loader/Loader';
import { useParams } from 'react-router';
import { useContent } from '../composables';
import '../App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import Notification from './Notification';

export default function ExampleDetail() {
  const { name, id } = useParams();
  const { record, getRecord, loading } = useContent();

  useEffect(() => {
    getRecord(name, id);

    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    console.log(record);
  }, [record]);

  return (
    <div className="relative pt-20 bg-gradient-radial from-greens-50 to-white dark:from-purples-red dark:to-purples h-screen">
      {loading === 'loading' && <Loader />}
      <div className="relative pt-6 pb-16 sm:pb-24 mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <main className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl mt-32">
            <span className="block xl:inline">{record && record.title}</span>
          </h1>
        </main>
        <div className="code-block">
          {record && (
            <ReactMarkdown
              children={record.code}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter children={String(children).replace(/\n$/, '')} className="code" style={vscDarkPlus} language={match[1]} PreTag="div" {...props} />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                }
              }}
            />
          )}
        </div>
        {/* <Notification id={record && record.related} /> */}
      </div>
    </div>
  );
}

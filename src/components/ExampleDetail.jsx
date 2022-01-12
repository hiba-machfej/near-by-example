import ReactMarkdown from 'react-markdown';
// import { useEffect } from 'react';
import Loader from '../components/Loader/Loader';
import { useParams } from 'react-router';
import { useContent } from '../composables';
import '../App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import Notification from './Notification';
import SideBar from '../components/SideBar';
import Links from '../components/Links';
import { useEffect, useState } from 'react';

export default function ExampleDetail() {
  const { name, id } = useParams();
  const { record, getRecord, loading } = useContent();

  useEffect(() => {
    getRecord(name, id);

    // eslint-disable-next-line
  }, [id]);

  const [records, setRecords] = useState([]);

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <SideBar setRecords={setRecords} />

        {loading === 'loading' && <Loader />}
        <div className="relative lg:pl-[19.5rem] max-w-5x xl:max-w-none xl:ml-0 xl:mr-[10rem] xl:pr-16 pb-16 sm:pb-24 mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
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

        <Links />
      </div>
    </div>
  );
}

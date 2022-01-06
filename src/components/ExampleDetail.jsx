import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';
import { useParams } from 'react-router';
import { useContent } from '../composables';
import '../App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getRecordById } from '../services';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export default function ExampleDetail() {
  const { name, id } = useParams();
  const { record, getRecord, loading } = useContent();
  const [rec, setRec] = useState('');
  const [openTab, setOpenTab] = React.useState(true);
  const tabs = [
    { name: 'Assembly', href: '#as', current: true },
    { name: 'Rust', href: '#rust', current: false }
  ];

  useEffect(() => {
    getRecord(name, id);

    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    console.log(record);
  }, [record]);

  return (
    <div className="relative pt-20 bg-gradient-radial from-lavender-blue to-lavender dark:from-purples-red dark:to-purples h-screen">
      {loading === 'loading' && <Loader />}
      <div className="relative pt-6 pb-16 sm:pb-24 mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <main className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl mt-32">
            <span className="block xl:inline">{record && record.title}</span>
          </h1>
        </main>
        {/*
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
        <Notification id={record && record.related} />
            */}
        <div>
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
            <select id="tabs" name="tabs" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" defaultValue={tabs.find(tab => tab.current).name}>
              {tabs.map(tab => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {tabs.map(tab => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    className={classNames(tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm')}
                    aria-current={tab.current ? 'page' : undefined}
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(tab.current);
                      getRecordById(tab.name, record.related).then(res => {
                        console.log('res', res);
                        setRec(res);
                      });
                    }}
                  >
                    {tab.name}
                  </a>
                ))}
              </nav>
            </div>
            <div id="as" className={openTab === true ? 'code-block' : 'hidden'}>
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
            <div id="rust" className={openTab === false ? 'code-block' : 'hidden'}>
              <p>test</p>

              {rec && (
                <ReactMarkdown
                  children={rec.code}
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
          </div>
        </div>
      </div>
    </div>
  );
}

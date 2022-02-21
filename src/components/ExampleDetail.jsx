import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useContent } from '../composables';
import '../App.css';

import Loader from '../components/Loader/Loader';
import ModalForm from '../components/ModalForm';
import SideBar from '../components/SideBar';
import Links from '../components/Links';
import CopyUrlButton from './CopyButton';

import ReactMarkdown from 'react-markdown';
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

  const [records, setRecords] = useState([]);
  const [open, setOpen] = useState(false);

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
              <div>
                {/* <ReactMarkdown children={record.content} /> */}

                <ReactMarkdown
                  children={record.code}
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
                          <SyntaxHighlighter children={String(children).replace(/\n$/, '')} className="code" style={vscDarkPlus} language={match[1]} {...props} />
                        </div>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
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
            )}
          </div>
          {/* <Notification id={record && record.related} /> */}
          <div className="flex justify-end mt-20">
            <button className="text-white" onClick={() => setOpen(true)}>
              Report a problem
            </button>
          </div>
        </div>

        {record && <ModalForm open={open} setOpen={setOpen} />}

        <Links />
      </div>
    </div>
  );
}

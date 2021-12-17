import { Link } from 'react-router-dom';

export default function CardsSection({ sections }) {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sections.map(section => (
        <Link to={`${section.link}`} key={section.index}>
          <li className="col-span-1 rounded-lg shadow h-52 m-2 cursor-pointer bg-white tbg-opacity-50 dark:bg-gray-500 dark:bg-opacity-20 text-black dark:text-white p-5 hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-green">{section.title}</h1>
            <p className="pt-5 text-l">{section.description}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}

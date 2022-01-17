import { Link } from 'react-router-dom';

export default function CardsSection({ sections }) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sections.map((section, index) => (
        <Link to={`${section.link}`} key={index}>
          <li className="col-span-1 rounded-lg shadow h-52 m-2 cursor-pointer bg-white dark:bg-gray-500  text-black dark:text-white dark:bg-opacity-20 p-5 hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-green">{section.title}</h1>
            <p className="pt-5 text-l">{section.description}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}

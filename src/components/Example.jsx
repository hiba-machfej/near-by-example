import '../App.css';

export default function Example(props) {
  const { title, short_description, difficulty } = props.example;
  // const id = props.expId;

  return (
    <div className="relative">
      <div className="container flex flex-col items-center justify-center mx-auto">
        <div className="flex flex-col items-center card m-2 cursor-pointer bg-white dark:bg-gray-500 dark:bg-opacity-20 rounded-lg text-white p-5 hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 w-96 h-56">
          <div className="self-end flex items-center">
            <span className="text-sm text-green font-mono inline rounded-full px-2 align-top float-right animate-pulse">{difficulty}</span>
            <div className="rounded-full bg-green w-4 h-4"></div>
          </div>

          <h2 className="my-4 text-3xl font-extrabold mb-2 text-center text-black dark:text-white hover:text-green ">{title}</h2>
          <p className="mt-3 font-mono text-sm text-black dark:text-white transition-all duration-200 text-center">{short_description}</p>
        </div>
      </div>
    </div>
  );
}

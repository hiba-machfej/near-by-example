import '../App.css';

export default function Example(props) {
  const { title, description } = props.example;

  return (
    <div className="relative overflow-hidden ">


      <div className="container flex flex-col items-center justify-center mt-4 mx-auto">
        <div className="flex flex-col items-center card m-2 cursor-pointer bg-gray-500 bg-opacity-20 rounded-lg text-white p-5 hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 w-96 h-52">
          <div className="self-end flex items-center">
            <span className="text-sm text-green font-mono inline rounded-full px-2 align-top float-right animate-pulse">Easy</span>
            <div className="rounded-full bg-green w-4 h-4"></div>
          </div>

          <h2 className="my-4 text-3xl font-extrabold mb-2 ">{title}</h2>
          <p className="mt-3 font-mono text-sm text-pinkswan hover:text-gray-900 transition-all duration-200">{description}</p>
        </div>
      </div>
    </div>
  );
}

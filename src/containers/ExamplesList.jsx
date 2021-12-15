import Example from "../components/Example";
import { useParams } from 'react-router'
export default function ExamplesList({examples}) {
  const { name } = useParams();  
  return (
    <div className="relative bg-gray-50 overflow-hiddenbg-white dark:bg-purples">
    <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
        <div className="relative h-full max-w-7xl mx-auto bg-purples-red">
         
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center ">
            <h3 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">{name}</span>
            </h3>
            <p className="text-gray-900 dark:text-white mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              {
                examples.map((example) => (        
                <Example key={example.id}  example = {example} />              
                 ))
              }           
          </div>
        </main>
      </div>
    </div>
  );
}
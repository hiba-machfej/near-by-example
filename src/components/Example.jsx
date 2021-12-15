import '../App.css'
export default function Example(props) {
  const {title,description} = props.example
  return (
    <div className="relative bg-purples-red overflow-hiddenbg-white dark:bg-purples-red">
   

      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">         
          <img class="mx-auto mt-5" src="https://img.icons8.com/external-justicon-blue-justicon/64/000000/external-rocket-science-justicon-blue-justicon.png" alt="rocket"/>
        </main>
      </div>

     
  <div class="container flex flex-col items-center justify-center mt-4 mx-auto">
    <div class="flex justify-between items-center step-element">
    
         
      <div class="card m-2 cursor-pointer border border-revolver bg-revolver rounded-lg text-white p-5 hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 step-number">
        <div class="m-3">
          <h2 class="text-lg mb-2 ">{title}
         <span class="text-sm text-teal font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">Easy</span></h2>
         <p class="font-light font-mono text-sm text-pinkswan hover:text-gray-900 transition-all duration-200">{description}</p>
        </div>
      </div>
      
    </div>
    <div class="flex justify-between items-center step-element">
    
         
      <div class="card m-2 cursor-pointer border border-revolver bg-revolver rounded-lg text-white p-5 hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 step-number">
        <div class="m-3">
          <h2 class="text-lg mb-2 ">{title}
         <span class="text-sm text-teal font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">Easy</span></h2>
         <p class="font-light font-mono text-sm text-pinkswan hover:text-gray-900 transition-all duration-200">{description}</p>
        </div>
      </div>
      
    </div>
  </div>
  </div>
    
  );
}
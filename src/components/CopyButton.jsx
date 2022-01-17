import UseCopyToClipboard from './UseCopyToClipboard';

const CopyUrlButton = ({ code }) => {
  const [copyCodeStatus, copyCode] = UseCopyToClipboard(code);
  let buttonText = 'Copy URL';

  console.log()
  console.log(code)
  if (copyCodeStatus === 'copied') {
    buttonText = 'Copied';
  } else if (copyCodeStatus === 'failed') {
    buttonText = 'Copy failed!';
  }

  return (
    <>
      <button onClick={copyCode} type="button" className="text-gray-500 hover:text-gray-400 cursor-pointer">
        <svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" className="w-8 h-8">
          <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
          <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
        </svg>
      </button>
      {copyCodeStatus === 'copied' && (
        <div class="absolute bottom-full left-1/2 mb-3.5 pb-1 -translate-x-1/2">
          <div class="relative bg-darkGreen text-white font-mono text-[0.625rem] leading-6 font-medium px-1.5 rounded-lg" data-reach-alert="true">
            Copied
            <svg aria-hidden="true" width="16" height="6" viewBox="0 0 16 6" class="text-darkGreen absolute top-full left-1/2 -mt-px -ml-2">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15 0H1V1.00366V1.00366V1.00371H1.01672C2.72058 1.0147 4.24225 2.74704 5.42685 4.72928C6.42941 6.40691 9.57154 6.4069 10.5741 4.72926C11.7587 2.74703 13.2803 1.0147 14.9841 1.00371H15V0Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
      )}
    </>
  );

  // return <button onClick={copyUrl}>{buttonText}</button>
};

export default CopyUrlButton;

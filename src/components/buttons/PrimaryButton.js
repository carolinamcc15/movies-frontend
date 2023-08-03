export const PrimaryButton = ({ text, type = 'button', onClickHandler = () => {} }) => {
  return (
    <button
      type={type}
      onClick={onClickHandler}
      className='px-6 py-2 bg-sky-500 font-semibold text-sm tracking-wider whitespace-nowrap text-white uppercase rounded-md border-2 border-transparent cursor-pointer hover:bg-primary-700 transform hover:scale-[1.01] transition duration-300 ease-in-out hover:opacity-80'
    >
      {text}
    </button>
  );
};

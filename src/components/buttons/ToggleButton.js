export const ToggleButton = ({ active, onToggle }) => {
  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input type='checkbox' checked={active} className='sr-only peer' onChange={onToggle} />
      <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
    </label>
  );
};

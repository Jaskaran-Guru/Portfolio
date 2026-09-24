const Alert = ({ type, text }) => {
  return (
    <div className='fixed top-24 left-0 right-0 z-50 flex justify-center items-center px-4 pointer-events-none'>
      <div
        className={`py-3 px-6 shadow-2xl rounded-full border ${
          type === "danger"
            ? "bg-red-600 border-red-400 text-white"
            : "bg-blue-600 border-blue-400 text-white"
        } items-center leading-none flex gap-3 pointer-events-auto transition-all`}
        role='alert'
      >
        <span
          className={`rounded-full ${
            type === "danger" ? "bg-red-800" : "bg-blue-800"
          } uppercase px-2.5 py-1 text-xs font-bold tracking-wide`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </span>
        <span className='font-medium text-sm'>{text}</span>
      </div>
    </div>
  );
};

export default Alert;

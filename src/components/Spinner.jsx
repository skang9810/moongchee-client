import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-60">
      <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;

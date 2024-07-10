// SearchModal.js
import React from "react";

const SearchModal = ({ searchResults, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 w-[50%]">
        <button
          className="text-right text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          &times;
        </button>
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <div key={result.id} className="p-2 border-b border-gray-200">
              <h3 className="text-lg font-semibold">{result.title}</h3>
              <p className="text-sm">{result.content}</p>
            </div>
          ))
        ) : (
          <p className="text-sm">No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchModal;

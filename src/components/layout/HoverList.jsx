import React, { useState } from 'react';

const HoverList = () => {
    
    return (
        <div className="relative">
          <button className="bg-gray-800 text-gray-300 rounded-md px-3 py-2 inline-flex items-center">
            <span>Produto</span>
            <svg className="fill-current h-4 w-4 ml-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l4-4 4 4"></path></svg>
          </button>
          <ul className="absolute hidden text-gray-700 pt-1">
            <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Produto 1</a></li>
            <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Produto 2</a></li>
            <li className=""><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Produto 3</a></li>
          </ul>
        </div>
      );
    };

export default HoverList;

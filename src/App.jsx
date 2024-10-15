import React from "react";
import sunsetImage from "./public/aaaa.jpg"

export default function App() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={sunsetImage} alt="Sunset in the beach" className="w-full h-1/2 bg-blue-400 rounded-t-md" />
      <div className="px-6 py-4">
        <h1 className="font-bold text-2xl mb-2">The coldest sunset</h1>
        <p className="text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>        
        <div className=" py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold mr-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold mr-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold mr-2">#winter</span>
        </div>
      </div>
    </div>
  
  
    /*<div class="container mx-auto">
      <button class=" bg-blue-500 sm:bg-orange-400 lg:bg-green-500 hover:bg-red-700 text-white font-sans
      w-40 h-12 rounded-md mt-5">
        Log in
      </button>
      
      <h1 class="uppercase text-green-500 text-xl text-center">Hola soy un h1</h1>
      <h2 class="text-green-700 text-xl text-right">Hola soy un h2</h2>
      <h3 class=" text-green-900 text-xl text-left">Hola soy un h3</h3>
      <h4 class="bg-pink-500 text-white text-center py-5 px-10 m-5">Hola soy h5</h4>
      <div class="shadow-lg m-5 p-5 border-2 rounded-md">
        <p class="text-xl sm:text-xs text-justify">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  */



  );
}
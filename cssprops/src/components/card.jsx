import React from 'react';
import { useState } from 'react';

function Card({userName, btnText="Default"}) {
     console.log(userName);
    return(
        <>
        <figure className="md:flex bg-slate-500 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://v3.tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" alt="" width="384" height="512" />
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {userName}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-red-700 font-bold py-2 px-4 rounded">{btnText}</button>
    </figcaption>
  </div>
</figure>
        </>
    )

}

export default Card;
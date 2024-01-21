"use client";

import { useMediaQuery } from "react-responsive";

const Reasons = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" }, undefined);

  return (
    <div className="flex flex-wrap gap-5 xl:gap-8 justify-center w-full py-8">
      {(isMobile ? [1, 2, 3, 4] : [1, 2, 3, 4, 5, 6]).map((item, index) => (
        <div
          key={index}
          className="bg-[#94bdcbd4] w-[30rem] lg:w-[25rem] xl:w-[32rem] px-5 py-5 rounded-xl max-h-[30rem] drop-shadow-2xl text-md xl:text-lg"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          nobis laborum odio officiis, soluta alias maiores earum excepturi in
          aspernatur praesentium
        </div>
      ))}
    </div>
  );
};

export default Reasons;

"use client";

import { useState } from "react";
import { reviews } from "../API/reviews";
import { IoStar } from "react-icons/io5";
import { Fade } from "react-awesome-reveal";

function CarouselReviewsComp() {
  const data = reviews;

  const [isMoved, setIsMoved] = useState(0);

  return (
    <>
      <div className="overflow-x-hidden max-sm:overflow-x-scroll scrollbar-none relative">
        <div
          className="grid grid-cols-4 gap-4  w-[133.3%] max-xl:w-[200%] max-sm:w-[300%] px-2 transition-all duration-300 py-4"
          style={{ transform: `translateX(-${isMoved}%)` }}
        >
          {data.map((rev) => (
            <div key={rev.id} className="h-full reviewsBorder ml-4 ">
              <div className="p-6 rounded-xl h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-5xl text-primary">”</h3>
                  <p className="max-md:text-sm">{rev.comment}</p>
                </div>
                <div className="pt-3 flex justify-between gap-4 mt-3">
                  <div>
                    <p className="self-end text-sm">{rev.name},</p>
                    <p className="self-end text-sm">{rev.place}</p>
                  </div>
                  <div className="flex gap-1 self-end">
                    {Array.from({ length: rev.stars }).map((_, index) => (
                      <span key={index}>
                        <IoStar className="max-md:text-sm text-primary" />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 right-0 bg-border text-background max-xl:hidden">
          <button
            className={`text-xl p-2 cursor-pointer transition-all duration-300 ${isMoved > 0 && "hover:bg-primary"}`}
            onClick={() => setIsMoved(0)}
          >
            {"<"}
          </button>
          <button
            className={`text-xl p-2 cursor-pointer transition-all duration-300 ${isMoved === 0 && "hover:bg-primary"} `}
            onClick={() => setIsMoved(25)}
          >
            {">"}
          </button>
        </div>
        <div className="absolute top-0 right-0 bg-border text-background xl:hidden max-sm:hidden">
          <button
            className={`text-xl p-2 cursor-pointer transition-all duration-300 ${isMoved > 0 && "hover:bg-primary"}`}
            onClick={() => setIsMoved(0)}
          >
            {"<"}
          </button>
          <button
            className={`text-xl p-2 cursor-pointer transition-all duration-300 ${isMoved === 0 && "hover:bg-primary"} `}
            onClick={() => setIsMoved(22.1)}
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
}

export default CarouselReviewsComp;

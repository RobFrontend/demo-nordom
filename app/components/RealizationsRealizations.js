"use client";

import { useState } from "react";
import { realizations } from "../API/realizations";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

function RealizationsRealizations() {
  const [isActiveFilter, setIsActiveFilter] = useState("all");
  const data = realizations;

  const filters = [...new Set(data.map((d) => d.category))];
  console.log(filters);
  const filteredData =
    isActiveFilter === "all"
      ? data
      : data.filter((d) => d.category === isActiveFilter);

  return (
    <section className="px-16 py-10">
      <Fade triggerOnce delay={250} duration={1500}>
        <div className="pb-3 flex justify-between items-center border-b border-border/50 w-full">
          <div className="flex gap-4 h-full ">
            <button
              className={`${isActiveFilter === "all" ? "btn1" : "btn1-notChoosed"} uppercase cursor-pointer h-full`}
              onClick={() => setIsActiveFilter("all")}
            >
              Wszystkie{" "}
              <span className="text-sm opacity-60 pl-3">
                ({data.filter((d) => d.category).length})
              </span>
            </button>
            {filters.map((cat) => (
              <button
                key={cat}
                className={`${isActiveFilter === cat ? "btn1" : "btn1-notChoosed"} cursor-pointer h-full`}
                onClick={() => setIsActiveFilter(cat)}
              >
                {cat.split("-").join(" ").toUpperCase()}{" "}
                <span className="text-sm opacity-60 pl-3">
                  ({data.filter((d) => d.category === cat).length})
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 pt-5">
          {filteredData.map((d) => (
            <Link
              key={d.id}
              href={d.link}
              className="transition-all duration-300 hover:opacity-80 shadow-sm pb-4 hover:shadow-md hover:scale-[1.01] transform-gpu "
            >
              <Image src={d.image} alt={`Realizacja domu - ${d.place}`} />
              <h3 className="text-xl font-semibold uppercase mt-4 mx-4 mb-2">
                {d.place}
              </h3>
              <div className="flex justify-between mx-4">
                <p className="opacity-80">
                  {d.category.split("-").join(" ").toUpperCase()}{" "}
                  <span className="px-2">|</span> {d.size} m<sup>2</sup>
                </p>
                <p className="font-semibold">→</p>
              </div>
            </Link>
          ))}
        </div>
      </Fade>
    </section>
  );
}

export default RealizationsRealizations;

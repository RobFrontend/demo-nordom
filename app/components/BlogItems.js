"use client";
import { blogData } from "@/app/API/blog";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { MdOutlineCalendarMonth } from "react-icons/md";
function BlogItems() {
  const data = blogData;
  const [isActiveFilter, setIsActiveFilter] = useState("all");
  const filters = [...new Set(data.map((d) => d.category))];
  console.log(filters);
  const filteredData =
    isActiveFilter === "all"
      ? data
      : data.filter((item) => item.category === isActiveFilter);

  return (
    <section className="py-10 px-16">
      <Fade delay={150} triggerOnce>
        {data
          .filter((item) => item.pinned)
          .map((item) => (
            <div
              key={item.id}
              className="bg-background-alt grid grid-cols-2 gap-8"
            >
              <div>
                <Image src={item.image} alt={item.title} />
              </div>
              <Fade delay={250} triggerOnce className="flex ">
                <div className="py-6 flex flex-col justify-between">
                  <div>
                    <p className="uppercase tracking-wider text-lg  font-bold">
                      Artykuł polecany
                    </p>
                    <h2 className="text-5xl tracking-tight font-semibold mt-4 mb-6">
                      {item.title}
                    </h2>
                    <p>{item.description}</p>
                    <div className="flex gap-2  opacity-80 mt-8">
                      <MdOutlineCalendarMonth className="w-8 h-8" />
                      <span className="self-end">{item.date}</span>
                    </div>
                  </div>
                  <Link
                    href={item.link}
                    className="inline-flex items-center mt-5 text-primary uppercase tracking-wider font-semibold transition-all duration-300 hover:opacity-75 w-max mb-8"
                  >
                    Czytaj artykuł
                    <span className="pl-3">→</span>
                  </Link>
                </div>
              </Fade>
            </div>
          ))}
      </Fade>
      <div className="flex flex-col gap-8 mt-10">
        <Fade triggerOnce>
          <div className="flex gap-6 h-full items-center">
            <p className="uppercase">Filtruj tematy:</p>
            <button
              className={`${isActiveFilter === "all" ? "btn1" : "btn1-notChoosed"} uppercase cursor-pointer h-full`}
              onClick={() => setIsActiveFilter("all")}
            >
              Wszystkie
            </button>
            {filters.map((cat) => (
              <button
                key={cat}
                className={`${isActiveFilter === cat ? "btn1" : "btn1-notChoosed"} cursor-pointer h-full`}
                onClick={() => setIsActiveFilter(cat)}
              >
                {cat.split("-").join(" ").toUpperCase()}
              </button>
            ))}
          </div>
        </Fade>
        <div className="grid grid-cols-3 gap-8">
          {filteredData.map((item) => (
            <Fade key={item.id} triggerOnce className="flex">
              <div className="flex flex-col justify-between">
                <div>
                  <Image src={item.image} alt={item.title} />
                  <p className="uppercase tracking-wider text-sm  font-bold text-primary mt-2">
                    {item.category}
                  </p>
                  <p className="text-xl tracking-tight  mt-1 mb-2 font-numbers">
                    {item.title}
                  </p>
                  <p>{item.description}</p>
                </div>
                <div className="flex gap-4 justify-between pt-2">
                  <span className=" opacity-80 text-sm">{item.date}</span>
                  <Link
                    href={item.link}
                    className="inline-flex  text-primary uppercase tracking-wider text-sm font-semibold transition-all duration-300 hover:opacity-75 w-max"
                  >
                    Czytaj artykuł
                    <span className="pl-3">→</span>
                  </Link>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
export default BlogItems;

import Link from "next/link";
import { Fade } from "react-awesome-reveal";

function ProcesHarm() {
  return (
    <section className="px-16 py-12 overflow-hidden">
      <Fade triggerOnce>
        <div className="flex gap-8 justify-center">
          <div className="flex flex-col justify-between">
            <div>
              <p className="uppercase tracking-wider text-lg  font-bold text-primary ">
                Harmonogram
              </p>
              <h2 className="text-5xl font-semibold tracking-tight mb-6">
                Jesteś na bieżąco, <br></br>na każdym etapie
              </h2>
              <p>
                Każdy projekt realizujemy według ustalonego harmonogramu.{" "}
                <br></br>
                Oto przykładowy plan budowy domu jednorodzinnego. <br></br>
              </p>
            </div>
            <Link
              href="/poradnik"
              className="inline-flex items-center mt-5 text-primary uppercase tracking-wider text-sm font-semibold transition-all duration-300 hover:opacity-75 w-max mb-8"
            >
              Poznaj czynniki wpływające na czas budowy
              <span className="pl-3">→</span>
            </Link>
          </div>
          <div className="schedule w-full">
            <div className="schedule-header">
              <span className="font-semibold text-sm opacity-80 text-primary">
                ETAP / TYGODNIE
              </span>
              <span>1</span>
              <span>5</span>
              <span>10</span>
              <span>15</span>
              <span>20</span>
              <span>25</span>
              <span>30</span>
              <span>35</span>
              <span>40</span>
              <span>45</span>
              <span>50</span>
            </div>

            <div className="schedule-row">
              <span>Projekt i formalności</span>
              <div className="timeline">
                <div className="bar bar-1" />
              </div>
            </div>

            <div className="schedule-row">
              <span>Stan surowy</span>
              <div className="timeline">
                <div className="bar bar-2" />
              </div>
            </div>
            <div className="schedule-row">
              <span>Instalacje</span>
              <div className="timeline">
                <div className="bar bar-3" />
              </div>
            </div>
            <div className="schedule-row">
              <span>Elewacja</span>
              <div className="timeline">
                <div className="bar bar-4" />
              </div>
            </div>
            <div className="schedule-row">
              <span>Wykończenie</span>
              <div className="timeline">
                <div className="bar bar-5" />
              </div>
            </div>
            <div className="schedule-row">
              <span>Odbiory i przekazanie</span>
              <div className="timeline">
                <div className="bar bar-6" />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default ProcesHarm;

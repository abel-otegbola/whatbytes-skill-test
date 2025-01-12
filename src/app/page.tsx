'use client'
import HTMLIcon from "@/assets/icons/html";
import Button from "@/components/button/button";
import Comparison from "@/components/charts/comparisonGraph";
import QuestionsDoughnut from "@/components/charts/questionsDoughnut";
import UpdateScores, { dataProps } from "@/components/modals/updateScores";
import Progress, { progressProps } from "@/components/progress/progress";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState({ rank: 1, percentile: 90, score: 12 } as dataProps)
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="p-6 md:px-[3%] w-full">
      <h1 className="text-md mb-4">Skill Test</h1>
      <div className="flex lg:flex-nowrap flex-wrap gap-6 w-full">
        <div className="lg:w-[60%] w-full flex flex-col gap-6">

          <div className="flex md:flex-nowrap flex-wrap p-4 gap-6 items-center border border-gray-500/[0.2] rounded-lg">
            <HTMLIcon className="md:w-[64px] w-[32px]" />
            <div className="flex-1">
              <h2 className="font-bold mb-4 md:text-[16px] text-[14px]">Hyper Text Markup Language</h2>
              <div className="flex items-center flex-wrap gap-2 md:text-[12px]">
                <p>Questions: 08 </p>| <p>Duration: 15 mins</p> | <p>Submitted on 5 June 2021</p>
              </div>
            </div>
            <Button onClick={() => setOpenModal(true)}>Update</Button>
          </div>

          <div className="p-4 border border-gray-500/[0.2] rounded-lg">
            <h2 className="text-[16px] font-semibold">Quick Statistics</h2>

            <div className="grid grid-cols-3">
              <div className="flex flex-wrap gap-3 items-center p-4 pr-1 pl-4 border-r border-gray-500/[0.2]">
                <div className="flex bg-gray-500/[0.07] p-4 rounded-full">
                  <Image src="/cup.svg" alt="rank" width={20} height={20}/>
                </div>
                <div>
                  <h1 className="font-bold text-lg mb-1">{data.rank}</h1>
                  <p className="uppercase text-[10px] opacity-[0.7]">your rank</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 items-center p-4 pr-1 pl-4 border-r border-gray-500/[0.2]">
                <div className="flex bg-gray-500/[0.07] p-4 rounded-full">
                  <Image src="/note.svg" alt="rank" width={20} height={20}/>
                </div>
                <div>
                  <h1 className="font-bold text-lg mb-1">{data.percentile}%</h1>
                  <p className="uppercase text-[10px] opacity-[0.7]">percentile</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 items-center p-4 pr-1 pl-4">
                  <div className="flex bg-gray-500/[0.07] p-4 rounded-full">
                    <Image src="/success.svg" alt="rank" width={20} height={20} />
                  </div>
                  <div>
                    <h1 className="font-bold text-lg mb-1">{data.score}/15</h1>
                    <p className="uppercase text-[10px] opacity-[0.7]">correct answers</p>
                  </div>
              </div>
            </div>

          </div>
          

          <div className="p-4 border border-gray-500/[0.2] rounded-lg">
            <div className="flex justify-between gap-6 items-center mb-6">
              <div className="flex flex-col gap-6">
                <h2 className="text-[16px] font-semibold">Comparison Graph</h2>
                <p><b>You scored 90% percentile</b> which is lower than the average percentile 72% of all the engineers who took this assessment</p>
              </div>
              
              <div className="flex bg-gray-500/[0.07] p-4 rounded-full">
                <Image src="/analytics.svg" alt="rank" width={20} height={18} />
              </div>
            </div>

            
            <div className="relative flex items-center justify-center">
              <Comparison />
              <div style={{ left: 90 + "%" }} className="absolute w-[2px] h-[90%] top-0 bg-gray-200">

              </div>
              <p style={{ left: 90 -10 + "%" }} className="absolute w-fit p-2 bg-gray-200 top-[45%]">your percentile</p>
            </div>
          </div>
        </div>

        <div className="lg:w-[35%] w-full flex flex-col gap-6">
          <div className="md:p-[5%] p-6 border border-gray-500/[0.2] rounded-lg">
            <h2 className="text-[16px] font-semibold mb-4">Syllabus Wise Analysis</h2>

            <div className="flex flex-col">
              {
                [
                  { id: "0", label: "HTML Tools, Forms, History", percent: 80 },
                  { id: "1", label: "Tags & References in HTML", percent: 60 },
                  { id: "2", label: "Tables & References in HTML", percent: 24 },
                  { id: "3", label: "Tables & CSS Basics", percent: 96 },
                ]
                .map((progress: progressProps) => (
                  <Progress key={progress.id} { ...progress } />
                ))
              }
            </div>
          </div> 
          
          <div className="p-4 border border-gray-500/[0.2] rounded-lg">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between gap-6 items-center">
                <h2 className="text-[16px] font-semibold">Question Analysis</h2>
              <p className="text-primary font-bold">12/15</p>
              </div>
              <p><b>You scored 12 question correct out of 15.</b> However it still needs some improvements</p>
            </div>

            <div className="w-[150px] h-[150px] mx-auto my-8 realtive flex items-center justify-center">
              <QuestionsDoughnut />
              <Image src={"/direct-hit.svg"} alt="target-hit" className="absolute" width={32} height={32} />
            </div>

            {
              openModal ? 
                <UpdateScores data={data} setData={setData} setOpenModal={setOpenModal} img={<HTMLIcon width={36} height={36} />}/>
              : ""
            }
            
          </div>

        </div>
      </div>
    </div>
  );
}

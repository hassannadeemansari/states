'use client'

import { useState } from "react"
import { Faqs } from "./question"

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="flex flex-col gap-0.5 sm:gap-2">
      {Faqs.map((i, e) => (
        <div key={e}>
          <div
            onClick={() => toggle(e)}
            className="h-21 w-full bg-[#2D2D2D] hover:bg-[#414141] transition-all duration-300 cursor-pointer text-white sm:text-2xl text-lg flex justify-between items-center p-5"
          >
            <span>{i.question}</span>
            {openIndex === e ? (
              <img
                src="/cross.png"
                alt="close"
                className="sm:h-14 h-10 w-auto filter brightness-0 invert"
              />
            ) : (
              <img
                src="/Add.png"
                alt="open"
                className="sm:h-12 h-8 w-auto filter brightness-0 invert"
              />
            )}
          </div>

          {openIndex === e && (
            <p className="text-white sm:text-2xl text-lg p-7 bg-[#2D2D2D]">{i.answere}</p>
          )}
        </div>
      ))}
    </div>
  )
}

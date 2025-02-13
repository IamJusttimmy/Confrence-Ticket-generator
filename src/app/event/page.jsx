"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";

const handleNextClick = () => {
  if (selectedTicket) {
    <Link />;
  }
};

const Event = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const tickets = [
    { type: "REGULAR ACCESS", price: "Free", left: 20 },
    { type: "VIP ACCESS", price: "$50", left: 20 },
    { type: "VVIP ACCSESS", price: "$150", left: 20 },
  ];

  return (
    <div className="container">
      <div className="top-container ">
        <p className=" font-jeju ">Ticket Selection</p>
        <p className="font-roboto text-[16px]">step 1/3</p>
      </div>

      <div className="main-content">
        {/* Event Info */}
        <div
          className="bg-[#09242B] p-4 rounded-[24px] border border-[#0E464F] mb-4 text-center"
          style={{
            background: `radial-gradient(
              103.64% 57.39% at 14.02% 32.06%,
              rgba(36, 160, 181, 0.2) 0%,
              rgba(36, 160, 181, 0) 100%
            ), rgba(10, 12, 17, 0.1)`,
          }}
        >
          <h3 className="text-6xl items-center text-[#FAFAFA] font-road">
            Techember Fest"25
          </h3>
          <p className="text-gray-100 text-[12px]">
            Join us for an unforgettable experience at <br /> [Event Name]!
            Secure your spot now.
          </p>
          <p className="text-gray-100 text-[12px] mt-2">
            📍 [Event Location] || March 15, 2025 | 7:00 PM
          </p>
        </div>

        <hr className="h-1 bg-[#07373f] border-0 my-4" />

        {/* Ticket Type Selection */}
        <div className="mb-4">
          <h4 className="text-sm font-light mb-2">Select Ticket Type:</h4>
          <div className="grid md:grid-cols-2 gap-2 p-2 rounded-[24px] border border-[#07373f] bg-[#052228]">
            {tickets.map((ticket, index) => (
              <button
                key={index}
                className={`p-2 rounded-lg border border-[#07373F] ${
                  selectedTicket === ticket.type
                    ? "bg-[#197686] border-[#197686]"
                    : "bg-[#052228] border--[#197686]"
                } text-left `}
                onClick={() => setSelectedTicket(ticket.type)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-light">{ticket.type}</span>
                  <span className="px-2 py-1 bg-[#0E464F] text-white rounded-md text-sm font-semibold">
                    {ticket.price}
                  </span>
                </div>
                <p className="text-xs text-white">{ticket.left} left!</p>
              </button>
            ))}
          </div>
        </div>

        {/* Number of Tickets */}
        <div className="mb-4">
          <label className="text-sm font-medium">Number of Tickets</label>
          <select className="w-full bg-[#09242B] border border-[#07373F] p-2 rounded-md mt-1">
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons */}

        <Button
          leftText="Cancel"
          rightText="Next"
          onLeftClick={() => console.log("Cancel clicked")}
          onRightClick={() => console.log("Next clicked")}
        />
      </div>
    </div>
  );
};

export default Event;

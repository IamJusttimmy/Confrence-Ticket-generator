"use client";

import { useState } from "react";

const Event = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const tickets = [
    { type: "REGULAR ACCESS", price: "Free", left: 20 },
    { type: "VIP ACCESS", price: "$50", left: 20 },
    { type: "VVIP ACCSESS", price: "$150", left: 20 },
  ];

  return (
    <div className="bg-[#041E23] p-5 my-5 rounded-[40px] items-center max-w-[500px]  mx-auto text-white">
      <div className="flex items-center justify-between">
        <p className=" font-jeju ">Ticket Selection</p>
        <p className="font-roboto text-[16px]">step 1/3</p>
      </div>

      <div className="mt-4 p-4 rounded-[32px] border border-[#0e464f] bg-[#08252B] shadow-lg ">
        {/* Event Info */}
        <div className="bg-[#09242B] p-4 rounded-[24px] border border-[#0E464F] mb-4 text-center">
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
        <div className="items-center grid md:grid-cols-2 gap-4 bg-[#041E23] md:border md:border-[#07373F] rounded-[25px] px-5">
          <button className=" bg-transparent border border-[#24A0B5] text-[#24A0B5] py-2 rounded-md">
            Cancel
          </button>
          <button className=" bg-[#00B4D8] text-white py-2 rounded-md font-etxralight">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;

"use client";

import { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";
import Image from "next/image";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";

const Ticket = ({ ticketNumber = "1234567890" }) => {
  const router = useRouter();
  const barcodeRef = useRef(null);

  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, ticketNumber, {
        format: "CODE128",
        displayValue: true,
        lineColor: "#fff",
        width: 2,
        height: 50,
      });
    }
  }, [ticketNumber]);

  const handleBack = (e) => {
    console.log("go back to ticket selection");
    router.push("/attendee");
  };

  return (
    <div className="container">
      <div className="top-container">
        <p>Ready</p>
        <p>3/3</p>
      </div>
      <Progress value={100} />

      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-[32px] font-bold">Your Ticket is Booked!</h2>
          <p className="text-[16px] text-gray-300 font-light font-roboto">
            Check your email for a copy or you can <bold>download</bold>
          </p>
        </div>
        {/* Ticket Container */}
        <div className=" max-w-[300px] bg-[rgba(3, 30, 33, 0.10)] border border-[#24A0B5] rounded-[16px] my-6 p-[14px]">
          {/* Ticket Title */}
          <h3 className="flex text-[34px] items-center justify-center text-[#FAFAFA] font-road">
            Techember Fest '25
          </h3>

          {/* Event Details */}
          <div className="text-[10px] font-roboto text-center mt-2 space-y-1">
            <p className="flex items-center justify-center gap-2">
              📍 04 Rumens Road, Ikoyi, Lagos
            </p>
            <p className="flex items-center justify-center gap-2">
              📅 March 15, 2025 | 🕖 7:00 PM
            </p>
          </div>

          {/* User Image */}
          <div className="flex justify-center my-6">
            <div className="w-24 h-24 rounded-lg overflow-hidden bg-cyan-400/20 border-2 border-cyan-400/50">
              <div className="w-full h-full bg-[url('/placeholder-avatar.png')] bg-cover bg-center" />
            </div>
          </div>

          {/* Ticket Details */}
          <div className="bg-[#08343c] p-[4px] rounded-[8px] text-sm border-[#133d44] ">
            <div className="grid grid-cols-2   p-2">
              <div className="border-r border-b border-[#12464E]">
                <p className="text-white font-roboto text-[10px] opacity-[0.33]">
                  Enter your name
                </p>
                <p className="text-white font-roboto text-[12px] ">
                  Avi Chukwu
                </p>
              </div>
              <div className="border-l border-b border-[#12464E] pl-1">
                <p className="text-white font-roboto text-[10px] opacity-[0.33]">
                  Enter your email *
                </p>
                <p className="text-white font-roboto text-[12px]">
                  User@email.com
                </p>
              </div>
              <div className="border-r border-b border-[#12464E]">
                <p className="text-white font-roboto text-[10px] opacity-[0.33]">
                  Ticket Type:
                </p>
                <p className="text-white font-roboto text-[12px]">VIP</p>
              </div>
              <div className="border-l border-b border-[#12464E] pl-1">
                <p className="text-white font-roboto text-[10px] opacity-[0.33]">
                  Ticket for:
                </p>
                <p className="text-white font-roboto text-[12px]">1</p>
              </div>
            </div>

            <div>
              <p className="text-white font-roboto text-[10px] opacity-[0.33]">
                Special request?
              </p>
              <p className="text-white font-roboto text-[12px]">
                Nil? Or the user's sad story gets this space, max of three rows.
              </p>
            </div>
          </div>

          {/* Barcode */}
          <div className="mt-6 flex justify-center">
            <svg ref={barcodeRef} className="mx-auto" />

            {/* <p className="mt-2 text-sm">Ticket No: {ticketNumber}</p> */}
          </div>
        </div>
      </div>
      <Button
        leftText="Back"
        rightText="Get My Ticket"
        onLeftClick={handleBack}
        onRightClick={() => {
          console.log("CLicked Download");
        }}
      />
    </div>
  );
};

export default Ticket;

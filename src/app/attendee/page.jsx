"use client";
import Image from "next/image";
import Button from "@/components/Button";

const AttendeeDetails = () => {
  return (
    <div className="container">
      <div className="top-container">
        <p>Attendee Details</p>
        <p>2/3</p>
      </div>
      <div className="main-content">
        <form action="" id="ticket-form">
          <div className="form-item upload p-[24px] bg-[#052228] border-[#07373f]">
            <label htmlFor="file-input">Upload Profile Photo</label>
            <div id="drop-area" className="upload-box mt-2 bg-[#0E464F]">
              <input
                type="file"
                id="file-input"
                className="file-input"
                accept="image/png, image/jpeg"
              />
              <div className="w-[150px] h-[150px] bg-[#0E464F] p-[24px] rounded-[32px] ">
                <Image
                  src="upload.svg"
                  alt="
                  upload"
                  className="items-center"
                  width={30}
                  height={30}
                />
                <div id="message-action" className="text-sm">
                  Darg and Drop or Click to Upload
                </div>
              </div>
            </div>
          </div>

          <hr className="h-1 bg-[#07373f] border-0 my-4" />

          <div className="form-item">
            <label htmlFor="full-name">Emter Your Name</label>
            <input type="text" id="full-name" className="required" />
            <p className="text-hint">🔴 Please enter your full name.</p>
          </div>
          <div className="form-item">
            <label htmlFor="email">Enter Your email</label>
            <input type="email" id="email" className="required" />
            <p className="text-hint">🔴 Please enter a valid email address.</p>
          </div>
          <div className="form-item">
            <label htmlFor="text-arae">About The Project</label>
            <input type="text" id="text-area" placeholder="Textarea" />
          </div>

          <Button
            leftText="Back"
            rightText="Get My Ticket"
            onLeftClick={() => console.log("Cancel clicked")}
            onRightClick={() => console.log("Next clicked")}
          />
        </form>
      </div>
    </div>
  );
};

export default AttendeeDetails;

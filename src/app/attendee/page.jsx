"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/Button";
import { Progress } from "@/components/ui/progress";

const AttendeeDetails = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(() => {
    // Check localStorage during initialization
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("formData");
      if (saved) {
        return JSON.parse(saved);
      }
    }
    return {
      fullName: "",
      email: "",
      imageUrl: "",
      ticketType: "",
      ticketQuantity: 1,
      specialRequest: "",
    };
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const [errors, setErrors] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  // File handling functions
  const handleFile = (file) => {
    if (!file) return;

    if (!file.type.match("image/(jpeg|png)")) {
      alert("Please upload only JPEG or PNG images");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      // 2MB limit
      alert("File size should be less than 2MB");
      return;
    }

    setImageFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  // Form handling functions
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = true;
    }

    if (!formData.email.trim()) {
      newErrors.email = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = true;
    }

    if (!imageFile) {
      newErrors.image = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form is valid, proceeding to ticket page");
      router.push("/ticket");
    }
  };
  const handleBack = (e) => {
    console.log("go back to ticket selection");
    router.push("/event");
  };

  return (
    <div className="container">
      <div className="top-container">
        <p>Attendee Details</p>
        <p>2/3</p>
      </div>
      <Progress value={70} />

      <div className="main-content">
        <form onSubmit={handleSubmit} id="ticket-form">
          <div className="form-item upload p-[24px] bg-[#052228] border-[#07373f]">
            <label>Upload Profile Photo</label>
            <div
              id="drop-area"
              className={`upload-box mt-2 bg-[#0E464F] ${
                isDragging ? "border-2 border-dashed border-blue-400" : ""
              } ${errors.image ? "border-2 border-red-500" : ""}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                className="file-input"
                accept="image/png, image/jpeg"
                onChange={handleFileInput}
              />
              {previewUrl ? (
                <div className="w-[150px] h-[150px] rounded-[32px] overflow-hidden">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-[150px] h-[150px] bg-[#0E464F] p-[24px] rounded-[32px]">
                  <Image
                    src="upload.svg"
                    alt="upload"
                    className="items-center"
                    width={30}
                    height={30}
                  />
                  <div id="message-action" className="text-sm text-center">
                    Drag and Drop or Click to Upload
                  </div>
                </div>
              )}
            </div>
            {errors.image && (
              <p className="text-hint error">
                🔴 Please upload a profile photo.
              </p>
            )}
          </div>

          <hr className="h-1 bg-[#07373f] border-0 my-4" />

          <div className="form-item">
            <label htmlFor="fullName">Enter Your Name</label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={`required ${errors.fullName ? "border-red-500" : ""}`}
            />
            <p className={`text-hint ${errors.fullName ? "error" : ""}`}>
              🔴 Please enter your full name.
            </p>
          </div>

          <div className="form-item">
            <label htmlFor="email">Enter Your Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="hello@avioflagos.io"
              className={`required ${errors.email ? "border-red-500" : ""}`}
            />
            <p className={`text-hint ${errors.email ? "error" : ""}`}>
              🔴 Please enter a valid email address.
            </p>
          </div>

          <div className="form-item">
            <label htmlFor="about">Special Request</label>
            <textarea
              type="text"
              id="about"
              className="w-full  p-2 bg-[#07373f] border-[#0E464F] rounded-md resize-y"
              value={formData.about}
              onChange={handleInputChange}
              placeholder="Textarea"
            />
          </div>

          <Button
            leftText="Back"
            rightText="Get My Ticket"
            onLeftClick={handleBack}
            onRightClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default AttendeeDetails;

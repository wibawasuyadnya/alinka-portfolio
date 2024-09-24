"use client";
import React, { useState, ChangeEvent } from "react";
import { useSectionData } from "@/hooks/data/useSectionData";
import { ContactDataType, TargetElement } from "@/types/type";
import HtmlContent from "@/components/Layout-components/HtmlContent";

function Contact() {
  const [message, setMessage] = useState<string>("");
  const { data: contactSection } = useSectionData("contact");

  const contactData: ContactDataType | null = contactSection
    ? {
        heading: contactSection.heading,
        description: contactSection.description,
        wysiwygEditor: contactSection.wysiwygEditor,
      }
    : null;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    const whatsappUrl = `https://wa.me/+6289510390087?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const htmlString = `${contactData?.wysiwygEditor.html}`;

  const targets: TargetElement[] = [
    { tag: "h2", className: "text-3xl font-semibold " },
    { tag: "p", className: "text-lg desktop:text-xl font-normal" },
  ];

  return (
    <div className={"py-16 px-5 desktop:px-10 bg-base-100 space-y-2"}>
      <h2
        className={
          "mb-24 text-primary-content text-center font-regular text-5xl font-playfair"
        }
      >
        {contactData && contactData.heading}
      </h2>
      <HtmlContent
        attribute={{
          className: "flex flex-col justify-center items-start desktop:justify-center desktop:items-center gap-5",
        }}
        html={htmlString}
        targets={targets}
      />
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full desktop:w-2/4 flex flex-col desktop:flex-row gap-2 items-center justify-center">
          <input
            value={message}
            onChange={handleInputChange}
            placeholder="Type something here..."
            className="input input-bordered w-full desktop:max-w-xs"
          />
          <button
            onClick={handleSendMessage}
            className="button capitalize px-5 py-3 text-base bg-primary text-white rounded-md font-sans cursor-pointer w-full desktop:w-2/6"
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;

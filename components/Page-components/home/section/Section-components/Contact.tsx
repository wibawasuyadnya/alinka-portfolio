"use client";
import React, { Fragment, useState, ChangeEvent } from "react";
import { useSectionData } from "@/hooks/data/useSectionData";
import { DefaultPageDataType } from "@/types/type";

function Contact() {
  const [message, setMessage] = useState<string>("");
  const { data: contactSection } = useSectionData("contact");

  const contactData: DefaultPageDataType | null = contactSection
    ? {
        description: contactSection.description,
        heading: contactSection.heading,
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

  return (
    <div className={"py-16 px-10 bg-base-100 space-y-5"}>
      <h2
        className={
          "mb-24 text-primary-content text-center font-regular text-5xl font-playfair"
        }
      >
        {contactData && contactData.heading}
      </h2>
    </div>
  );
}

export default Contact;

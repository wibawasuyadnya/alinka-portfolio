import React, { Fragment } from "react";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { Language } from "@/types/enum";

export default function LanguageToggleIcon() {
  const { language, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    changeLanguage(language === Language.EN ? Language.ID : Language.EN);
  };

  return (
    <label className="swap swap-flip p-0 m-0 inline-grid">
      {/* This hidden checkbox controls the state */}
      <input
        type="checkbox"
        className="language-controller"
        onChange={toggleLanguage}
        checked={language === "id"}
      />
      <div className="swap-off fill-current w-10 h-7 desktop:w-8 desktop:h-6">
        <Image
          width={0}
          height={0}
          src={"/assets/images/Flag_Uk_Medium.svg"}
          alt={"language english"}
          className="w-full h-full object-cover rounded-md desktop:rounded-md"
        />
      </div>
      <div className="swap-on fill-current w-10 h-7 desktop:w-8 desktop:h-6">
        <Image
          width={0}
          height={0}
          src={"/assets/images/Flag_Id_Medium.svg"}
          alt={"language indonesia"}
          className="w-full h-full object-cover rounded-md desktop:rounded-md"
        />
      </div>
    </label>
  );
}

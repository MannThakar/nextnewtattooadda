"use client";
import { ChevronLeft } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <div className="backButtonContainer">
      <ChevronLeft
        size={30}
        className="chevronLeft"
        onClick={() => router.back()}
      />
    </div>
  );
};

export default BackButton;

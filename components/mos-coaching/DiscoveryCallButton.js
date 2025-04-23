"use client";

import ButtonOutline from "@/components/ButtonOutline";

export default function DiscoveryCallButton() {
  return (
    <ButtonOutline
      title="Book Discovery Call"
      onClick={() =>
        window.open("https://cal.com/bodhiperryer/discovery-call", "_blank")
      }
    />
  );
}

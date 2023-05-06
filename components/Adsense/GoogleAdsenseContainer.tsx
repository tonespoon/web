import { useEffect } from "react";

export type AdsenseContainerProps = { clientId: string; slotId: string };

export function GoogleAdsenseContainer({
  clientId,
  slotId,
}: AdsenseContainerProps) {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div style={{ textAlign: "left", overflow: "hidden" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}

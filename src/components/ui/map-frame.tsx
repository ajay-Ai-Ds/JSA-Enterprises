"use client";

interface MapFrameProps {
  areaName?: string;
  className?: string;
}

export default function MapFrame({ areaName = "Chennai", className = "" }: MapFrameProps) {
  // Safe embed of OpenStreetMap or structured Google Maps search frame
  // This provides a visual map block without immediately pulling expensive client API keys
  const mapSearchUrl = `https://maps.google.com/maps?q=JSA%20Enterprises%20Chennai%20${encodeURIComponent(
    areaName
  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`relative w-full h-[350px] rounded-3xl overflow-hidden shadow-xs border border-slate-200 ${className}`}>
      <iframe
        title={`JSA Enterprises Service Coverage Map - ${areaName}`}
        src={mapSearchUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full filter contrast-[0.95]"
      ></iframe>
    </div>
  );
}

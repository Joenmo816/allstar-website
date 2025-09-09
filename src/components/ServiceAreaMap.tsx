"use client";
import { useEffect, useRef } from "react";
import L from "leaflet";

// Cleveland, Missouri
const CENTER = { lat: 38.674, lng: -94.589 };
// 30 miles in meters
const RADIUS_M = 48280;

export default function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current, { zoomControl: true }).setView([CENTER.lat, CENTER.lng], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map);

    L.circle([CENTER.lat, CENTER.lng], {
      radius: RADIUS_M,
      color: "#2563eb",
      fillColor: "#3b82f6",
      fillOpacity: 0.15,
      weight: 2,
    }).addTo(map);

    return () => map.remove();
  }, []);

  return <div ref={mapRef} className="rounded-xl border" style={{ height: 520, width: "100%" }} />;
}

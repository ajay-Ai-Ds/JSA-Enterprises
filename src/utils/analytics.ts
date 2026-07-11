// Analytics telemetry tracking helper functions (GTM, GA4, Clarity compatible)

interface DataLayerObject {
  event: string;
  [key: string]: unknown;
}

// Safe check to verify dataLayer is present on window
function pushToDataLayer(obj: DataLayerObject) {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push(obj);

    // Microsoft Clarity custom event support
    if (typeof win.clarity === "function") {
      win.clarity("event", obj.event, {
        category: obj.category || "interactivity",
        ...obj,
      });
    }
  }
}

export function trackPhoneClick(location: string) {
  pushToDataLayer({
    event: "jsa_phone_click",
    category: "CTA Clicks",
    action: "Call Action Initiated",
    label: location,
  });
}

export function trackWhatsAppClick(location: string) {
  pushToDataLayer({
    event: "jsa_whatsapp_click",
    category: "CTA Clicks",
    action: "WhatsApp Chat Initiated",
    label: location,
  });
}

export function trackFormSubmit(service: string, area: string) {
  pushToDataLayer({
    event: "jsa_form_submit",
    category: "Form Actions",
    action: "Lead Form Submission",
    label: `Service: ${service} | Area: ${area}`,
  });
}

export function trackQuoteRequest(service: string, source: string) {
  pushToDataLayer({
    event: "jsa_quote_request",
    category: "Form Actions",
    action: "Quote Requested",
    label: `Service: ${service} | Source: ${source}`,
  });
}

export function trackScrollDepth(depthPercentage: number) {
  pushToDataLayer({
    event: "jsa_scroll_depth",
    category: "User Behavior",
    action: "Page Scroll Depth",
    label: `${depthPercentage}% Scroll`,
  });
}

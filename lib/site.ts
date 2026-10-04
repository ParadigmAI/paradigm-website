export const SITE_URL = "https://buildparadigm.com";
export const SITE_NAME = "Paradigm";

// Paradigm booking page (30-minute type). Empty until the Google Calendar
// appointment link exists. While empty, every "Book" button points at the
// contact form instead, so no button is ever dead.
export const BOOKING_URL = "";

export const FORMSPREE_FORM_ID = "xyezrqno";

export const bookHref = BOOKING_URL || "/#contact";
export const bookExternal = Boolean(BOOKING_URL);



# Plan: Add Meta Pixel `form_submit` Event with Event ID

## What changes

In `src/components/ApplicationForm.tsx`, add frontend-only Meta Pixel tracking on form submission:

1. **Generate a UUID** when the user clicks Submit
2. **Fire `fbq('trackCustom', 'form_submit', {}, { eventID: eventId })`** before the API call
3. **Pass the `eventId`** to the backend API as a form field so the backend can use it for server-side CAPI deduplication

## Technical details

### In `handleSubmit` (around line 227):

- Generate UUID using `crypto.randomUUID()` (supported in all modern browsers) with a fallback
- Call `fbq('trackCustom', 'form_submit', {}, { eventID: eventId })`
- Append `formDataToSend.append("meta_event_id", eventId)` so the backend receives it
- Add TypeScript declaration for `fbq` on the `window` object to avoid type errors

### TypeScript type declaration

Add `declare global { interface Window { fbq?: (...args: any[]) => void } }` at the top of the file.

### No other files change

The Meta Pixel script is already loaded in `index.html` with pixel ID `689070970304656`. No changes needed there.


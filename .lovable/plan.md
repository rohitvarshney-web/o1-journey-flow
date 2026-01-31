
# Fix: Form Self-Submitting on Last Step

## Problem Identified

The form auto-submits when the user navigates to step 4 (the last step). This is caused by a combination of factors:

1. **Event timing during step transition**: When clicking "Continue" to go from step 3 to step 4, React re-renders and replaces the Continue button with the Submit button in the same DOM position
2. **Residual click/keyboard events**: If the user presses Enter or double-clicks, the event can "carry over" to the newly rendered Submit button
3. **AnimatePresence transition**: During the animation, focus management can cause unexpected button activation

## Solution

Add safeguards to prevent accidental submission during step transitions.

### Changes to `src/components/ApplicationForm.tsx`

**1. Add a state to track when the step just changed (debounce protection):**

```typescript
const [canSubmit, setCanSubmit] = useState(true);
```

**2. Update `handleNext` to temporarily disable submission:**

```typescript
const handleNext = () => {
  if (step < totalSteps - 1) {
    setCanSubmit(false);  // Prevent accidental submit
    setStep(step + 1);
    // Re-enable after a short delay
    setTimeout(() => setCanSubmit(true), 300);
  }
};
```

**3. Guard the submit handler:**

```typescript
const handleSubmit = async () => {
  if (!canSubmit || isSubmitting) return;  // Prevent accidental submission
  
  setIsSubmitting(true);
  // ... rest of submit logic
};
```

**4. Also disable the submit button during the transition:**

```typescript
<Button 
  type="button" 
  onClick={handleSubmit} 
  disabled={isSubmitting || !canSubmit}  // Add canSubmit check
  className="gap-2 text-sm rounded-sm"
>
```

## Technical Details

| Aspect | Change |
|--------|--------|
| New state | `canSubmit` - tracks if submission is allowed |
| handleNext | Sets `canSubmit` to false, then re-enables after 300ms |
| handleSubmit | Early return if `canSubmit` is false |
| Submit button | Disabled when `!canSubmit` |

## Why This Works

- When user clicks "Continue" to reach step 4, `canSubmit` is immediately set to `false`
- The Submit button renders but is disabled for 300ms
- Any residual click/keyboard events are blocked during this window
- After 300ms, the button becomes active for intentional submission

## Alternative Considered

Wrapping in a `<form>` element with `e.preventDefault()` - but this would be more invasive and the debounce approach is simpler and directly addresses the race condition.

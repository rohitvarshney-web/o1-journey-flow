
# Plan: Update Application Form and Landing Page Content

## Overview

This plan addresses multiple content and structure changes across the ApplicationForm component and landing page sections.

## Changes Summary

### 1. ApplicationForm Title Change
**Current:** "O-1 Visa Application"  
**New:** "Check Your O-1 Readiness"

**Location:** Line 432 in `src/components/ApplicationForm.tsx`

---

### 2. Step 2 (index 1) - Field Updates

**A. "Currently holding which visa?" heading change**
**Current:** "Currently holding which visa?"  
**New:** "Current US Visa (if any)"

**Location:** Line 615

**B. Timeline heading change**
**Current:** "When are you planning to file?"  
**New:** "Timeframe to file for O-1"

**Location:** Line 626

**C. Add "Exploring" option to timeline**
Add a fourth checkbox option:
- 0-3 Months
- 3-6 Months  
- More than 6 Months
- **Exploring** (new)

**Location:** After line 657, add new checkbox block

---

### 3. Step 3 (index 2) - Role Type Updates

**A. Add two new role options before "Other"**
**Current list:** Founder, Executive Team Member, Engineer, Researcher / PHD / PostDoc, Influencer, Other

**New list:** Founder, Executive Team Member, Engineer, Researcher / PHD / PostDoc, Influencer, **Athlete**, **Artist**, Other

**Location:** Line 729

**B. Change "Select which all applies to you" heading**
**Current:** "Select which all applies to you"  
**New:** "Select the options which applies to you"

**Location:** Line 749

**C. Remove subtext under "High salary / top compensation"**
**Current:** Has subtext "(Salary range above INR 40LPA)"  
**New:** Remove the subtext entirely

**Location:** Line 758 - remove the `subtext` property

---

### 4. Remove Steps 4 and 5 Content

**Current structure:**
- Step 0: Basic info (name, email, phone)
- Step 1: Country, visa, timeline
- Step 2: Resume, LinkedIn, role type, qualifications
- Step 3: Awards, associations, media, impactful work
- Step 4: Scholarly articles, critical role, immigration issues, family in US

**New structure (3 steps total):**
- Step 0: Basic info (name, email, phone) - unchanged
- Step 1: Country, visa, timeline - unchanged  
- Step 2: Resume, LinkedIn, role type, qualifications - unchanged

**Changes needed:**
1. Update `totalSteps` from 5 to 3 (line 63)
2. Remove `step === 3` block (lines 784-831)
3. Remove `step === 4` block (lines 834-894)
4. Remove unused form fields from state: `awards`, `associations`, `mediaCoverage`, `impactfulWork`, `scholarlyArticles`, `criticalRole`, `immigrationIssues`, `familyInUS`
5. Update `handleClose` reset to remove these fields

---

### 5. Remove ConsultationCTA Top Heading

**File:** `src/components/ConsultationCTA.tsx`

**Remove:** The section heading "Connect and let us handle all your immigration needs" (lines 25-34)

This removes the `<motion.div>` containing the `<h2>` with "Connect and let us handle all your immigration needs"

---

### 6. Update VisualIntro Heading

**File:** `src/components/VisualIntro.tsx`

**Current:** "What is O-1 Visa?"  
**New:** "What is 'the' O-1 Visa?"

**Location:** Line 33

---

## Technical Details

### Files to Modify

| File | Changes |
|------|---------|
| `src/components/ApplicationForm.tsx` | Title, step 1 labels, step 2 options, remove steps 3-4, reduce totalSteps |
| `src/components/ConsultationCTA.tsx` | Remove top heading section |
| `src/components/VisualIntro.tsx` | Update heading text |

### Form State Cleanup

Remove these unused fields from `formData` initial state:
```typescript
awards: "",
associations: "",
mediaCoverage: "",
impactfulWork: "",
scholarlyArticles: "",
criticalRole: "",
immigrationIssues: "",
familyInUS: "",
```

### Role Type Array Update

```typescript
// Change from:
["Founder", "Executive Team Member", "Engineer", "Researcher / PHD / PostDoc", "Influencer", "Other"]

// Change to:
["Founder", "Executive Team Member", "Engineer", "Researcher / PHD / PostDoc", "Influencer", "Athlete", "Artist", "Other"]
```

### Qualifications Array Update

```typescript
// Remove subtext from High salary option:
{ value: "High salary / top compensation", label: "High salary / top compensation" }
// (no subtext property)
```

# 💰 Trade-In Value Calculator - Documentation

## Quick Start

Open `trade_in_calculator.html` in any browser to use the calculator.

---

## 📋 Embed Code

### Option 1: iFrame Embed (Recommended)

Add this to your landing page where you want the calculator to appear:

```html
<iframe 
  src="trade_in_calculator.html" 
  width="100%" 
  height="900" 
  style="border: none; max-width: 500px; margin: 0 auto; display: block;"
  title="Trade-In Value Calculator"
  loading="lazy">
</iframe>
```

### Option 2: Full-Width Embed

```html
<div style="max-width: 500px; margin: 0 auto;">
  <iframe 
    src="trade_in_calculator.html" 
    width="100%" 
    height="100vh" 
    style="border: none; min-height: 900px;"
    title="Trade-In Value Calculator">
  </iframe>
</div>
```

### Option 3: Direct Link

Simply link to the calculator:

```html
<a href="trade_in_calculator.html" class="btn">Open Trade-In Calculator</a>
```

---

## 🔧 How to Update Prices

### Step 1: Open the HTML File

Open `trade_in_calculator.html` in any text editor.

### Step 2: Find the TRADE_IN_DATA Section

Look for this section near the top of the `<script>` tag (around line 290):

```javascript
const TRADE_IN_DATA = {
  'iphone-16-pro-max': {
    name: 'iPhone 16 Pro Max',
    cracked: 250,      // ← Trade-in value when cracked
    minor: 400,        // ← Trade-in value with minor damage
    good: 550,         // ← Trade-in value in good condition
    repairCost: 179    // ← Mike's repair cost
  },
  // ... more models
};
```

### Step 3: Update Values

Simply change the numbers:
- `cracked` = Trade-in value for cracked/shattered screen
- `minor` = Trade-in value for minor scratches/damage
- `good` = Trade-in value for good condition
- `repairCost` = Gadget Fix repair cost

### Step 4: Update Carrier Multipliers (Optional)

```javascript
const CARRIER_MULTIPLIERS = {
  apple: 1.0,      // 100% of base value
  att: 1.05,       // 105% of base value
  verizon: 1.0,    // 100% of base value
  tmobile: 0.95,   // 95% of base value
  bestbuy: 0.9,    // 90% of base value
  other: 0.85      // 85% of base value
};
```

### Step 5: Save and Test

Save the file and refresh your browser to see changes.

---

## 📱 Features

| Feature | ✅ Included |
|---------|------------|
| All iPhone 13-16 models | ✅ |
| Real-time calculations | ✅ |
| Mobile-responsive design | ✅ |
| Carrier-specific values | ✅ |
| Share results button | ✅ |
| Celebration animation | ✅ |
| Print-friendly | ✅ |
| Works offline | ✅ |
| Accessible (ARIA labels) | ✅ |
| No external dependencies | ✅ |

---

## 🎨 Expected Appearance

### Desktop View
- Clean, modern card-based layout
- Forest green primary color (#2E7D32)
- Gold accent for savings highlight (#FFC107)
- Centered at max 480px width
- Subtle background pattern

### Mobile View (375px+)
- Full-width cards with padding
- Large touch-friendly buttons
- Easy-to-read fonts
- Smooth animations

### Results Display
- Red text for "damaged" value (showing what they lose)
- Green text for "after repair" value (showing improvement)
- Golden highlighted box for net benefit
- Confetti animation on positive savings!

### Edge Cases Handled
1. **Good condition**: Shows message that no repair needed
2. **Older phones (iPhone 13)**: Adds note about lower values
3. **Negative savings**: Suggests trading as-is, but call to discuss
4. **Incomplete form**: Shows placeholder until all fields selected

---

## 🧪 Test Scenarios

### Test 1: High-Value Phone (Expected Positive Savings)
- **Phone:** iPhone 16 Pro
- **Condition:** Cracked
- **Carrier:** Apple
- **Expected:** Current $200, After $480, Repair $159, Benefit +$121

### Test 2: Older Phone (Lower Values)
- **Phone:** iPhone 13
- **Condition:** Cracked
- **Carrier:** Apple
- **Expected:** Shows savings + note about older models

### Test 3: Good Condition
- **Phone:** Any
- **Condition:** Good
- **Carrier:** Any
- **Expected:** Shows message that no repair needed

### Test 4: Carrier Comparison
- **Phone:** iPhone 15 Pro
- **Condition:** Cracked
- **Carrier:** AT&T (1.05x) vs Best Buy (0.9x)
- **Expected:** Different values based on multiplier

### Test 5: Share Functionality
- Complete any calculation
- Click "Share Results"
- **Expected:** Results copied to clipboard (or native share on mobile)

---

## 📞 Contact Information in Calculator

The calculator includes:
- **Phone:** (253) 639-4343
- **Action:** Call Now button
- **Directions:** Links to Google Maps for Gadget Fix Kent WA

Update these in the CTA section of the HTML if needed.

---

## 🚀 Deployment

1. Upload `trade_in_calculator.html` to your web server
2. Embed using the iframe code above
3. Test on mobile and desktop
4. Done!

No build process, no dependencies, no configuration needed.





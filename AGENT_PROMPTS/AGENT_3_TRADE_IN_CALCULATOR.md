# 💰 AGENT 3: TRADE-IN CALCULATOR CREATOR
## Self-Contained Expert Prompt

---

## YOUR ROLE
You are an expert web developer specializing in interactive financial calculators and tools. You create user-friendly, mobile-first web applications that help customers make purchasing decisions.

---

## CLIENT CONTEXT

**Business:** Gadget Fix - Phone Repair Shop
**Location:** Kent, WA
**Purpose:** Help customers see the ROI of fixing their cracked screen before trading in their phone

### The Value Proposition
Many people don't realize:
- A cracked iPhone screen dramatically reduces trade-in value
- Fixing the screen for $80-150 can INCREASE trade-in by $100-300
- Customers can actually PROFIT from the repair

**Example:**
- iPhone 16 Pro with cracked screen: $200 trade-in
- Cost to repair at Gadget Fix: $140
- iPhone 16 Pro with fixed screen: $480 trade-in
- **Net benefit: $140 extra in customer's pocket**

---

## YOUR TASK

Create an **interactive trade-in value calculator** that:
1. Shows customers their current trade-in value (with damage)
2. Shows trade-in value AFTER repair
3. Calculates the NET BENEFIT of repairing first
4. Encourages them to contact Mike

---

## CALCULATOR SPECIFICATIONS

### User Inputs

**1. iPhone Model (Dropdown)**
```
- iPhone 16 Pro Max
- iPhone 16 Pro
- iPhone 16
- iPhone 15 Pro Max
- iPhone 15 Pro
- iPhone 15
- iPhone 14 Pro Max
- iPhone 14 Pro
- iPhone 14
- iPhone 13 Pro Max
- iPhone 13 Pro
- iPhone 13
```

**2. Current Screen Condition (Radio buttons)**
```
- Cracked/Shattered
- Minor scratches/damage
- Good condition (no damage)
```

**3. Trade-In Destination (Dropdown)**
```
- Apple
- AT&T
- Verizon
- T-Mobile
- Best Buy
- Other/General
```

### Calculator Outputs

Display these results clearly:

```
📱 YOUR RESULTS

Current Trade-In Value (with damage): $XXX
Trade-In Value After Repair: $XXX

Repair Cost at Gadget Fix: $XXX

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 YOUR NET BENEFIT: +$XXX

You SAVE $XXX by repairing first!
```

### Call-to-Action
After showing results:
```
🔧 Ready to boost your trade-in value?

[CALL NOW: (555) 123-4567]
[GET DIRECTIONS]
[BOOK APPOINTMENT]
```

---

## TRADE-IN VALUE DATA

Use this data for calculations (average across carriers):

### iPhone Trade-In Values (December 2024 estimates)

| Model | Cracked | Minor Damage | Good | Mike's Repair Cost |
|-------|---------|--------------|------|-------------------|
| iPhone 16 Pro Max | $250 | $400 | $550 | $179 |
| iPhone 16 Pro | $200 | $350 | $480 | $159 |
| iPhone 16 | $180 | $300 | $400 | $139 |
| iPhone 15 Pro Max | $180 | $280 | $380 | $149 |
| iPhone 15 Pro | $150 | $240 | $320 | $129 |
| iPhone 15 | $120 | $190 | $250 | $109 |
| iPhone 14 Pro Max | $120 | $180 | $240 | $129 |
| iPhone 14 Pro | $100 | $150 | $200 | $119 |
| iPhone 14 | $80 | $120 | $160 | $99 |
| iPhone 13 Pro Max | $80 | $120 | $160 | $119 |
| iPhone 13 Pro | $60 | $100 | $130 | $109 |
| iPhone 13 | $50 | $80 | $110 | $89 |

### Carrier-Specific Adjustments
Apply these multipliers to base values:
- Apple: 1.0 (base)
- AT&T: 1.05
- Verizon: 1.0
- T-Mobile: 0.95
- Best Buy: 0.9
- Other: 0.85

---

## DESIGN REQUIREMENTS

### Colors (match landing page)
- Primary: #2E7D32 (forest green)
- Secondary: #1B5E20 (dark green)
- Accent: #FFC107 (gold for positive results)
- Negative: #D32F2F (red for "before" values)
- Positive: #388E3C (green for "after" values)
- Background: #FAFAFA

### Mobile-First Design
- Works perfectly on 375px width
- Large touch targets
- Easy-to-read results
- Smooth animations for results reveal

### User Experience
- Results update in real-time as user selects options
- Clear visual hierarchy
- Celebration animation when showing savings
- Easy to share results (optional)

---

## TECHNICAL REQUIREMENTS

### Single HTML File
- All CSS embedded in `<style>`
- All JavaScript embedded in `<script>`
- No external dependencies (except Google Fonts)
- Works offline after initial load

### Features
- Responsive design
- Accessible (ARIA labels)
- Print-friendly results
- Share button (copy results to clipboard)

### Code Quality
- Clean, commented code
- Easy to update values later
- Data stored in JavaScript object (easy to modify)

---

## UI LAYOUT

```
┌─────────────────────────────────────┐
│  💰 Trade-In Value Calculator       │
│  "See how much MORE you can get"    │
├─────────────────────────────────────┤
│                                     │
│  Select Your Phone:                 │
│  [iPhone 16 Pro Max        ▼]       │
│                                     │
│  Screen Condition:                  │
│  ○ Cracked/Shattered               │
│  ○ Minor damage                     │
│  ○ Good condition                   │
│                                     │
│  Where will you trade in?           │
│  [Apple                    ▼]       │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  📊 YOUR RESULTS                    │
│                                     │
│  With cracked screen:    $200  ❌   │
│  After repair:           $480  ✅   │
│                                     │
│  Repair cost:            $159       │
│                                     │
│  ═══════════════════════════════    │
│                                     │
│  💰 YOU SAVE: $121                  │
│     Extra money in YOUR pocket!     │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  [🔧 CALL NOW: (555) 123-4567]     │
│                                     │
│  [📍 Get Directions]               │
│                                     │
│  [📤 Share Results]                │
│                                     │
└─────────────────────────────────────┘
```

---

## EDGE CASES TO HANDLE

1. **Good condition selected:** Show message "Your phone is already in great condition! No repair needed."

2. **Old phone (iPhone 13 and below):** Show note "Older models have lower trade-in values. Consider keeping as backup."

3. **Negative savings:** If repair cost > benefit, show "For your phone, trading in as-is may be the better option. But call us to discuss!"

4. **No selection:** Disable calculate button until all fields selected

---

## DELIVERABLE FORMAT

Provide:
1. **Complete HTML file** (trade_in_calculator.html)
2. **Embed code snippet** for adding to landing page
3. **Instructions** for updating prices
4. **Test scenarios** to verify it works

---

## SUCCESS CRITERIA

- [ ] All iPhone models included
- [ ] Real-time calculation updates
- [ ] Clear visual display of savings
- [ ] Mobile-responsive
- [ ] Prominent call-to-action
- [ ] Share functionality
- [ ] Easy to update prices
- [ ] Works offline
- [ ] Professional appearance

---

## OUTPUT

Provide:
1. **Complete HTML file** (trade_in_calculator.html)
2. **Iframe embed code** for landing page integration
3. **Summary** of how to update values
4. **Screenshot description** of expected appearance


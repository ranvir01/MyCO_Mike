/**
 * GADGET FIX - UPDATED CLIENT INTAKE FORM
 * ========================================
 * Creates a Google Form to gather critical details from Mike
 * before finalizing deliverables and implementation.
 * 
 * UPDATED: December 4, 2024
 * CHANGES: 
 *   - Simplified from original (removed redundant questions)
 *   - Focused on trade-in strategy data needs
 *   - Added partnership questions for Taylor's outreach
 *   - Added priority rankings
 *   - Friendlier tone
 *
 * HOW TO USE:
 * 1. Go to script.google.com
 * 2. Create new project
 * 3. Paste this entire script
 * 4. Click Run > createMikeIntakeForm
 * 5. Authorize when prompted
 * 6. Check logs (View > Logs) for the form URL
 * 7. Send the form URL to Mike
 */

function createMikeIntakeForm() {
  // Create the form
  var form = FormApp.create('Gadget Fix - Quick Questions Before We Start')
    .setDescription(
      'Hey Mike! 👋\n\n' +
      'We\'re finalizing your growth package and need a few key details.\n' +
      'Most important: your repair pricing so we can build your trade-in calculator!\n\n' +
      'This takes about 5 minutes.\n\n' +
      '— Ranvir, Ethan, Ben & Taylor @ MyCo'
    )
    .setConfirmationMessage('Thanks Mike! We\'ll have everything ready for our meeting. 🚀')
    .setAllowResponseEdits(true)
    .setProgressBar(true);

  // ========================================
  // SECTION 1: BUSINESS BASICS (Simplified)
  // ========================================
  form.addSectionHeaderItem()
    .setTitle('📍 Business Basics')
    .setHelpText('Quick info for your website and marketing materials');

  form.addTextItem()
    .setTitle('Business Name (as it appears on your license)')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Full Business Address')
    .setHelpText('Street, City, State, ZIP')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Building/Mall Name')
    .setHelpText('e.g., "Kent Station Mall"')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Phone Number (for website click-to-call)')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Business Email')
    .setRequired(false);

  // ========================================
  // SECTION 2: HOURS (Simplified)
  // ========================================
  form.addSectionHeaderItem()
    .setTitle('🕐 Hours');

  form.addParagraphTextItem()
    .setTitle('Your business hours')
    .setHelpText('Example:\nMon-Fri: 10am-7pm\nSat: 10am-5pm\nSun: Closed')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Walk-ins welcome?')
    .setChoiceValues([
      'Yes - always welcome',
      'Yes, but appointments preferred',
      'Appointments only'
    ])
    .setRequired(true);

  // ========================================
  // SECTION 3: PRICING (CRITICAL FOR TRADE-IN CALCULATOR)
  // ========================================
  form.addSectionHeaderItem()
    .setTitle('💰 Your Repair Prices')
    .setHelpText('⚠️ IMPORTANT: We need accurate prices for your trade-in calculator!');

  form.addParagraphTextItem()
    .setTitle('iPhone Screen Repair Prices')
    .setHelpText('Please list ALL models you repair:\niPhone 16 Pro Max: $___\niPhone 16 Pro: $___\niPhone 16: $___\niPhone 15 Pro Max: $___\niPhone 15 Pro: $___\niPhone 15: $___\niPhone 14 Pro Max: $___\niPhone 14 Pro: $___\niPhone 14: $___\n(add older models if you repair them)')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Battery Replacement Prices')
    .setHelpText('List by model')
    .setRequired(false);

  form.addTextItem()
    .setTitle('Typical screen repair time')
    .setHelpText('e.g., "15-30 minutes"')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Warranty on repairs')
    .setHelpText('e.g., "90 days", "1 year"')
    .setRequired(true);

  // ========================================
  // SECTION 4: TRADE-IN STRATEGY
  // ========================================
  form.addSectionHeaderItem()
    .setTitle('📈 Trade-In Value Strategy')
    .setHelpText('This is the BIG opportunity we identified!');

  form.addScaleItem()
    .setTitle('How excited are you about the trade-in value marketing angle?')
    .setHelpText('Fixing a cracked screen for $80 can increase trade-in by $100-300')
    .setBounds(1, 5)
    .setLabels('Not excited', 'Very excited!')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Do you have any customer success stories we can reference?')
    .setHelpText('e.g., "Customer fixed iPhone 15 Pro screen for $120, got $350 more on trade-in"')
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('How prominently should we feature trade-in messaging?')
    .setChoiceValues([
      'Make it the main focus',
      'Feature it prominently',
      'Include it but not as main focus',
      'Skip it for now'
    ])
    .setRequired(true);

  // ========================================
  // SECTION 5: COMPETITION
  // ========================================
  form.addSectionHeaderItem()
    .setTitle('🏆 Competition');

  form.addParagraphTextItem()
    .setTitle('Who are your main competitors?')
    .setHelpText('Names and locations if you know them')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('What makes YOU better than competitors?')
    .setHelpText('Speed? Quality? Price? Warranty? Customer service?')
    .setRequired(true);

  // ========================================
  // SECTION 6: PARTNERSHIPS (for Sales Project)
  // ========================================
  form.addSectionHeaderItem()
    .setTitle('🤝 Carrier Partnerships')
    .setHelpText('Taylor will be approaching these stores on your behalf');

  form.addParagraphTextItem()
    .setTitle('Which carrier stores are near you?')
    .setHelpText('List specific locations, e.g.:\n- T-Mobile at Kent Station\n- Verizon on Central Ave\n- AT&T in the mall')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('Any stores you already have a relationship with?')
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('Would you offer a referral bonus to partner stores?')
    .setHelpText('e.g., $5-10 per customer they send you')
    .setChoiceValues([
      'Yes - happy to discuss',
      'Maybe - depends on cost',
      'No - prefer not to'
    ])
    .setRequired(true);

  // ========================================
  // SECTION 7: GOALS & PRIORITIES
  // ========================================
  form.addSectionHeaderItem()
    .setTitle('🎯 Your Priorities');

  form.addScaleItem()
    .setTitle('Priority: Getting more screen repair customers')
    .setBounds(1, 5)
    .setLabels('Low', 'High')
    .setRequired(true);

  form.addScaleItem()
    .setTitle('Priority: Carrier partnership outreach')
    .setBounds(1, 5)
    .setLabels('Low', 'High')
    .setRequired(true);

  form.addScaleItem()
    .setTitle('Priority: Professional website')
    .setBounds(1, 5)
    .setLabels('Low', 'High')
    .setRequired(true);

  form.addScaleItem()
    .setTitle('Priority: Business plan documentation')
    .setBounds(1, 5)
    .setLabels('Low', 'High')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('What would make this a SUCCESS in 90 days?')
    .setHelpText('Be specific! e.g., "10 repairs/week", "3 carrier partnerships"')
    .setRequired(true);

  // ========================================
  // SECTION 8: QUICK LOGISTICS
  // ========================================
  form.addSectionHeaderItem()
    .setTitle('📋 Quick Logistics');

  form.addMultipleChoiceItem()
    .setTitle('Do you have a logo?')
    .setChoiceValues([
      'Yes - I can email it',
      'Yes but needs updating',
      'No - just use text'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Do you have photos of your shop?')
    .setChoiceValues([
      'Yes - I can share them',
      'No but I can take some',
      'No - use placeholder images'
    ])
    .setRequired(true);

  // ========================================
  // SECTION 9: MEETING CONFIRMATION
  // ========================================
  form.addSectionHeaderItem()
    .setTitle('📅 Meeting Confirmation');

  form.addMultipleChoiceItem()
    .setTitle('Best way to reach you?')
    .setChoiceValues(['Phone', 'Text', 'Email', 'Any'])
    .setRequired(true);

  form.addTextItem()
    .setTitle('Contact number/email for meeting coordination')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('When can you meet next week?')
    .setChoiceValues([
      'Weekday morning',
      'Weekday afternoon',
      'Weekend',
      'I\'ll propose some times'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Anything else we should know before the meeting?')
    .setRequired(false);

  // Get the form URLs
  var formUrl = form.getPublishedUrl();
  var editUrl = form.getEditUrl();

  // Log the URLs
  Logger.log('='.repeat(60));
  Logger.log('MIKE INTAKE FORM CREATED SUCCESSFULLY!');
  Logger.log('='.repeat(60));
  Logger.log('');
  Logger.log('📋 FORM URL (Send this to Mike):');
  Logger.log(formUrl);
  Logger.log('');
  Logger.log('✏️ EDIT URL (For you to modify):');
  Logger.log(editUrl);
  Logger.log('');
  Logger.log('='.repeat(60));

  return {
    formUrl: formUrl,
    editUrl: editUrl
  };
}


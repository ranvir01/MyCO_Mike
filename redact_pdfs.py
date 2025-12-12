"""
PDF Redaction Script
Automatically redacts confidential information from business plan PDFs
"""

import fitz  # PyMuPDF
import re
import os

# Define patterns and specific text to redact
REDACTION_PATTERNS = {
    # Phone numbers
    'phone': [
        r'\+?\s*\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}',
        r'\(\d{3}\)\s*\d{3}-\d{4}',
    ],
    # Email addresses
    'email': [
        r'[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}',
    ],
    # Street addresses
    'address': [
        r'\d+\s+\d*(st|nd|rd|th)?\s+(Avenue|Ave|Street|St|Road|Rd|Boulevard|Blvd|Drive|Dr|Lane|Ln|Way|Court|Ct|Place|Pl)[,\s]*(South|North|East|West|S|N|E|W)?',
    ],
    # Dollar amounts (financial data)
    'money': [
        r'\$\s*[\d,]+\.?\d*',
        r'\$\s*\d+[,\d]*(\.\d{2})?',
    ],
    # Percentages in financial context
    'percentages': [
        r'[↑↓]?\s*-?\d+\.?\d*\s*%',
    ],
}

# Specific text strings to redact (names, addresses, etc.)
REDACT_STRINGS = [
    # === TABLETOP VILLAGE BUSINESS PLAN ===
    # Contact Information
    "616 8th Avenue South",
    "616 8th Ave South", 
    "Seattle, WA 98104",
    "98104",
    "(206) 880-8654",
    "206-880-8654",
    "+1 206 880 8654",
    "tabletopvillage.com",
    "https://tabletopvillage.com",
    
    # Personal Names
    "Brian Myers",
    "Brian",
    "Mia Chon",
    "George (Ethan) Lostroh",
    "George Lostroh",
    "Ethan Lostroh",
    "Nicola Rigor",
    "Cameron Shenoy",
    "Polaris",
    
    # Business Partners
    "GTS Distribution",
    "Southern Hobby Distribution",
    "Pokémon Company International",
    "Pokemon Company International",
    
    # Competitor Names (optional - may want to keep these)
    "Zulu's",
    "Shane's",
    "Mox",
    "Blue Highway Games",
    "Card Exchange",
    
    # Locations
    "Bothell",
    "Renton", 
    "Ballard",
    "Bellevue",
    "Queen Anne",
    "Shoreline",
    "International District",
    
    # === TTVA OUTREACH PLAYBOOK ===
    # Add any additional names/contacts from the playbook
    "Tabletop Village",
    "TTV",
    "TTVA",
]

def redact_pdf(input_path, output_path):
    """Redact confidential information from a PDF file."""
    print(f"\nProcessing: {input_path}")
    
    try:
        doc = fitz.open(input_path)
    except Exception as e:
        print(f"Error opening PDF: {e}")
        return False
    
    total_redactions = 0
    
    for page_num in range(len(doc)):
        page = doc[page_num]
        page_redactions = 0
        
        # Get text from page
        text = page.get_text()
        
        # Redact specific strings
        for redact_text in REDACT_STRINGS:
            text_instances = page.search_for(redact_text, quads=True)
            for inst in text_instances:
                page.add_redact_annot(inst, fill=(0, 0, 0))  # Black fill
                page_redactions += 1
        
        # Redact patterns
        for pattern_type, patterns in REDACTION_PATTERNS.items():
            for pattern in patterns:
                # Search using regex
                matches = re.finditer(pattern, text, re.IGNORECASE)
                for match in matches:
                    matched_text = match.group()
                    text_instances = page.search_for(matched_text, quads=True)
                    for inst in text_instances:
                        page.add_redact_annot(inst, fill=(0, 0, 0))
                        page_redactions += 1
        
        # Apply all redactions on this page
        page.apply_redactions()
        total_redactions += page_redactions
        
        if page_redactions > 0:
            print(f"  Page {page_num + 1}: {page_redactions} redactions")
    
    # Save redacted PDF
    doc.save(output_path)
    doc.close()
    
    print(f"  Total redactions: {total_redactions}")
    print(f"  Saved to: {output_path}")
    return True

def main():
    base_path = r"d:\myco-mike\extracted\cofounder"
    
    # PDF files to redact
    pdfs_to_redact = [
        ("TTV Business Plan (2).pdf", "TTV Business Plan (2)_REDACTED.pdf"),
        ("TTVA Outreach Playbook (1) (1).pdf", "TTVA Outreach Playbook (1) (1)_REDACTED.pdf"),
    ]
    
    print("=" * 60)
    print("PDF REDACTION TOOL")
    print("=" * 60)
    print("\nThis script will redact the following confidential info:")
    print("  • Personal names")
    print("  • Phone numbers")
    print("  • Email addresses")
    print("  • Street addresses")
    print("  • Financial figures ($ amounts)")
    print("  • Business partner names")
    print("  • Competitor information")
    print("=" * 60)
    
    for input_file, output_file in pdfs_to_redact:
        input_path = os.path.join(base_path, input_file)
        output_path = os.path.join(base_path, output_file)
        
        if os.path.exists(input_path):
            redact_pdf(input_path, output_path)
        else:
            print(f"\nFile not found: {input_path}")
    
    print("\n" + "=" * 60)
    print("REDACTION COMPLETE")
    print("=" * 60)
    print("\nRedacted files saved with '_REDACTED' suffix.")
    print("Please review the output files to verify redactions.")

if __name__ == "__main__":
    main()


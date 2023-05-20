import { DentalService, ParagraphStyle } from "src/app/Core/Models/DentalService";
export const DENTAL_SERVICES: DentalService[] = [
  {
    id: 1,
    title: "Routine Exams",
    description: [
      {
        text:
          "As part of your six-monthly (or annual) checkup & review we provide a thorough and comprehensive examination of your mouth.",
        style: ParagraphStyle.Default,
        tailwindClasses: "text-dark ml-0",
      },
      {
        text:
          "After discussing your medical history and your general health condition, your dentist will start with a check up of your soft tissues – the inside of the lips, the tongue, the palate, the inside of the cheeks, again checking for abnormal conditions.",
        style: ParagraphStyle.Default,
        tailwindClasses: "20px",
      },
      {
        text:
          "After that a screening of your periodontal health is carried out (the state of your gums). Minor cases of gum disease may mean a recommendation to visit the hygienist for a full-mouth scale and polish and oral hygiene instruction.",
        style: ParagraphStyle.Default,
        tailwindClasses: "16px",
      },
      {
        text:
          "Finally, as part of our dental service, your teeth are checked for decay & fractures. Small digital x-rays may be taken to gain a better view of ‘hidden’ areas of your mouth, for example, to detect whether any decay is occurring between or inside your teeth. X-rays also help to show the supporting bone level in your jaw, to detect signs of advanced periodontal disease or infections.",
        style: ParagraphStyle.Default,
        tailwindClasses: "16px",
      },
    ],
    cssClasses: "fas fa-wand-magic-sparkles",
  },
  {
    id: 2,
    title: "Emergency Dentistry",
    description: [
      {
        text: "First paragraph",
        style: ParagraphStyle.Default,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
        ],
      },
      {
        text: "Second paragraph",
        style: ParagraphStyle.Heading,
      },
      {
        text: "Third paragraph",
        style: ParagraphStyle.NumberedList,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.Default,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.Default,
          },
        ],
      },
    ],
    cssClasses: "fas fa-wand-magic-sparkles",
  },
  {
    id: 3,
    title: "Dental Hygiene",
    description: [
      {
        text: "First paragraph",
        style: ParagraphStyle.Default,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
        ],
      },
      {
        text: "Second paragraph",
        style: ParagraphStyle.Heading,
      },
      {
        text: "Third paragraph",
        style: ParagraphStyle.NumberedList,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.Default,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.Default,
          },
        ],
      },
    ],
    cssClasses: "fas fa-wand-magic-sparkles",
  },
  {
    id: 4,
    title: "Oral Surgery",
    description: [
      {
        text: "First paragraph",
        style: ParagraphStyle.Default,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
        ],
      },
      {
        text: "Second paragraph",
        style: ParagraphStyle.Heading,
      },
      {
        text: "Third paragraph",
        style: ParagraphStyle.NumberedList,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.Default,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.Default,
          },
        ],
      },
    ],
    cssClasses: "fas fa-wand-magic-sparkles",
  },
  {
    id: 5,
    title: "Dental Fillings",
    description: [
      {
        text: "First paragraph",
        style: ParagraphStyle.Default,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
        ],
      },
      {
        text: "Second paragraph",
        style: ParagraphStyle.Heading,
      },
      {
        text: "Third paragraph",
        style: ParagraphStyle.NumberedList,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.Default,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.Default,
          },
        ],
      },
    ],
    cssClasses: "fas fa-wand-magic-sparkles",
  },
  {
    id: 6,
    title: "Root Canal Treatment",
    description: [
      {
        text: "First paragraph",
        style: ParagraphStyle.Default,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
        ],
      },
      {
        text: "Second paragraph",
        style: ParagraphStyle.Heading,
      },
      {
        text: "Third paragraph",
        style: ParagraphStyle.NumberedList,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.Default,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.Default,
          },
        ],
      },
    ],
    cssClasses: "fas fa-wand-magic-sparkles",
  },
  {
    id: 7,
    title: "Dental Crowns and Bridges",
    description: [
      {
        text: "First paragraph",
        style: ParagraphStyle.Default,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
        ],
      },
      {
        text: "Second paragraph",
        style: ParagraphStyle.Heading,
      },
      {
        text: "Third paragraph",
        style: ParagraphStyle.NumberedList,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.Default,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.Default,
          },
        ],
      },
    ],
    cssClasses: "fas fa-wand-magic-sparkles",
  },
  {
    id: 8,
    title: "Inlay. Onlay",
    description: [
      {
        text: "First paragraph",
        style: ParagraphStyle.Default,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
        ],
      },
      {
        text: "Second paragraph",
        style: ParagraphStyle.Heading,
      },
      {
        text: "Third paragraph",
        style: ParagraphStyle.NumberedList,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.Default,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.Default,
          },
        ],
      },
    ],
    cssClasses: "fas fa-wand-magic-sparkles",
  },
  {
    id: 9,
    title: "Porcelain Veneers",
    description: [
      {
        text: "First paragraph",
        style: ParagraphStyle.Default,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
        ],
      },
      {
        text: "Second paragraph",
        style: ParagraphStyle.Heading,
      },
      {
        text: "Third paragraph",
        style: ParagraphStyle.NumberedList,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.Default,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.Default,
          },
        ],
      },
    ],
    cssClasses: "fas fa-wand-magic-sparkles",
  },
  {
    id: 10,
    title: "Dental Implants ",
    description: [
      {
        text: "First paragraph",
        style: ParagraphStyle.Default,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
        ],
      },
      {
        text: "Second paragraph",
        style: ParagraphStyle.Heading,
      },
      {
        text: "Third paragraph",
        style: ParagraphStyle.NumberedList,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.Default,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.Default,
          },
        ],
      },
    ],
    cssClasses: "fas fa-wand-magic-sparkles",
  },
  {
    id: 11,
    title: "Dentures",
    description: [
      {
        text: "First paragraph",
        style: ParagraphStyle.Default,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
        ],
      },
      {
        text: "Second paragraph",
        style: ParagraphStyle.Heading,
      },
      {
        text: "Third paragraph",
        style: ParagraphStyle.NumberedList,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.Default,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.Default,
          },
        ],
      },
    ],
    cssClasses: "fas fa-wand-magic-sparkles",
  },
  {
    id: 12,
    title: "Teeth Whitening",
    description: [
      {
        text: "First paragraph",
        style: ParagraphStyle.Default,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
        ],
      },
      {
        text: "Second paragraph",
        style: ParagraphStyle.Heading,
      },
      {
        text: "Third paragraph",
        style: ParagraphStyle.NumberedList,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.Default,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.Default,
          },
        ],
      },
    ],
    cssClasses: "fas fa-wand-magic-sparkles",
  },
  {
    id: 13,
    title: "Dental Jewellery",
    description: [
      {
        text: "First paragraph",
        style: ParagraphStyle.Default,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.BulletList,
          },
        ],
      },
      {
        text: "Second paragraph",
        style: ParagraphStyle.Heading,
      },
      {
        text: "Third paragraph",
        style: ParagraphStyle.NumberedList,
        subParagraphs: [
          {
            text: "First sub-paragraph",
            style: ParagraphStyle.Default,
          },
          {
            text: "Second sub-paragraph",
            style: ParagraphStyle.Default,
          },
        ],
      },
    ],
    cssClasses: "fas fa-wand-magic-sparkles",
  },
  {
    id: 14,
    title: "Pediatric Dentistry",
    description: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        style: ParagraphStyle.Default,
        tailwindClasses: "text[16px] text-[#333] ml-0 font-[Arial, sans-serif]",
      },
      {
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        style: ParagraphStyle.Heading,
        tailwindClasses: "text[20px] text-[#ff0000] ml-[10px] font-[Helvetica, sans-serif]",
      },
      {
        text:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        style: ParagraphStyle.BulletList,
        tailwindClasses: "text[18px] text-[#008000] ml-[20px] font-[Verdana, sans-serif]",
        subParagraphs: [
          { text: "Duis aute irure dolor in reprehenderit" },
          { text: "Excepteur sint occaecat cupidatat non proident" },
          { text: "Sunt in culpa qui officia deserunt mollit anim id est laborum" },
        ],
      },
      {
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        style: ParagraphStyle.NumberedList,
        tailwindClasses: "text[14px] text-[#0000ff] ml-[30px] font-[Georgia, serif]",
        subParagraphs: [
          { text: "Ut enim ad minim veniam" },
          { text: "Quis nostrud exercitation ullamco" },
          { text: "Duis aute irure dolor in reprehenderit" },
        ],
      },
    ],
    cssClasses: "fas fa-wand-magic-sparkles",
  },
];

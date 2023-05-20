import { DentalService, ParagraphStyle } from "src/app/Core/Models/DentalService";
export const DENTAL_SERVICES: DentalService[] = [
  {
    id: 1,
    title: "Routine Exams",
    description: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        style: ParagraphStyle.Default,
        textSize: "16px",
        textFont: "Arial, sans-serif",
        textColor: "#333",
        marginLeft: "0",
      },
      {
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        style: ParagraphStyle.Heading,
        textSize: "20px",
        textFont: "Helvetica, sans-serif",
        textColor: "#ff0000",
        marginLeft: "10px",
      },
      {
        text:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        style: ParagraphStyle.BulletList,
        textSize: "18px",
        textFont: "Verdana, sans-serif",
        textColor: "#008000",
        marginLeft: "20px",
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
        textSize: "14px",
        textFont: "Georgia, serif",
        textColor: "#0000ff",
        marginLeft: "30px",
        subParagraphs: [
          { text: "Ut enim ad minim veniam" },
          { text: "Quis nostrud exercitation ullamco" },
          { text: "Duis aute irure dolor in reprehenderit" },
        ],
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
        textSize: "16px",
        textFont: "Arial, sans-serif",
        textColor: "#333",
        marginLeft: "0",
      },
      {
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        style: ParagraphStyle.Heading,
        textSize: "20px",
        textFont: "Helvetica, sans-serif",
        textColor: "#ff0000",
        marginLeft: "10px",
      },
      {
        text:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        style: ParagraphStyle.BulletList,
        textSize: "18px",
        textFont: "Verdana, sans-serif",
        textColor: "#008000",
        marginLeft: "20px",
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
        textSize: "14px",
        textFont: "Georgia, serif",
        textColor: "#0000ff",
        marginLeft: "30px",
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

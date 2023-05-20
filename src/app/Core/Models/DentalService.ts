export class DentalService {
  id!: number;
  title!: string;
  cssClasses!: string;
  description!: Paragraph[];
}
export class Paragraph {
  text!: string;
  style?: ParagraphStyle;
  subParagraphs?: Paragraph[];
  tailwindClasses?: string;
}

export enum ParagraphStyle {
  Default = "default",
  Heading = "heading",
  BulletList = "bullet-list",
  NumberedList = "numbered-list",
}

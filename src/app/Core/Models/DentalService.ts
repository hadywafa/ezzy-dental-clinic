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
  textSize?: string;
  textFont?: string;
  textColor?: string;
  marginLeft?: string;
}

export enum ParagraphStyle {
  Default = "default",
  Heading = "heading",
  BulletList = "bullet-list",
  NumberedList = "numbered-list",
}

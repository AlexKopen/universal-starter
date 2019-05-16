export class HomeSlide {
  title: string;
  content: string;
  imageFileName: string;
  altText: string;
  routerLink: string;
  buttonText: string;

  constructor(
    title: string,
    content: string,
    imagePath: string,
    altText: string,
    routerLink: string,
    buttonText: string
  ) {
    this.title = title;
    this.content = content;
    this.imageFileName = imagePath;
    this.altText = altText;
    this.routerLink = routerLink;
    this.buttonText = buttonText;
  }
}

import {Injectable} from "@angular/core";

export enum Keys {
  THUMBS_UP = 'thumbs_up',
  THUMBS_DOWN = 'thumbs_down'
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  like(productName: string): void {
    this.save(productName, Keys.THUMBS_UP);

  }

  dislike(productName: string): void {
    this.save(productName, Keys.THUMBS_DOWN);
  }

  private save(productName: string, key: string) {
    // @ts-ignore
    const thumbs = JSON.parse(localStorage.getItem(key));
    if (!thumbs) {
      localStorage.setItem(key, JSON.stringify(Array.of(productName)));
      return;
    }
    const hasProduct = thumbs.find((product: string) => {
      return product === productName
    });
    if (hasProduct) {
      return;
    }

    thumbs.push(productName);
    localStorage.setItem(key, JSON.stringify(thumbs));
  }

}

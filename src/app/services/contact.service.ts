import {Contact} from "../models/contact.model";
import {Injectable} from "@angular/core";

export enum Keys {
  CONTACT = 'contact'
}

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  save(contact: Contact): void {
    localStorage.setItem(Keys.CONTACT, JSON.stringify(contact));
  }

  get(): Contact {
    return JSON.parse(localStorage.getItem(Keys.CONTACT) as string);
  }
}

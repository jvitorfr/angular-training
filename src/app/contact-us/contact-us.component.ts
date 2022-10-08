import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Contact} from "../models/contact.model";
import {ContactService} from "../services/contact.service";


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contact: Contact;


  get hasContact(): boolean {
    return !!this.contactService.get();
  }

  get name(): string {
    if (!this.contact || !this.contact.email) {
      return '';
    }

    return this.contact.email.split('@')[0].toUpperCase();
  }

  constructor(private contactService: ContactService) {
    this.contact = new Contact();
  }


  ngOnInit(): void {
    const mainFooter = document.getElementById('main-footer');
    if (mainFooter?.style) {
      mainFooter.style.display = 'none';
    }

    const contact = this.contactService.get();
    if (contact) {
      this.contact = contact;
    }


  }

  onSubmit(form: NgForm): void {
    this.contactService.save(form.value as Contact);
  }

  clearLocalStorage(): void {
    localStorage.clear();
  }

  phoneMask(): string {
    return '(00) 00000-0000';
  }

  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }


}

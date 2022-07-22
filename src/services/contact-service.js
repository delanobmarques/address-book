import axios from "axios";

export class ContactService {
    static baseUrl = `http://localhost:9000`;

    static getAllContacts() {
        const contactsUrl = `${this.baseUrl}/contacts`;
        return axios.get(contactsUrl);
    }     

    static getContact(id){
        const contactUrl = `${this.baseUrl}/contacts/${id}`;
        return axios.get(contactUrl);
    }

    static createContact(contact) {
        const contactUrl = `${this.baseUrl}/contacts`;
        return axios.post(contactUrl, contact);
    }

    static updateContact(contact, id) {
        const contactUrl = `${this.baseUrl}/contacts/${id}`;
        return axios.put(contactUrl, contact);
    }

    static deleteContact(id) {
        const contactUrl = `${this.baseUrl}/contacts/${id}`;
        return axios.delete(contactUrl);
    }
}

export default ContactService;
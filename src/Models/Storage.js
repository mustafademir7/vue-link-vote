
import Vue from 'vue';

export class Storage {

    storageKey = "linkStorage";
    links = !!localStorage.getItem(this.storageKey) ? JSON.parse(localStorage.getItem(this.storageKey)) : [];
    
    constructor() {

    }

    getAll() {
        return this.links;
    }

    save(linkObject) {
        this.links.unshift(linkObject); //we are using unshift for default listing
        localStorage.setItem(this.storageKey, JSON.stringify(this.links));
    }

    update(linkObject) {
        linkObject.vote_at = Vue.prototype.$moment().unix();
        let index = this.links.findIndex(item => item.id === linkObject.id);
        this.links[index] = linkObject;
        this.links.sort((a, b) => b.vote_at - a.vote_at);
        this.links.sort((a, b) => b.vote - a.vote);
        localStorage.setItem(this.storageKey, JSON.stringify(this.links));
    }

    delete(linkObject) {
        let index = this.links.findIndex(item => item.id === linkObject.id);
        this.links.splice(index, 1);
        localStorage.setItem(this.storageKey, JSON.stringify(this.links));
    }
};
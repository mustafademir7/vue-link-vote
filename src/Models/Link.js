
import Vue from 'vue';
export class Link {
    id = null;
    name= '';
    url= '';
    vote = 0;
    vote_at = null;
    created_at= null;

    constructor(name, url) {
        this.name = name.toUpperCase();
        this.url = url;
        this.created_at = Vue.prototype.$moment().unix();
        this.id = this.created_at
    };

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            url: this.url,
            vote: this.vote,
            vote_at: this.vote_at,
            created_at: this.created_at
        }
    }
};
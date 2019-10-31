import Vue from 'vue';
import { expect } from 'chai'
import LinkList from '@/components/LinkList/LinkList.vue';

class mockStorage {
    
    links = [
        { id: 1, name: 'Test 1', url : 'http://test1.com', vote: 5,  vote_at: null, created_at: null  },
        { id: 2, name: 'Test 2', url : 'http://test2.com', vote: 2,  vote_at: null, created_at: null  },
        { id: 3, name: 'Test 3', url : 'http://test3.com', vote: 0,  vote_at: null, created_at: null  }
    ];
    
    update(linkObject) {
        let index = this.links.findIndex(item => item.id === linkObject.id);
        this.links[index] = linkObject;
    }

    getAll() {
        return this.links;
    }
}


describe('LinkList.vue', () => {

    const container = document.createElement('div');
    const Constructor = Vue.extend(LinkList);
    Constructor.prototype.$storage =  new mockStorage();
    const vm = new Constructor();
    vm.$mount(container);


    it('should fetch data', () => {
        expect(vm.links.length).to.equal(3);
    });

    it('should vote sort (ASC)', () => {
        vm.sort('asc')
        expect(vm.links[0].vote).to.equal(0);
    });

    it('should vote sort (DESC)', () => {
        vm.sort('desc')
        expect(vm.links[0].vote).to.equal(5);
    });

    it('should scoreUpdated', () => {
        
        let effectedIndex = 0;
        let effectedMock = vm.$storage.getAll()[effectedIndex];
        effectedMock.vote = 100;
        vm.scoreUpdated(effectedMock);
        expect(vm.links[effectedIndex].vote).to.equal(100);
    });

})

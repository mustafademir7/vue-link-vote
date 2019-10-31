import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Paginate from '@/components/Paginate.vue';


describe('Paginate.vue', () => {
  it('should paginate', () => {
    const wrapper = shallowMount(Paginate, {
      propsData: { 
        dataSource: [
            { id: 1, name: 'Test 1', url : 'http://test1.com', vote: 0,  vote_at: null, created_at: null  },
            { id: 2, name: 'Test 2', url : 'http://test2.com', vote: 0,  vote_at: null, created_at: null  },
            { id: 3, name: 'Test 3', url : 'http://test3.com', vote: 0,  vote_at: null, created_at: null  },
            { id: 4, name: 'Test 4', url : 'http://test4.com', vote: 0,  vote_at: null, created_at: null  },
        ],
        perPage: 2
      }
    })
    wrapper.vm.paginate();
    expect(wrapper.vm.pageItems.length).to.equal(2);
  });

})

import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import LinkListItem from '@/components/LinkList/LinkListItem.vue';


describe('LinkListItem.vue', () => {
  it('should voteUp', () => {
    const wrapper = shallowMount(LinkListItem, {
      propsData: { 
          linkModel: { id: 1, name: 'Test 1', url : 'http://test1.com', vote: 0,  vote_at: null, created_at: null  }
      }
    })

    const button = wrapper.find('.voteUp');
    button.trigger('click')
    expect(wrapper.vm.linkModel.vote).to.equal(1);
  });

  it('should voteDown', () => {
    const wrapper = shallowMount(LinkListItem, {
      propsData: { 
          linkModel: { id: 1, name: 'Test 1', url : 'http://test1.com', vote: 10,  vote_at: null, created_at: null  }
      }
    })

    const button = wrapper.find('.voteDown');
    button.trigger('click')
    expect(wrapper.vm.linkModel.vote).to.equal(9);
  });

})

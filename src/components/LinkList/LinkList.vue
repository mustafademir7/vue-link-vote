<template>
    <div class="link">
        <div class="link-item" @click="submitLink">
            <div class="link-item-add-icon">+</div>
            <div class="link-item-add-text">SUBMIT A LINK</div>
        </div>
        <select v-model="selectedSort">
            <option disabled :value="null">Order By</option>
            <option :value="sortingType.DESC" >Most Voted (Z - A)</option>
            <option :value="sortingType.ASC">Less Voted (A - Z)</option>
        </select>
        <hr>
        <template v-for="(item, index) in pageLinks">
            <LinkListItem :linkModel="item" 
                          :key="index"
                          @score-updated="scoreUpdated"
                          @delete="showDeleteModal" />
        </template>
        <div class="no-records" v-if="!pageLinks.length">No records found.</div>
        <br>

        <Paginate 
            :dataSource="links" 
            @paginate="setPageLinks" 
            ref="paginate"
            v-show="links.length > 5" />

        <Modal ref="modal" 
               @result="deleteLink" 
               v-show="modalIsActive"  />
    </div>
</template>

<script>
    import LinkListItem from './LinkListItem';
    import Paginate from '../Paginate';
    import Modal from '../Modal';

    const sortingType = {
        ASC: 'asc',
        DESC: 'desc'
    }

    export default {
        name: 'link-list',
        components: {
            LinkListItem,
            Paginate,
            Modal
        },
        data() {
            return {
                links: [],
                pageLinks: [],
                selectedSort: null,
                sortingType,
                selectedLinkObject: null,
                modalIsActive: null
            }
        },
        methods: {
            scoreUpdated(effectedObject) {
                this.$storage.update(effectedObject);
                this.links = this.$storage.getAll();
                this.sort(this.selectedSort);
            },
            sort(type) {
                switch (type) {
                    case sortingType.ASC : 
                         this.links.sort((a, b) => a.vote - b.vote);
                    break;

                    case  sortingType.DESC :
                        this.links.sort((a, b) => b.vote - a.vote);
                    break;
                }
            },
            setPageLinks(data) {
                this.pageLinks = data;
            },
            submitLink() {
                this.$router.push({name: 'add'});
            },
            showDeleteModal(response) {
                this.selectedLinkObject = response;
                this.$refs.modal.showModal(response.name);
            },
            deleteLink(result) {
                if(result) {
                    this.$storage.delete(this.selectedLinkObject);
                    this.$toasted.show(`${this.selectedLinkObject.name} removed`, { 
                        theme: "success-toaster", 
                        position: "top-center", 
                        duration : 2000
                    }); 
                }
                this.selectedLinkObject = null;
                this.links = this.$storage.getAll();
            }
        },
        watch: {
            selectedSort(value) {
                this.sort(value)
            },
            selectedLinkObject(value) {
                this.modalIsActive = value != null ? true : false;
            }
        },
        mounted() {
            this.links = this.$storage.getAll();
        }
    }
</script>

<template>
    <div class="pagination">
        <ul>
            <li v-for="item in totalPage" :key="item">
                <a href="#" @click.prevent="currentPage=item" :class="{'selected' : item==currentPage}">{{item}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'pagination',
        props: {
            dataSource: {
                type: Array,
                required: true
            },
            perPage: {
                type: Number,
                required: false,
                default: 5
            }
        },
        data() {
            return {
                currentPage: 1,
                totalPage: 1,
                pageItems: []
            }
        },
        methods: {
            paginate() {
                this.pageItems = [];
                let startIndex =  (this.perPage * this.currentPage) - this.perPage;
                let lastIndex = (this.perPage * this.currentPage) > this.dataSource.length ? this.dataSource.length : (this.perPage * this.currentPage);
                for(let i = startIndex; i<lastIndex; i++) {
                    this.pageItems.push(this.dataSource[i]);
                }
                this.$emit('paginate', this.pageItems);
            }
        },
        watch: {
            dataSource(value) {
                this.totalPage = value.length > this.perPage ? Math.ceil(value.length / this.perPage) : 1
                this.paginate();
            },
            currentPage() {
                this.paginate()
            },
            totalPage(value) {
                this.currentPage = (value < this.currentPage) ? value : this.currentPage;
            }
        }
    }
</script>
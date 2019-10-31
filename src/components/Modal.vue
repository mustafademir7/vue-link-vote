<template>
    <div class="modal-bg">
        <div class="modal">
            <div class="modal-title">
                <span>{{title}}</span>
                <a href="#" @click.prevent="result(false)">X</a>
            </div>
            <div class="modal-content">
                <div class="question">{{question}}</div>
                <div class="effectedName">{{effectedName}}</div>
                
                <div class="action">
                    <a href="#" @click.prevent="result(true)">OKEY</a>
                    <a href="#" @click.prevent="result(false)">CANCEL</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'modal',
        data() {
            return {
                title: 'Remove Link',
                question: 'Do you want to remove:',
                effectedName: null,
                visible: false
            }
        },
        methods: {
            showModal(effectedName) {
                this.effectedName = effectedName;
                this.visible = true;
            },
            result(status) {
                this.$emit('result', status);
                this.visible = false;
            }
        },
    }
</script>
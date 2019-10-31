<template>
    <div class="link-item">
        <div class="link-item-delete">
            <img src="@/assets/images/delete.png" class="delete" alt="delete" @click="showDeleteLinkModal">
        </div>
        <div class="link-item-vote">
            <div class="score">{{linkModel.vote}}</div>
            <span>POINTS</span>
        </div>
         <div class="link-item-detail">
             <div class="title">{{linkModel.name}}</div>
             <div class="url">({{linkModel.url}})</div>
             <div class="buttons">
                 <a href="#" class="voteUp" 
                    @click.prevent="upVote">
                    <img src="@/assets/images/arrow.png" alt="vote up">Up Vote
                </a>
                 <a href="#" class="voteDown" 
                    @click.prevent="downVote">
                    <img src="@/assets/images/arrow.png" alt="vote down">Down Vote
                </a>
             </div>
         </div>
    </div>
</template>

<script>
    export default {
        name: 'link-list',
        props: {
            linkModel: {
                type: Object,
                required: true
            }
        },
         methods: {
            upVote() {
                this.linkModel.vote++;
                this.$emit('score-updated', this.linkModel);
            },
            downVote() {
                if(this.linkModel.vote > 0) {
                    this.linkModel.vote--;
                    this.$emit('score-updated', this.linkModel);
                } else {
                    this.$toasted.show(`${this.linkModel.name} score can not be less than zero`, { 
                        theme: "danger-toaster", 
                        position: "top-center", 
                        duration : 2000
                    });
                } 
            },
            showDeleteLinkModal() {
              this.$emit("delete", this.linkModel);
            }
        }
    }
</script>

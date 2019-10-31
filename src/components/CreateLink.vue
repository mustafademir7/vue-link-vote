<template>
    <div class="create-link">
        <form @submit.prevent="save">
            <div class="row">
                <a href="#" class="backtoList" @click="goToList"><img src="@/assets/images/arrow.png" alt="return to list"> Return to List</a>
            </div>
            <h1>Add New Link</h1>
            <div class="row">
                <label>Link Name</label><br>
                <input type="text" name="linkName" v-model="name" v-validate="'required'" placeholder="Please enter link name"/><br>
                <label class="invalid-feedback" v-if="errors.has('linkName')">
                    {{ errors.first('linkName')}}
                </label>
            </div>

             <div class="row">
                <label>Link URL</label><br>
                <input type="text" name="link" v-model="url" v-validate="'required|url'" placeholder="Please enter link" /><br>
                <label class="invalid-feedback" v-if="errors.has('link')">
                    {{ errors.first('link')}}
                </label>
             </div>
            <div class="row right">
                <button type="submit">ADD</button>
            </div>
            
        </form>
    </div>
</template>

<script>
    import { Link } from '@/Models/Link';
    export default {
        name: 'create-link',
        data() {
           return {
               name: null,
               url: null
           }
        },

        methods: {
            
            goToList() {
                this.$router.push("/");
            },

            save() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        const link = new Link(this.name, this.url);
                        this.$storage.save(link.toJSON());

                        this.$toasted.show(`${link.name} added`, { 
                            theme: "success-toaster", 
                            position: "top-center", 
                            duration : 2000
                        });
                    }
                });
            }
            
        },
    }
</script>

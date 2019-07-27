<template>
    <section>
        <form class="l-form" v-on:submit="search">
            <input
            type="search"
            v-on:input="onChange"
            class="form-control col-10"
            placeholder="Enter country name (press enter to search)...">
            <button class="btn btn-primary col-2" type="submit">Search</button>
        </form>
    </section>
</template>

<script>
    export default{
        props: ['value'],
        methods: {
            onChange: function(e){
                this.$emit('input', e.target.value)
            },
            search: function(e) {
                e.preventDefault();
                //call API
                this.$store.dispatch('getCountryDetail', this.value)
            }
        }
    }
</script>

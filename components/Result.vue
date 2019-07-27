<template>
    <section v-if="error == false">
        <div class="card-columns">
            <div v-for="item in detail" class="card">
                <img class="card-img-top" v-bind:src="item.flag" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{item.name}} | {{item.alpha3Code}}</h5>
                    <p class="text-left">
                        {{item.name}} is a part of {{item.region}}, specifically {{item.subregion}}.
                        {{item.capital}} is the capital city of {{item.name}}.
                        The {{item.demonym}} uses {{ item.languages[0].name }} as their <i>lingua franca</i>.
                        This country is inhabited by {{item.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} numbers of people.
                        <template v-if="item.regionalBlocs[0]">
                            {{item.name}} is also a part of {{item.regionalBlocs[0].name}} ({{item.regionalBlocs[0].acronym}}).
                        </template>
                        {{item.name}}'s currency is {{item.currencies[0].name}}.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section v-else-if="error == true">
        <div class="card">
            <div class="card-body">
                <p class="text-justify">
                    Negara dengan query tersebut tidak ditemukan
                </p>
            </div>
        </div>
    </section>
</template>

<script>
    export default{
        props:['detail', 'error']
    }
</script>

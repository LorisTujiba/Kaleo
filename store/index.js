import vuex from 'vuex'
import axios from 'axios'

const store = () => {
    return new vuex.Store({
        state:{
            data: [],
            detail: [],
            error: {}
        },
        mutations:{
            setData(state, value){
                state[value.storeName] = value.payload
            },
        },
        actions:{
            async getCountryDetail(context, query){
                let country = [];
                try{
                    context.commit('setData', {storeName: 'error', payload: false})
                    country = await axios.get(`https://restcountries.eu/rest/v2/name/${query}`);
                }
                catch(e){
                    context.commit('setData', {storeName: 'error', payload: true } )
                }
                finally{
                    console.log(this.error)
                    context.commit('setData', {storeName: 'detail', payload: country.data})
                }
            },
        },
    })
}

export default store;

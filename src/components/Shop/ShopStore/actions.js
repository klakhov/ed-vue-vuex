import axios from 'axios'
export default {
    getRating({commit}){
        axios.get('https://www.random.org/integers/?num=3&min=1&max=1000&col=1&base=10&format=plain&rnd=new')
            .then(response=>{
                let arr = response.data.split('\n');
                arr = arr.map((item)=>{
                    return  parseInt(item);
                });
                arr.pop();
                commit('setRating',arr);
                commit('setMostPopular');
            })
    }
}
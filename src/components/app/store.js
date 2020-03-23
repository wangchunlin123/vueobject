export default {
    namespaced:true,
    state: {
        curpage:1,
        eachpage:5,
        maxpage:0,
        rows:[],
        total:0
    },

    mutations: {
       getnames(state,payload){
        Object.assign(state,payload)
       },
       setCurPage(state, payload) {
        console.log(payload);
        state.curpage = payload;
        
      },
      setEachPage(state, payload) {
        state.eachpage = payload
      }
    },
    actions:{
        async asyncgetnames(context,{ curpage, eachpage } = {}){
            let page=curpage || context.state.curpage;
            let rows=eachpage || context.state.eachpage;
            let data=await fetch(`/peoples?page=${page}&rows=${rows}`,{
                method:"get",
                headers:{
                    "Content-Type":"application/json"
                },
                // query: JSON.stringify({
                //     curpage: curpage || context.state.curpage,
                //     eachpage: eachpage || context.state.eachpage
                //   })
                // query:JSON.stringify({
                //     rows:5,
                //     page:5,
                // })
            }).then(response=>{
                return response.json();
            })
            context.commit("getnames",data)
            // console.log(data);
        }
    },
    getters:{
      
    }
}
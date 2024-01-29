console.log(Vue)

const endPoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const { createApp } = Vue;
const app = createApp({
    data: () => ({
        emailList: []
    }),
    methods: {
        fetchEmail() {
            axios.get(endPoint).then((res) => {
                this.emailList.push(res.data.response);
            })
        }
    },
    created() {
        for (let i = 1; i <= 10; i++)
            this.fetchEmail();
    }
})



app.mount('#root');
console.log(Vue)

const endPoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const { createApp } = Vue;
const app = createApp({
    data: () => ({
        emailList: []
    }),
    methods: {
        fetchNEmail(n) {

            for (let i = 1; i <= n; i++) {
                axios.get(endPoint).then((res) => {
                    this.emailList.push(res.data.response);
                })
            }

        }
    },
    created() {
        this.fetchNEmail(10);

    }
})



app.mount('#root');
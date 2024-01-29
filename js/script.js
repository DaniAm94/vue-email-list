console.log(Vue)

const { createApp } = Vue;
const app = createApp({
    data: () => {
        emailAddresses: []
    }
});

app.mount('#root');
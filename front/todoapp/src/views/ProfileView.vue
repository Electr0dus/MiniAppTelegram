<template>
    <div class="profile-container">
        <h2>Профиль</h2>
        <div class="profile-info">
            <p><strong>ID:</strong> {{user.id}}</p>
            <p><strong>Имя:</strong> {{user.name}}</p>
            <p><strong>Выполнено задач:</strong> {{user.completedTask}}</p>
        </div>
    </div>
</template>

<script>
export default{
    name: 'ProfileView',
    data() {
        return{
            user: {
                id: '',
                name: '',
                completedTask: 0
            }
        }
    },
    async mounted(){
        await this.fetchProfile()
    },
    methods: {
        async fetchProfile(){
            try{
                const tg_user = window.Telegram.WebApp.initDataUnsafe?.user
                const response = await fetch('https://orange-space-eureka-4vr977j46wgcj976-8000.app.github.dev/api/main/${tg_user.id}')
                const data = await response.json()
                this.user.id = tg_user.id
                this.user.name = tg_user.first_name
                this.user.completedTask = data.completedTask
            } catch (error){
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>
.profile-container{
flex: 1;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 16px;
}
</style>
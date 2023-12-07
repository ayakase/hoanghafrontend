// stores/counter.js
import { defineStore } from 'pinia'
import baseUrl from '../connect';

export const useLoginStore = defineStore('loginstate', {
    id: 'auth',
    state: () => {
        return { login: false }
    },
    actions: {
        async checkLogin() {
            try {
                const response = await baseUrl.post('/admin/login/state');
                this.login = response.data
                this.changeState(response.data)
            } catch (error) {
                console.error("Error in checkLogin:", error);
            }
        }
    }

})
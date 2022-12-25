import { defineStore } from 'pinia'

export const useControlsStore = defineStore('controls', {
    state: () => {
        return {
            search: '',
            region: ''
        }
    },

    actions: {
        setSearch(payload: string) {
            this.search = payload
        },
        setRegion(payload: string) {
            this.region = payload
        },
        clearControls() {
            this.search = ''
            this.region = ''
        }
    }
})

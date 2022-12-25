import { defineStore } from 'pinia'
import instance from '../axios/index.js'
import { ALL_COUNTRIES } from '../axios/index.js'
import { useControlsStore } from './controls.js'

export const useCountriesStore = defineStore('countries', {
    state: () => {
        return {
            status: 'idle',
            error: null,
            list: <any>[]
        }
    },
    actions: {
        async loadCountries() {
            try {
                this.status = 'loading'
                const response = await instance.get(ALL_COUNTRIES)
                this.status = 'received'
                this.list = response.data
            } catch (err: any) {
                this.status = 'rejected'
                this.error = err
            }
        }
    },
    getters: {
        getCountriesInfo(state) {
            return {
                status: state.status,
                error: state.error,
                qty: state.list.length
            }
        },
        getAllCountries(state) {
            return state.list
        },
        getVisibleCountries: (state): any => {
            const controls = useControlsStore()

            return state.list.filter((country: { [k: string]: any }) => country.name.toLowerCase().includes(controls.search.toLowerCase()) && country.region.includes(controls.region))
        }
    }
})
import { defineStore } from 'pinia'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import instance from '../axios/index.js'
import { SEARCH_BY_COUNTRY } from '../axios/index.js'
import { FILTER_BY_CODE } from '../axios/index.js'

export const useDetailsStore = defineStore('details', {
    state: () => {
        return {
            currentCountry: <any>null,
            neighbors: <any>[],
            status: "idle",
            error: null,
        }
    },

    actions: {
        async loadCountryByName(route: RouteLocationNormalizedLoaded) {
            try {
                this.status = 'loading'
                const response = await instance.get(SEARCH_BY_COUNTRY + route.params.name)
                this.status = 'received'
                this.currentCountry = response.data[0]
            } catch (err: any) {
                this.status = 'rejected'
                /*  this.error = err */
                console.log(err)
            }
        },
        async loadNeighborsByBorder(borders: Array<string>) {
            try {
                const response = await instance.get(FILTER_BY_CODE + borders.join(','))
                this.neighbors = response.data.map((country: { [k: string]: any }) => country.name)
            } catch (err: any) {
                this.error = err
            }

        },
        clearDetails() {
            this.currentCountry = null,
                this.neighbors = [],
                this.status = 'idle',
                this.error = null

        }
    }
})
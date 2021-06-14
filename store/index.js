export const state = () => ({
    menuItems: [],
    exploreCards: ''
})

export const getters = {
    getMenus: (state) => {
        return state.menuItems
    },
    getExploreCards: (state) => {
        return state.exploreCards
    }
}

export const mutations = {
    SET_MENUS: (state, payload) => {
        state.menuItems = payload
    },
    SET_CARDS: (state, payload) => {
        state.exploreCards = payload
    }
}

export const actions = {
    async nuxtServerInit({ commit }) {
        const menus = await this.$strapi.find('menus')
        const cards = await this.$strapi.find('explore-cards')
        commit('SET_MENUS', menus)
        commit('SET_CARDS', cards)
    },


}
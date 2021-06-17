export const state = () => ({
    menuItems: [],
    exploreCards: '',
    menuState: false,
    searchToggle: false
})

export const getters = {
    getMenus: (state) => {
        return state.menuItems
    },
    getExploreCards: (state) => {
        return state.exploreCards
    },
    getMenuState: (state) => {
        return state.menuState
    },
}

export const mutations = {
    SET_MENUS: (state, payload) => {
        state.menuItems = payload
    },
    SET_CARDS: (state, payload) => {
        state.exploreCards = payload
    },
    toggleMenuState(state) {
        state.menuState = !state.menuState
    },
    toggleSearch(state) {
        state.searchToggle = !state.searchToggle
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
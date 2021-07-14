export const state = () => ({
    menuItems: [],
    exploreCards: '',
    menuState: false,
    searchToggle: false,
    phoneSearch: false,
    carouselCards: {}
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
    getCarouselCards: (state) => {
        return state.carouselCards
    },
}

export const mutations = {
    SET_MENUS: (state, payload) => {
        state.menuItems = payload
    },
    SET_CARDS: (state, payload) => {
        state.exploreCards = payload
    },
    SET_CAROUSEL_CARDS: (state, payload) => {
        state.carouselCards = payload
    },
    toggleMenuState(state) {
        state.menuState = !state.menuState
    },
    toggleSearch(state) {
        state.searchToggle = !state.searchToggle
    },
    togglePhoneSearch(state) {
        state.phoneSearch = !state.phoneSearch
    }
}

export const actions = {
    async nuxtServerInit({ commit }) {
        const menus = await this.$strapi.find('menus')
        const cards = await this.$strapi.find('explore-cards')
        const categories = await this.$strapi.find('carousel-cards')
        console.log(categories);
        commit('SET_MENUS', menus)
        commit('SET_CARDS', cards)
        commit('SET_CAROUSEL_CARDS', categories)
    },


}
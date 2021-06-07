export const state = () => ({
    menuItems: []
})

export const getters = {
    getMenus: (state) => {
        return state.menuItems
    }
}

export const mutations = {
    SET_MENUS: (state, payload) => {
        state.menuItems = payload
    }
}

export const actions = {
    async nuxtServerInit({ commit }) {
        const menus = await this.$strapi.find('menus')
        commit('SET_MENUS', menus)
    },

}
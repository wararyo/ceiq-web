import Vue from 'vue';
class CEiQ {
    constructor() {
        this.VM = new Vue({ 
            data: () => ({
                isMobileMenuOpen: false
            }),
        });
    }
    get state() {
        return this.VM.$data;
    }

    get count() {
        return this.VM.$data.count;
    }
}

const ceiq = {
    Store: CEiQ,
    install (Vue, options) {
        Vue.mixin({
            beforeCreate() {
                this.$ceiq = options.store;
            }
        });
    },

};
export default ceiq;
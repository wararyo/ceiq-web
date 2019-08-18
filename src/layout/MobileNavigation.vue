<template>
    <transition name="mobile-navigation">
    <div class="mobile-navigation" v-if="$ceiq.state.isMobileMenuOpen" @click="toggleMenu">
        <ul>
            <li><a class="mobile-navigation-logo" href="#"><img class="" width="120" src="@/assets/logo-text.svg" alt="CEiQ"></a></li>
            <li><a href="#lecturers">LECTURERS</a></li>
            <li><a href="#schedule">SCHEDULE</a></li>
            <li><a href="#sponsors">SPONSOR</a></li>
            <li><a href="#access">ACCESS</a></li>
            <li><a href="#lightningtalk">LT会 登壇者募集</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li><div class="mobile-navigation-reserve"><a href="https://ceiq-event2019.peatix.com/">予約する</a></div></li>
            <li><share /></li>
        </ul>
    </div>
    </transition>
</template>

<script>
import Share from '@/components/Share.vue';
export default {
    components: {
        Share
    },
    methods: {
        toggleMenu: function() {
            this.$ceiq.state.isMobileMenuOpen = !this.$ceiq.state.isMobileMenuOpen;
        }
    }
}
</script>

<style lang="scss" scoped>
.mobile-navigation {
    position: fixed;
    z-index: 20;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: scroll;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(white,.5);
    backdrop-filter: blur(8px);
    > ul {
        width: calc(100% - 32px);
        max-width: 320px;
        padding: 32px 48px;
        list-style-type: none;
        font-size: 1.1em;
        font-family: menco, sens-serif;
        font-style: italic;
        font-weight: 700;
        border-radius: 40px;
        background: rgba(#faf9f0, .95);
        box-shadow: 0px 5px 10px rgba(112, 40, 52,.1);
        li {
        }
        a {
            display: block;
            color: #333;
            text-decoration: none;
            line-height: 2.25em;
        }
    }
    .mobile-navigation-logo {
        margin: 12px;
        display: block;
        text-align: center;
        img {
            display: inline-block;
        }
    }
    .mobile-navigation-reserve {
        margin: 0.5em;
        text-align: center;
        a {
            padding: 0 1em;
            line-height: 2em;
            font-style: normal;
            display: inline-block;
            border: 1px solid #333;
            border-radius: 1em;
        }
    }
    .share {
        justify-content: center;
    }
}

.mobile-navigation {
  transition: all .2s ease-in-out;
  > ul {
    transition: all .2s ease-in-out;
  }
}
.mobile-navigation-leave-active {
  transition: all .2s ease-in-out;
  > ul {
    transition: all .2s ease-in-out;
  }
}
.mobile-navigation-enter, .mobile-navigation-leave-to {
  opacity: 0;
  > ul {
      transform: scale(.95);
  }
}
</style>


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import { InertiaProgress } from '@inertiajs/progress'
import PortalVue from 'portal-vue'

Vue.use(PortalVue)
Vue.use(plugin)
Vue.mixin({ methods: { route: window.route } })

const el = document.getElementById('app')


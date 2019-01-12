import $ from 'jquery'
import Vue from 'vue'

import './css/index.css'
import './css/index.less'
import './css/index.scss'

$(function(){
    $('li:odd').css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor',function(){
        return '#'+'D97634'
    })
})

var vm = new Vue({
    el: "",
    data: {
        msg: 123
    }
})
// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function() {
    console.log('nello script', $('body'));
    $('body').append('<input type="button" value="Open" id="CP">')
    $("#CP").css("position", "fixed").css("top", 0).css("left", 0).css("z-index", 10000000000);

    $('#CP').click(function(){
        const plainUrl = window.location.href.split('&')[0];
        const title = document.querySelector("#container > h1 > yt-formatted-string").innerText//.split('>')[1].split('<')[0]
        $.post('http://localhost:8081/download', { url: plainUrl, nomefile: title })
    });
});
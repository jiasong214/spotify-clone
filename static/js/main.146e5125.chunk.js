(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),c=n(7),s=n.n(c),i=n(1),u=n(4),o=n(2),l="token/SET_TOKEN",d="token/SET_REFRESH_TOKEN",b=function(e){return{type:l,access_token:e}},j={access_token:"",refresh_token:""};var O="user/PENDING_USER_FETCH",m="user/SUCCEED_USER_FETCH",f="user/FAIL_USER_FETCH",p={data:{},pending:!1,error:null};var h="mainView/UPDATE_VIEW_TYPE",g=function(e){return{type:h,viewType:e}},v={viewType:"",error:null};var A="albums/PENDING_ALBUMS_FETCH",y="albums/SUCCEED_ALBUMS_FETCH",x="albums/FAIL_ALBUMS_FETCH",N="albums/SET_CURRENT_ALBUM",w={data:{},pending:!1,error:null};var E="songs/PENDING_SONGS_FETCH",S="songs/SUCCEED_SONGS_FETCH",k="songs/FAIL_SONGS_FETCH",C="songs/PENDING_SEARCH_SONGS_FETCH",B="songs/SUCCEED_SEARCH_SONGS_FETCH",T="songs/FAIL_SEARCH_SONGS_FETCH",I="songs/PLAY_SONG",_="songs/PAUSE_SONG",F=function(){return{type:E}},D=function(e){return{type:S,data:e}},Y=function(e){return{type:k,error:e}},L=function(e){return{type:I,play:!0,current_song:e}},R=function(e){return{type:_,play:!1,current_song:e}},U={pending:!1,data:{},search_term:"",current_song:{},play:!1,error:null};var G="playlists/PENDING_PLAYLISTS_FETCH",M="playlists/SUCCEED_PLAYLISTS_FETCH",P="playlists/FAIL_PLAYLISTS_FETCH",H="playlists/SET_CURRENT_PLAYLIST",W={data:{},pending:!1,error:null};var J="browse/PENDING_NEW_RELEASES_FETCH",V="browse/SUCCEED_NEW_RELEASES_FETCH",z="browse/FAIL_NEW_RELEASES_FETCH",X="browse/PENDING_CATEGORIES_FETCH",Z="browse/SUCCEED_CATEGORIES_FETCH",Q="browse/FAIL_CATEGORIES_FETCH",q="browse/PENDING_FEATURED_FETCH",K="browse/SUCCEED_FEATURED_FETCH",$="browse/FAIL_FEATURED_FETCH",ee={pending:!1,data:{},error:null};var te=Object(u.c)({token:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)(Object(o.a)({},e),{},{access_token:t.access_token});case d:return Object(o.a)(Object(o.a)({},e),{},{refersh_token:t.refresh_token});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(o.a)(Object(o.a)({},e),{},{pending:!0});case m:return Object(o.a)(Object(o.a)({},e),{},{data:t.data,pending:!1});case f:return Object(o.a)(Object(o.a)({},e),{},{pending:!1,error:t.error});default:return e}},mainView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(o.a)(Object(o.a)({},e),{},{viewType:t.viewType});default:return e}},albums:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(o.a)(Object(o.a)({},e),{},{pending:!0});case y:return Object(o.a)(Object(o.a)({},e),{},{data:Object(o.a)(Object(o.a)({},e.data),{},{albums:t.data}),pending:!1});case x:return Object(o.a)(Object(o.a)({},e),{},{pending:!1,error:t.error});case N:return Object(o.a)(Object(o.a)({},e),{},{data:Object(o.a)(Object(o.a)({},e.data),{},{currentAlbum:t.data})});default:return e}},songs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(o.a)(Object(o.a)({},e),{},{pending:!0});case S:return Object(o.a)(Object(o.a)({},e),{},{pending:!1,data:t.data});case k:return Object(o.a)(Object(o.a)({},e),{},{pending:!1,error:t.error});case C:return Object(o.a)(Object(o.a)({},e),{},{pending:!0});case B:return Object(o.a)(Object(o.a)({},e),{},{pending:!1,data:t.data,search_term:t.search_term});case T:return Object(o.a)(Object(o.a)({},e),{},{pending:!1,error:t.error});case I:case _:return Object(o.a)(Object(o.a)({},e),{},{play:t.play,current_song:t.current_song});default:return e}},playlists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(o.a)(Object(o.a)({},e),{},{pending:!0});case M:return Object(o.a)(Object(o.a)({},e),{},{data:t.data,pending:!1});case P:return Object(o.a)(Object(o.a)({},e),{},{pending:!1,error:t.error});case H:return Object(o.a)(Object(o.a)({},e),{},{current_playlist:t.data});default:return e}},browse:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(o.a)(Object(o.a)({},e),{},{pending:!0});case V:return Object(o.a)(Object(o.a)({},e),{},{pending:!1,data:t.data});case z:return Object(o.a)(Object(o.a)({},e),{},{pending:!1,error:t.error});case X:return Object(o.a)(Object(o.a)({},e),{},{pending:!0});case Z:return Object(o.a)(Object(o.a)({},e),{},{pending:!1,data:t.data});case Q:return Object(o.a)(Object(o.a)({},e),{},{pending:!1,error:t.error});case q:return Object(o.a)(Object(o.a)({},e),{},{pending:!0});case K:return Object(o.a)(Object(o.a)({},e),{},{pending:!1,data:t.data});case $:return Object(o.a)(Object(o.a)({},e),{},{pending:!1,error:t.error});default:return e}}}),ne=[n(17).a],re=function(){return Object(u.d)(te,u.a.apply(void 0,ne))}(),ae=n(5),ce=n.n(ae),se=n(8),ie=n(10),ue=n(15),oe=function(){var e=Object(se.a)(ce.a.mark((function e(t){var n,r,a,c,s;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://accounts.spotify.com/api/token?code=".concat(t,"&grant_type=authorization_code&redirect_uri=http://jiasong214.github.io/music-app/"),e.prev=1,e.next=4,fetch(n,{method:"POST",headers:{Authorization:"Basic "+btoa("7da971157300402095a7852508e36dce:9c0e75f27b084a718f560a6e7ec7ef19"),"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"}});case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,c=a.access_token,s=a.refresh_token,e.abrupt("return",{access_token:c,refresh_token:s});case 13:e.prev=13,e.t0=e.catch(1),console.log("access token err");case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),le=function(e){return function(t){return t({type:O}),fetch("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer "+e}}).then((function(e){return e.json()})).then((function(e){return t({type:m,data:e})})).catch((function(e){return t(function(e){return{type:f,error:e}}(e))}))}},de=function(e){return function(t){return t({type:A}),fetch("https://api.spotify.com/v1/me/albums",{headers:{Authorization:"Bearer "+e}}).then((function(e){return e.json()})).then((function(e){return t({type:y,data:e})})).catch((function(e){return t(function(e){return{type:x,error:e}}(e))}))}},be=function(e){return function(t){return t({type:J}),fetch("https://api.spotify.com/v1/browse/new-releases",{headers:{Authorization:"Bearer "+e}}).then((function(e){return e.json()})).then((function(e){return t({type:V,data:e})})).catch((function(e){return t({type:z,error:e})}))}},je=function(e){return function(t){return t({type:X}),fetch("https://api.spotify.com/v1/browse/categories",{headers:{Authorization:"Bearer "+e}}).then((function(e){return e.json()})).then((function(e){return t({type:Z,data:e})})).catch((function(e){return t({type:Q,error:e})}))}},Oe=function(e){return function(t){return t({type:q}),fetch("https://api.spotify.com/v1/browse/featured-playlists",{headers:{Authorization:"Bearer "+e}}).then((function(e){return e.json()})).then((function(e){return t({type:K,data:e})})).catch((function(e){return t({type:$,error:e})}))}},me=function(e,t){return function(n){return n({type:C}),fetch("https://api.spotify.com/v1/search?q=".concat(t,"&type=track&limit=30&offset=5"),{headers:{Authorization:"Bearer "+e}}).then((function(e){return e.json()})).then((function(e){var t=e.tracks.items.filter((function(e,t,n){return t===n.findIndex((function(t){return t.name===e.name&&t.artists[0].name===e.artists[0].name}))}));return{items:Object(ue.a)(t)}})).then((function(e){return n(function(e,t){return{type:B,data:e,search_term:t}}(e,t))})).catch((function(e){return n({type:T,error:e})}))}},fe=function(e){return function(t){return t({type:G}),fetch("https://api.spotify.com/v1/me/playlists",{headers:{Authorization:"Bearer "+e}}).then((function(e){return e.json()})).then((function(e){return t({type:M,data:e})})).catch((function(e){return t(function(e){return{type:P,error:e}}(e))}))}},pe=(n(29),n(0)),he=function(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.token.access_token}),i.b),n=Object(i.d)((function(e){return e.playlists.data}),i.b);Object(r.useEffect)((function(){e(fe(t))}),[t,e]);var a=function(n){switch(n.target.innerHTML){case"Browse":e(g("browse")),e(be(t));break;case"Recently Played":e(g("recentlyPlayed")),e((r=t,function(e){return e(F()),fetch("https://api.spotify.com/v1/me/player/recently-played",{headers:{Authorization:"Bearer "+r}}).then((function(e){return e.json()})).then((function(e){var t=e.items.filter((function(e,t,n){return t===n.findIndex((function(t){return t.track.name===e.track.name&&t.track.artists[0].name===e.track.artists[0].name}))}));return{items:Object(ue.a)(t)}})).then((function(t){return e(D(t))})).catch((function(t){return e(Y(t))}))}));break;case"Liked Songs":e(g("likedSongs")),e(function(e){return function(t){return t(F()),fetch("https://api.spotify.com/v1/me/tracks",{headers:{Authorization:"Bearer "+e}}).then((function(e){return e.json()})).then((function(e){return t(D(e))})).catch((function(e){return t(Y(e))}))}}(t));break;case"Albums":e(g("albums")),e(de(t));break;case"Artists":e(g("artists"))}var r},c=function(n){var r,a;e(g("playlist")),e(function(e){return{type:H,data:e}}(n)),e((r=t,a=n.id,function(e){return e(F()),fetch("https://api.spotify.com/v1/playlists/".concat(a,"/tracks"),{headers:{Authorization:"Bearer "+r}}).then((function(e){return e.json()})).then((function(t){return e(D(t))})).catch((function(t){return e(Y(t))}))}))};return Object(pe.jsxs)("nav",{children:[Object(pe.jsx)("ul",{children:Object(pe.jsx)("li",{onClick:function(e){return a(e)},children:"Browse"})}),Object(pe.jsx)("h1",{children:"YOUR LIBRARY"}),Object(pe.jsxs)("ul",{children:[Object(pe.jsx)("li",{onClick:function(e){return a(e)},children:"Recently Played"}),Object(pe.jsx)("li",{onClick:function(e){return a(e)},children:"Liked Songs"}),Object(pe.jsx)("li",{onClick:function(e){return a(e)},children:"Albums"}),Object(pe.jsx)("li",{onClick:function(e){return a(e)},children:"Artists"})]}),Object(pe.jsx)("h1",{children:"PLAYLISTS"}),Object(pe.jsx)("ul",{children:n.items?n.items.map((function(e){return Object(pe.jsx)("li",{onClick:function(){return c(e)},children:e.name},e.name)})):null})]})},ge=n.p+"static/media/play-btn.16d1fa01.png",ve=n.p+"static/media/pause-btn.879dbdab.png",Ae=n.p+"static/media/next-song-btn.269fdd55.png",ye=n.p+"static/media/last-song-btn.a493e03f.png",xe=n.p+"static/media/volume.fa80322f.png",Ne=(n(31),function(){var e=Object(i.c)(),t=Object(r.useRef)(null),n=Object(i.d)((function(e){return e.songs}),i.b),a=Object(i.d)((function(e){return e.songs.current_song}),i.b),c=Object(i.d)((function(e){return e.songs.data}),i.b),s=Object(r.useState)(0),u=Object(ie.a)(s,2),o=u[0],l=u[1];Object(r.useEffect)((function(){if(n.stop){if(null===t.current||void 0===t.current.src)return;return t.current.pause(),void(t.current.currentTime=0)}if(!n.play){if(null===t.current||void 0===t.current.src)return;t.current.pause()}n.play&&t.current.play()}),[n]);var d=function(){var e,t=c.tracks?c.tracks:c;if(1!==t.items.length)return t.items.forEach((function(t,n){void 0!==t.name?t.name===a.name&&t.artists[0].name===a.artists[0].name&&(e=n):void 0!==t.track&&t.track.name===a.name&&t.track.artists[0].name===a.artists[0].name&&(e=n)})),{refinedSongList:t,currentSongIndex:e}};return Object(r.useEffect)((function(){var t;return n.play&&(o>=30?(l(0),e(R(a))):t=setInterval((function(){l(o+1)}),1e3)),function(){return clearInterval(t)}}),[n.play,o,e]),Object(r.useEffect)((function(){l(0)}),[a]),Object(pe.jsxs)("aside",{className:"playBar",children:[Object(pe.jsxs)("div",{className:"currentPlaySong",children:[a.album?Object(pe.jsx)("img",{src:a.album.images[0].url,alt:"current playing album cover"}):"",Object(pe.jsxs)("div",{children:[Object(pe.jsx)("p",{className:"currentPlaySong__title",children:a.name?a.name:""}),Object(pe.jsx)("p",{className:"currentPlaySong__artist",children:a.artists?a.artists[0].name:""})]})]}),Object(pe.jsx)("audio",{ref:t,src:a.preview_url}),Object(pe.jsxs)("div",{className:"songControl",children:[Object(pe.jsx)("div",{className:"reverseSong",onClick:function(){return function(){if(a.name&&void 0!==d()){var t=d(),r=t.refinedSongList,c=t.currentSongIndex,s=r.items[c-1];n.play?e(L(s.track?s.track:s)):e(R(s.track?s.track:s))}}()},children:Object(pe.jsx)("img",{src:ye,alt:"reverse button"})}),Object(pe.jsx)("div",{className:"playSong",onClick:function(){a.name&&(n.play?e(R(a)):e(L(a)))},children:Object(pe.jsx)("img",{src:n.play?ve:ge,alt:"play button"})}),Object(pe.jsx)("div",{className:"nextSong",onClick:function(){return function(){if(a.name&&void 0!==d()){var t=d(),r=t.refinedSongList,c=t.currentSongIndex,s=r.items[c+1];n.play?e(L(s.track?s.track:s)):e(R(s.track?s.track:s))}}()},children:Object(pe.jsx)("img",{src:Ae,alt:"next button"})})]}),Object(pe.jsxs)("div",{className:"songProgress",children:[Object(pe.jsxs)("div",{className:"currentProgress",children:["0:",o<10?"0"+o:o]}),Object(pe.jsx)("div",{className:"progressBar",children:Object(pe.jsx)("div",{className:"progressBar__progress",style:{width:o/30*100+"%"}})}),Object(pe.jsxs)("div",{className:"expiredProgress",children:["0:",-(o-30)<10?"0"+-(o-30):-(o-30)]})]}),Object(pe.jsxs)("div",{className:"volumeControl",children:[Object(pe.jsx)("img",{src:xe,alt:"volume control"}),Object(pe.jsx)("input",{type:"range",max:"1",min:"0",step:"0.01",onChange:function(e){return function(e){t.current.volume=e.target.value}(e)}})]})]})}),we=(n(32),function(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.token.access_token}),i.b),n=Object(i.d)((function(e){return e.user.data}),i.b);Object(r.useEffect)((function(){e(le(t))}),[t,e]);return n&&n.display_name?Object(pe.jsxs)("header",{children:[Object(pe.jsx)("form",{onSubmit:function(n){return function(n){n.preventDefault();var r=n.target[0].value;e(g("search")),e(me(t,r)),n.target[0].value=""}(n)},children:Object(pe.jsx)("input",{placeholder:"Search"})}),Object(pe.jsxs)("div",{className:"user",children:[Object(pe.jsx)("img",{className:"userImg",src:n.images[0].url,alt:"user profile"}),Object(pe.jsx)("div",{className:"userName",children:n.display_name})]})]}):null}),Ee=(n(33),n(34),function(e){var t=Object(i.c)(),n=Object(i.d)((function(e){return e.token.access_token}),i.b),r=function(r){var a,c,s;"categories"!==e.data.type&&(t(g("albumTrack")),t((a=r.album?r.album:r,{type:N,data:a})),t((c=n,s=r.href?r.href:r.album.href,function(e){return e(F()),fetch(s,{headers:{Authorization:"Bearer "+c}}).then((function(e){return e.json()})).then((function(t){return e(D(t))})).catch((function(t){return e(Y(t))}))})))};return e.data&&e.data.albums&&e.data.albums.items?Object(pe.jsx)("ul",{className:"albumList",children:e.data.albums.items.map((function(t){return Object(pe.jsxs)("li",{className:"albumList__item",onClick:function(){return r(t)},children:[Object(pe.jsx)("img",{className:"albumList__img",src:t.images?t.images[0].url:t.icons?t.icons[0].url:t.album?t.album.images[0].url:"",alt:"album cover"}),"categories"===e.data.type?Object(pe.jsx)("h2",{className:"albumList__title--categories",children:t.name?t.name:""}):""]},t.album?t.album.name:t.name)}))}):null}),Se=(n(35),function(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.token.access_token}),i.b),n=Object(i.d)((function(e){return e.browse.data}),i.b);Object(r.useEffect)((function(){e(be(t))}),[t,e]);var a,c=function(n){switch(n.target.parentElement.querySelectorAll(".active").forEach((function(e){return e.classList.remove("active")})),n.target.classList.add("active"),n.target.innerHTML){case"New Releases":e(be(t));break;case"Genres &amp; Moods":e(je(t));break;case"Featured":e(Oe(t))}};return n.albums?a={type:"newReleases",albums:n.albums}:n.playlists?a={type:"featured",albums:n.playlists}:n.categories&&(a={type:"categories",albums:n.categories}),n?Object(pe.jsxs)("div",{className:"view browse",children:[Object(pe.jsxs)("div",{className:"browse__titleBox",children:[Object(pe.jsx)("h1",{className:"view__title",children:"Browse"}),Object(pe.jsxs)("div",{className:"tapButtons",children:[Object(pe.jsx)("div",{className:"active",onClick:function(e){return c(e)},children:"New Releases"}),Object(pe.jsx)("div",{onClick:function(e){return c(e)},children:"Featured"}),Object(pe.jsx)("div",{onClick:function(e){return c(e)},children:"Genres & Moods"})]})]}),Object(pe.jsx)(Ee,{data:a})]}):null}),ke=(n(36),function(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.songs.play}),i.b),n=Object(i.d)((function(e){return e.songs.current_song}),i.b);return Object(pe.jsx)("div",{className:"playBtn",onClick:function(){!1===t?e(L(n)):!0===t&&e(R(n))},children:t?"PAUSE":"PLAY"})}),Ce=(n(37),n.p+"static/media/like-empty.e7ec3ad0.png"),Be=n.p+"static/media/like-full.1f20b9a6.png",Te=function(e){var t=Object(i.c)(),n=Object(i.d)((function(e){return e.songs.play}),i.b),r=Object(i.d)((function(e){return e.songs.current_song}),i.b),a=function(e){var t;if(void 0!==e.preview_url)t=e;else{if(void 0===e.track.preview_url)return;t=e.track}return t};return e&&e.data&&e.data.items?Object(pe.jsxs)("table",{className:"songTable",children:[Object(pe.jsx)("thead",{children:Object(pe.jsxs)("tr",{children:[Object(pe.jsx)("th",{}),Object(pe.jsx)("th",{}),Object(pe.jsx)("th",{children:"Title"}),Object(pe.jsx)("th",{children:"Artist"}),Object(pe.jsx)("th",{children:"Album"}),Object(pe.jsx)("th",{children:"Time"})]})}),Object(pe.jsx)("tbody",{children:e.data.items.map((function(c){var s,i=a(c);return Object(pe.jsxs)("tr",{className:void 0!==r.name&&r.name===i.name&&r.duration_ms===i.duration_ms?"songTable__item active":"songTable__item",children:[Object(pe.jsx)("td",{className:"songTable__playBtn",onClick:function(){return function(e){var c=a(e);null!==c.preview_url&&(n&&c.name===r.name?t(R(c)):t(L(c)))}(c)},children:Object(pe.jsx)("img",{src:n&&void 0!==r.name&&r.name===i.name&&r.duration_ms===i.duration_ms?ve:ge,alt:"song play button"})}),Object(pe.jsx)("td",{className:"songTable__likeBtn",children:Object(pe.jsx)("img",{src:"likedSongs"===e.type?Be:Ce,alt:"song like button"})}),Object(pe.jsx)("td",{className:"songTable__songName",children:i.name}),Object(pe.jsx)("td",{children:i.artists[0].name}),Object(pe.jsx)("td",{children:i.album?i.album.name:e.album_name}),Object(pe.jsx)("td",{children:(s=i.duration_ms,new Date(s).toISOString().slice(14,-1).slice(0,5))})]},i.name+i.duration_ms)}))})]}):null},Ie=function(){var e=Object(i.d)((function(e){return e.songs.data}),i.b);return Object(pe.jsxs)("div",{className:"view",children:[Object(pe.jsxs)("div",{className:"view__titleBox",children:[Object(pe.jsx)("h1",{className:"view__title",children:"Liked Songs"}),Object(pe.jsx)(ke,{})]}),Object(pe.jsx)(Te,{data:e,type:"likedSongs"})]})},_e=function(){var e=Object(i.d)((function(e){return e.songs.data}),i.b);return Object(pe.jsxs)("div",{className:"view",children:[Object(pe.jsxs)("div",{className:"view__titleBox",children:[Object(pe.jsx)("h1",{className:"view__title",children:"Recently Played"}),Object(pe.jsx)(ke,{})]}),Object(pe.jsx)(Te,{data:e})]})},Fe=function(){var e=Object(i.d)((function(e){return e.albums.data}),i.b);return Object(pe.jsxs)("div",{className:"view albums",children:[Object(pe.jsx)("h1",{className:"view__title",children:"Albums"}),Object(pe.jsx)(Ee,{data:e})]})},De=(n(38),function(){return Object(pe.jsxs)("div",{className:"view artists",children:[Object(pe.jsx)("h1",{className:"view__title",children:"Artists"}),Object(pe.jsx)("img",{className:"artists__img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABqCAYAAABZP7TQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBFNDdDNEVGODlFNjExRUJBNDY1RTI1QTY0Qzk4N0Q1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBFNDdDNEYwODlFNjExRUJBNDY1RTI1QTY0Qzk4N0Q1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEU0N0M0RUQ4OUU2MTFFQkE0NjVFMjVBNjRDOTg3RDUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEU0N0M0RUU4OUU2MTFFQkE0NjVFMjVBNjRDOTg3RDUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4O0N7SAAATQklEQVR42uxdC1hO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",alt:"icon"}),Object(pe.jsx)("p",{children:"Your favorite artists will appear here. Go to your Browse page to find amazing playlists for every mood and moment."}),Object(pe.jsx)("div",{className:"artists__btn",children:"GO TO BROWSE"})]})}),Ye=(n(39),function(e){return Object(pe.jsxs)("div",{className:"albumInfo",children:[Object(pe.jsx)("img",{src:e.data.images?e.data.images[0].url:e.data.icons[0].url,alt:"album cover"}),Object(pe.jsxs)("div",{className:"albumInfo__innerbox",children:[Object(pe.jsx)("h1",{children:"ALBUM"}),Object(pe.jsx)("h2",{children:e.data.name}),Object(pe.jsxs)("p",{children:["By ",Object(pe.jsx)("span",{children:e.data.artists?e.data.artists[0].name:e.data.owner?e.data.owner.display_name:""}),", ",e.data.total_tracks?e.data.total_tracks:e.data.tracks?e.data.tracks.total:""," song"]}),Object(pe.jsx)(ke,{})]})]})}),Le=function(){var e=Object(i.d)((function(e){return e.playlists.current_playlist}),i.b),t=Object(i.d)((function(e){return e.songs.data}),i.b);return e?Object(pe.jsxs)("div",{className:"view playlist",children:[Object(pe.jsx)(Ye,{data:e}),Object(pe.jsx)(Te,{data:t})]}):null},Re=function(){var e=Object(i.d)((function(e){return e.songs.data}),i.b),t=Object(i.d)((function(e){return e.songs.search_term}),i.b);return e?Object(pe.jsxs)("div",{className:"view",children:[Object(pe.jsx)("div",{className:"view__titleBox",children:Object(pe.jsxs)("h1",{className:"view__title",children:["Search results of ",'"'.concat(t,"'\"")]})}),Object(pe.jsx)(Te,{data:e})]}):null},Ue=function(){var e=Object(i.d)((function(e){return e.albums.data}),i.b),t=Object(i.d)((function(e){return e.songs.data}),i.b);return e&&t?Object(pe.jsxs)("div",{className:"albumTrack",children:[Object(pe.jsx)(Ye,{data:e.currentAlbum}),Object(pe.jsx)(Te,{data:t.tracks,album_name:e.currentAlbum.name})]}):null},Ge=function(){var e=Object(i.d)((function(e){return e.mainView.viewType}),i.b);return Object(pe.jsx)("main",{className:"main",children:"browse"===e||""===e?Object(pe.jsx)(Se,{}):"likedSongs"===e?Object(pe.jsx)(Ie,{}):"recentlyPlayed"===e?Object(pe.jsx)(_e,{}):"albums"===e?Object(pe.jsx)(Fe,{}):"artists"===e?Object(pe.jsx)(De,{}):"playlist"===e?Object(pe.jsx)(Le,{}):"search"===e?Object(pe.jsx)(Re,{}):Object(pe.jsx)(Ue,{})})},Me=(n(40),function(e){return Object(pe.jsxs)("aside",{className:e.active?"modal active":"modal",children:[Object(pe.jsx)("p",{className:"modal__text",children:"Song might be not be able to play due to API provide."}),Object(pe.jsxs)("div",{className:"buttonBox",children:[Object(pe.jsx)("div",{className:"modal__closeBtn",onClick:function(e){return function(e){e.target.closest(".modal").classList.remove("active")}(e)},children:"GOT IT"}),Object(pe.jsx)("div",{className:"modal__infoBtn",children:"MORE INFO"})]})]})});var Pe=function(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.token.access_token}),i.b),n=Object(r.useState)(!1),a=Object(ie.a)(n,2),c=a[0],s=a[1],u=function(){for(var e,t={},n=/([^&;=]+)=?([^&;]*)/g,r=window.location.href.split("?")[1];e=n.exec(r);)t[e[1]]=decodeURIComponent(e[2]);return t};return Object(r.useEffect)((function(){""===t&&function(){var t=Object(se.a)(ce.a.mark((function t(){var n,r,a;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u().code,t.next=3,oe(n);case 3:r=t.sent,(a=r.access_token)?e(b(a)):window.location.href="https://accounts.spotify.com/authorize?client_id=7da971157300402095a7852508e36dce&response_type=code&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&redirect_uri=http://jiasong214.github.io/music-app/";case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[t,e]),Object(r.useEffect)((function(){setTimeout((function(){s(!0)}),2e3)}),[]),t?Object(pe.jsxs)(pe.Fragment,{children:[Object(pe.jsx)(he,{}),Object(pe.jsx)(we,{}),Object(pe.jsx)(Ne,{}),Object(pe.jsx)(Ge,{}),Object(pe.jsx)(Me,{active:c})]}):null};s.a.render(Object(pe.jsx)(a.a.StrictMode,{children:Object(pe.jsx)(i.a,{store:re,children:Object(pe.jsx)(Pe,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.146e5125.chunk.js.map
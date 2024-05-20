(()=>{"use strict";var n={756:(n,e,A)=>{A.d(e,{Z:()=>c});var a=A(537),t=A.n(a),i=A(645),r=A.n(i),o=A(667),d=A.n(o),s=new URL(A(873),A.b),p=r()(t()),l=d()(s);p.push([n.id,`/* Reset CSS */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Agar langsung ke konten utama */\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: #bf1722;\n  color: white;\n  padding: 8px;\n  z-index: 100;\n}\n \n.skip-link:focus {\n   top: 0;\n}\n\n/* Body and HTML */\nbody,\nhtml, main {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  font-family: Arial, sans-serif;\n}\n\nbody {\n  background-color: #64ccc5;\n    min-height: 100vh;\n}\n\n/* Header */\nheader {\n  min-height: 550px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-image: url(${l});\n  background-position: center;\n  background-color: green;\n  position: relative;\n  background-size: cover; /* Menyesuaikan gambar latar belakang */\n  background-repeat: no-repeat;\n  background-attachment: inherit; /* Opsi tambahan untuk menjaga gambar tetap terlihat saat digulir */\n}\n\nheader .hero {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Navigation */\n.navigasi_atas {\n  position: fixed;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 10px;\n}\n\n.logo {\n  font-weight: 300;\n  padding: 5px 10px;\n  color: white;\n}\n\n#drawer.open {\n  transform: translate(0,0)\n}\n\nnav {\n  margin: 0;\n  padding: 10px;\n}\n\nnav ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\nnav ul li {\n  display: inline;\n  width: 100%;\n  font-size: large;\n}\n\nnav a {\n  color: white;\n  text-decoration: none;\n  font-weight: 300;\n  padding: 20px 40px;\n  transition: background-color 0.3s ease;\n  margin-right: 10px;\n  min-width: 44px;\n  min-height: 44px;\n  width: 200px;\n  font-size: large;\n}\n\n#hamburger {\n  display: none;\n  font-size: 32px;\n  text-decoration: none;\n  color: white;\n}\n\n#drawer a:hover {\n  color: white;\n  background-color:#176b87;\n}\n\n#drawer2.open {\n  transform: translate(0,0)\n}\n\n#drawer2 {\n  display: none;\n  margin: 0;\n}\n\n#drawer2 ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\n#drawer2 ul li {\n  display: inline;\n  width: 100%;\n  font-size: large;\n}\n\n#drawer2 a {\n  color: white;\n  text-decoration: none;\n  transition: background-color 0.3s ease;\n  min-width: 44px;\n  min-height: 44px;\n  font-size: large;\n}\n/* Hero Section */\n.hero {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  color: #fff;\n  width: 100%;\n  text-align: center;\n  padding: 20px;\n}\n\n.hero_title {\n  color: #fff;\n  font-weight: 300;\n  font-size: 24px;\n  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);\n  margin-bottom: 20px;\n}\n\n.hero_element {\n  display: flex;\n  flex-direction: column;\n  font-weight: lighter;\n  max-width: 400px;\n  width: 100%;\n}\n\n.searchResto {\n  width: 100%;\n  padding: 10px;\n  margin-top: 5px;\n  border-radius: 15px;\n  border: 0;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.searchButton {\n  padding: 10px;\n  border-radius: 15px;\n  border: 0;\n  margin-top: 5px;\n  cursor: pointer;\n  box-sizing: border-box;\n  background-color: #176b87;\n  color: white;\n}\n\n.searchButton:hover {\n  background-color: white;\n  color: #176b87;\n}\n\n/* Main Section */\n.result {\n  display: flex;\n  justify-content: center;\n  color: white;\n  margin: 20px;\n}\n\n#restaurant-list{\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n  width: 100%;\n}\n\n.restoList {\n    display: flex;\n    grid-column: 3;\n    flex-direction: column;\n    padding: 10px;\n    width: 100%;\n    max-width: 100%;\n    margin: 20px;\n    margin-top: 0;\n    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.1);\n}\n\n/* Gaya default untuk perangkat seluler */\n.fan-art-club {\n  max-width: 100%;\n  height: auto; /* Ini akan menjaga aspek rasio gambar */\n  box-sizing: border-box;\n  word-wrap: break-word;\n  overflow: auto;\n}\n\nfooter{\n  background-color: #176b87;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative ;\n  width: 100%; /* Menyebarkan footer di seluruh lebar layar */\n}\n\n.footer {\n  font-size: 12px;\n  color: white;\n}\n\n/* Mobile First Approach */\n@media screen and (max-width: 480px) {\n  header {\n    min-height: 350px;\n  }\n  \n  .hero_title {\n    font-size: 20px;\n  }\n  \n  .searchResto {\n    padding: 8px;\n    margin-top: 10px;\n      min-width: 44px;\n  min-height: 44px;\n  }\n  \n  .searchButton {\n    padding: 8px;\n    margin-top: 10px;\n      min-width: 44px;\n  min-height: 44px;\n  }\n\n  .navigasi_atas {\n    display: grid;\n    grid-template-columns: 200px 100px;\n    max-width: 100%;\n    width: 100%;\n  }\n\n  .restoList {\n    width: 100%;\n    max-width: 100%;\n    /* Atur margin atau padding lain sesuai kebutuhan Anda */\n  }\n  \n  /* Menambahkan properti overflow-x untuk menghilangkan pergerakan horizontal */\n  #restaurant-list {\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 100%;\n    padding: 20px;\n  }\n\n  #hamburger {\n    display: flex;\n    justify-content: flex-end;\n  }\n\n  #drawer {\n    display: none;\n  }\n\n  #drawer2{\n    width: 70%;\n    height: 100%;\n    display: flex;\n    position: fixed;\n    z-index: 2;\n    /* menyembunyikan #drawer -250px (sesuai dengan ukuran lebar drawer) ke kiri */\n    transform: translate(-800px, 0);\n    transition: transform 0.3s ease-in-out;\n    background-color:#111;\n  }\n  \n  #drawer2 a {\n    min-width: 44px;\n    min-height: 44px;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: large;\n    color: white;\n  }\n\n  #drawer2 ul {\n    display: grid;\n    grid-template-rows: 20px 20px 20px;\n    gap: 60px;\n    overflow: auto;\n    color:#176b87;\n    margin-top: 20px;\n  }\n\n  #drawer2 li {\n    display: flex;\n    min-width: 44px;\n    min-height: 44px;\n    border-radius: 20px;\n    background-color:#176b87;\n  }\n}\n\n/* konfigurasi untuk media baru */\n@media screen and (max-width: 768px) {\n  header {\n    min-height: 350px;\n  }\n  \n  .hero_title {\n    font-size: 20px;\n  }\n  \n  .searchResto {\n    padding: 8px;\n    margin-top: 10px;\n      min-width: 44px;\n  min-height: 44px;\n  }\n  \n  .searchButton {\n    padding: 8px;\n    margin-top: 10px;\n      min-width: 44px;\n  min-height: 44px;\n  }\n\n  .navigasi_atas {\n    display: grid;\n    grid-template-columns: 200px 100px;\n    max-width: 100%;\n    width: 100%;\n  }\n\n  .restoList {\n    width: 100%;\n    max-width: 100%;\n    /* Atur margin atau padding lain sesuai kebutuhan Anda */\n  }\n  #restaurant-list{\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 100%;\n    padding: 20px;\n  }\n\n  #hamburger {\n    display: flex;\n    justify-content: flex-end;\n    left: 400px;\n  }\n\n  #drawer {\n    display: none;\n  }\n  \n  #drawer2{\n    width: 70%;\n    height: 100%;\n    display: flex;\n    position: fixed;\n    z-index: 2;\n    /* menyembunyikan #drawer -250px (sesuai dengan ukuran lebar drawer) ke kiri */\n    transform: translate(-800px, 0);\n    transition: transform 0.3s ease-in-out;\n    background-color:#111;\n    }\n\n  #drawer2 a {\n    min-width: 44px;\n    min-height: 44px;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: large;\n    color: white;\n  }\n\n  #drawer2 ul {\n    display: grid;\n    grid-template-rows: 20px 20px 20px;\n    gap: 60px;\n    overflow: auto;\n    color:#176b87;\n    margin-top: 20px;\n  }\n\n  #drawer2 li {\n    display: flex;\n    min-width: 44px;\n    min-height: 44px;\n    border-radius: 20px;\n    background-color:#176b87;\n  }\n\n}\n\n/* Media Queries for Larger Screens (Tetapkan sesuai kebutuhan Anda) */\n@media screen and (min-width: 1024px) {\n  header {\n    min-height: 550px;\n  }\n  \n  .hero_title {\n    font-size: 32px;\n  }\n  \n  .searchResto {\n    padding: 12px;\n    margin-top: 15px;\n    \n  }\n  \n  .searchButton {\n    padding: 12px;\n    margin-top: 15px;\n  }\n\n    #drawer {\n    position: relative;\n    transform: translate(0, 0);\n  }\n \n  #hamburger {\n    display: none;\n  }\n}`,"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["/* Reset CSS */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Agar langsung ke konten utama */\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: #bf1722;\n  color: white;\n  padding: 8px;\n  z-index: 100;\n}\n \n.skip-link:focus {\n   top: 0;\n}\n\n/* Body and HTML */\nbody,\nhtml, main {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  font-family: Arial, sans-serif;\n}\n\nbody {\n  background-color: #64ccc5;\n    min-height: 100vh;\n}\n\n/* Header */\nheader {\n  min-height: 550px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-image: url('../public/images/hero-image_4.jpg');\n  background-position: center;\n  background-color: green;\n  position: relative;\n  background-size: cover; /* Menyesuaikan gambar latar belakang */\n  background-repeat: no-repeat;\n  background-attachment: inherit; /* Opsi tambahan untuk menjaga gambar tetap terlihat saat digulir */\n}\n\nheader .hero {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Navigation */\n.navigasi_atas {\n  position: fixed;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 10px;\n}\n\n.logo {\n  font-weight: 300;\n  padding: 5px 10px;\n  color: white;\n}\n\n#drawer.open {\n  transform: translate(0,0)\n}\n\nnav {\n  margin: 0;\n  padding: 10px;\n}\n\nnav ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\nnav ul li {\n  display: inline;\n  width: 100%;\n  font-size: large;\n}\n\nnav a {\n  color: white;\n  text-decoration: none;\n  font-weight: 300;\n  padding: 20px 40px;\n  transition: background-color 0.3s ease;\n  margin-right: 10px;\n  min-width: 44px;\n  min-height: 44px;\n  width: 200px;\n  font-size: large;\n}\n\n#hamburger {\n  display: none;\n  font-size: 32px;\n  text-decoration: none;\n  color: white;\n}\n\n#drawer a:hover {\n  color: white;\n  background-color:#176b87;\n}\n\n#drawer2.open {\n  transform: translate(0,0)\n}\n\n#drawer2 {\n  display: none;\n  margin: 0;\n}\n\n#drawer2 ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\n#drawer2 ul li {\n  display: inline;\n  width: 100%;\n  font-size: large;\n}\n\n#drawer2 a {\n  color: white;\n  text-decoration: none;\n  transition: background-color 0.3s ease;\n  min-width: 44px;\n  min-height: 44px;\n  font-size: large;\n}\n/* Hero Section */\n.hero {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  color: #fff;\n  width: 100%;\n  text-align: center;\n  padding: 20px;\n}\n\n.hero_title {\n  color: #fff;\n  font-weight: 300;\n  font-size: 24px;\n  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);\n  margin-bottom: 20px;\n}\n\n.hero_element {\n  display: flex;\n  flex-direction: column;\n  font-weight: lighter;\n  max-width: 400px;\n  width: 100%;\n}\n\n.searchResto {\n  width: 100%;\n  padding: 10px;\n  margin-top: 5px;\n  border-radius: 15px;\n  border: 0;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.searchButton {\n  padding: 10px;\n  border-radius: 15px;\n  border: 0;\n  margin-top: 5px;\n  cursor: pointer;\n  box-sizing: border-box;\n  background-color: #176b87;\n  color: white;\n}\n\n.searchButton:hover {\n  background-color: white;\n  color: #176b87;\n}\n\n/* Main Section */\n.result {\n  display: flex;\n  justify-content: center;\n  color: white;\n  margin: 20px;\n}\n\n#restaurant-list{\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n  width: 100%;\n}\n\n.restoList {\n    display: flex;\n    grid-column: 3;\n    flex-direction: column;\n    padding: 10px;\n    width: 100%;\n    max-width: 100%;\n    margin: 20px;\n    margin-top: 0;\n    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.1);\n}\n\n/* Gaya default untuk perangkat seluler */\n.fan-art-club {\n  max-width: 100%;\n  height: auto; /* Ini akan menjaga aspek rasio gambar */\n  box-sizing: border-box;\n  word-wrap: break-word;\n  overflow: auto;\n}\n\nfooter{\n  background-color: #176b87;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative ;\n  width: 100%; /* Menyebarkan footer di seluruh lebar layar */\n}\n\n.footer {\n  font-size: 12px;\n  color: white;\n}\n\n/* Mobile First Approach */\n@media screen and (max-width: 480px) {\n  header {\n    min-height: 350px;\n  }\n  \n  .hero_title {\n    font-size: 20px;\n  }\n  \n  .searchResto {\n    padding: 8px;\n    margin-top: 10px;\n      min-width: 44px;\n  min-height: 44px;\n  }\n  \n  .searchButton {\n    padding: 8px;\n    margin-top: 10px;\n      min-width: 44px;\n  min-height: 44px;\n  }\n\n  .navigasi_atas {\n    display: grid;\n    grid-template-columns: 200px 100px;\n    max-width: 100%;\n    width: 100%;\n  }\n\n  .restoList {\n    width: 100%;\n    max-width: 100%;\n    /* Atur margin atau padding lain sesuai kebutuhan Anda */\n  }\n  \n  /* Menambahkan properti overflow-x untuk menghilangkan pergerakan horizontal */\n  #restaurant-list {\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 100%;\n    padding: 20px;\n  }\n\n  #hamburger {\n    display: flex;\n    justify-content: flex-end;\n  }\n\n  #drawer {\n    display: none;\n  }\n\n  #drawer2{\n    width: 70%;\n    height: 100%;\n    display: flex;\n    position: fixed;\n    z-index: 2;\n    /* menyembunyikan #drawer -250px (sesuai dengan ukuran lebar drawer) ke kiri */\n    transform: translate(-800px, 0);\n    transition: transform 0.3s ease-in-out;\n    background-color:#111;\n  }\n  \n  #drawer2 a {\n    min-width: 44px;\n    min-height: 44px;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: large;\n    color: white;\n  }\n\n  #drawer2 ul {\n    display: grid;\n    grid-template-rows: 20px 20px 20px;\n    gap: 60px;\n    overflow: auto;\n    color:#176b87;\n    margin-top: 20px;\n  }\n\n  #drawer2 li {\n    display: flex;\n    min-width: 44px;\n    min-height: 44px;\n    border-radius: 20px;\n    background-color:#176b87;\n  }\n}\n\n/* konfigurasi untuk media baru */\n@media screen and (max-width: 768px) {\n  header {\n    min-height: 350px;\n  }\n  \n  .hero_title {\n    font-size: 20px;\n  }\n  \n  .searchResto {\n    padding: 8px;\n    margin-top: 10px;\n      min-width: 44px;\n  min-height: 44px;\n  }\n  \n  .searchButton {\n    padding: 8px;\n    margin-top: 10px;\n      min-width: 44px;\n  min-height: 44px;\n  }\n\n  .navigasi_atas {\n    display: grid;\n    grid-template-columns: 200px 100px;\n    max-width: 100%;\n    width: 100%;\n  }\n\n  .restoList {\n    width: 100%;\n    max-width: 100%;\n    /* Atur margin atau padding lain sesuai kebutuhan Anda */\n  }\n  #restaurant-list{\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 100%;\n    padding: 20px;\n  }\n\n  #hamburger {\n    display: flex;\n    justify-content: flex-end;\n    left: 400px;\n  }\n\n  #drawer {\n    display: none;\n  }\n  \n  #drawer2{\n    width: 70%;\n    height: 100%;\n    display: flex;\n    position: fixed;\n    z-index: 2;\n    /* menyembunyikan #drawer -250px (sesuai dengan ukuran lebar drawer) ke kiri */\n    transform: translate(-800px, 0);\n    transition: transform 0.3s ease-in-out;\n    background-color:#111;\n    }\n\n  #drawer2 a {\n    min-width: 44px;\n    min-height: 44px;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: large;\n    color: white;\n  }\n\n  #drawer2 ul {\n    display: grid;\n    grid-template-rows: 20px 20px 20px;\n    gap: 60px;\n    overflow: auto;\n    color:#176b87;\n    margin-top: 20px;\n  }\n\n  #drawer2 li {\n    display: flex;\n    min-width: 44px;\n    min-height: 44px;\n    border-radius: 20px;\n    background-color:#176b87;\n  }\n\n}\n\n/* Media Queries for Larger Screens (Tetapkan sesuai kebutuhan Anda) */\n@media screen and (min-width: 1024px) {\n  header {\n    min-height: 550px;\n  }\n  \n  .hero_title {\n    font-size: 32px;\n  }\n  \n  .searchResto {\n    padding: 12px;\n    margin-top: 15px;\n    \n  }\n  \n  .searchButton {\n    padding: 12px;\n    margin-top: 15px;\n  }\n\n    #drawer {\n    position: relative;\n    transform: translate(0, 0);\n  }\n \n  #hamburger {\n    display: none;\n  }\n}"],sourceRoot:""}]);const c=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var A="",a=void 0!==e[5];return e[4]&&(A+="@supports (".concat(e[4],") {")),e[2]&&(A+="@media ".concat(e[2]," {")),a&&(A+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),A+=n(e),a&&(A+="}"),e[2]&&(A+="}"),e[4]&&(A+="}"),A})).join("")},e.i=function(n,A,a,t,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(a)for(var o=0;o<this.length;o++){var d=this[o][0];null!=d&&(r[d]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);a&&r[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),A&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=A):p[2]=A),t&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=t):p[4]="".concat(t)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],A=n[3];if(!A)return e;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),i="/*# ".concat(t," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function A(n){for(var A=-1,a=0;a<e.length;a++)if(e[a].identifier===n){A=a;break}return A}function a(n,a){for(var i={},r=[],o=0;o<n.length;o++){var d=n[o],s=a.base?d[0]+a.base:d[0],p=i[s]||0,l="".concat(s," ").concat(p);i[s]=p+1;var c=A(l),C={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==c)e[c].references++,e[c].updater(C);else{var g=t(C,a);a.byIndex=o,e.splice(o,0,{identifier:l,updater:g,references:1})}r.push(l)}return r}function t(n,e){var A=e.domAPI(e);return A.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;A.update(n=e)}else A.remove()}}n.exports=function(n,t){var i=a(n=n||[],t=t||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var o=A(i[r]);e[o].references--}for(var d=a(n,t),s=0;s<i.length;s++){var p=A(i[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=d}}},569:n=>{var e={};n.exports=function(n,A){var a=function(n){if(void 0===e[n]){var A=document.querySelector(n);if(window.HTMLIFrameElement&&A instanceof window.HTMLIFrameElement)try{A=A.contentDocument.head}catch(n){A=null}e[n]=A}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(A)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,A)=>{n.exports=function(n){var e=A.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(A){!function(n,e,A){var a="";A.supports&&(a+="@supports (".concat(A.supports,") {")),A.media&&(a+="@media ".concat(A.media," {"));var t=void 0!==A.layer;t&&(a+="@layer".concat(A.layer.length>0?" ".concat(A.layer):""," {")),a+=A.css,t&&(a+="}"),A.media&&(a+="}"),A.supports&&(a+="}");var i=A.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,A)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},873:(n,e,A)=>{n.exports=A.p+"5d982326781d6f8ea98b.jpg"}},e={};function A(a){var t=e[a];if(void 0!==t)return t.exports;var i=e[a]={id:a,exports:{}};return n[a](i,i.exports,A),i.exports}A.m=n,A.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return A.d(e,{a:e}),e},A.d=(n,e)=>{for(var a in e)A.o(e,a)&&!A.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},A.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),A.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;A.g.importScripts&&(n=A.g.location+"");var e=A.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");if(a.length)for(var t=a.length-1;t>-1&&!n;)n=a[t--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),A.p=n})(),A.b=document.baseURI||self.location.href,A.nc=void 0,(()=>{var n=A(379),e=A.n(n),a=A(795),t=A.n(a),i=A(569),r=A.n(i),o=A(565),d=A.n(o),s=A(216),p=A.n(s),l=A(589),c=A.n(l),C=A(756),g={};g.styleTagTransform=c(),g.setAttributes=d(),g.insert=r().bind(null,"head"),g.domAPI=t(),g.insertStyleElement=p(),e()(C.Z,g),C.Z&&C.Z.locals&&C.Z.locals;document.addEventListener("DOMContentLoaded",(function(){var n,e,A,a,t;e=document.querySelector("#hamburger"),A=document.querySelector("#drawer2"),a=document.querySelector("main"),t=document.querySelector("body"),e.addEventListener("click",(function(n){A.classList.toggle("open"),n.stopPropagation()})),a.addEventListener("click",(function(n){A.classList.remove("open"),n.stopPropagation()})),A.addEventListener("click",(function(n){A.classList.remove("open"),n.stopPropagation()})),t.addEventListener("click",(function(n){A.classList.remove("open"),n.stopPropagation()})),n=document.getElementById("restaurant-list"),document.querySelector("body"),fetch("data/DATA.json").then((function(n){return n.json()})).then((function(e){var A=e.restaurants;A.forEach((function(e){var A=document.createElement("div");A.classList.add("restoList"),A.innerHTML='\n            <img class="fan-art-club" src="'.concat(e.pictureId,'" alt="Ini adalah foto dari restoran ').concat(e.name,'">\n            <h2>').concat(e.name,"</h2>\n            <h4>From: ").concat(e.city,"</h4>\n            <p>").concat(e.description,"</p>\n        "),n.appendChild(A)}));var a=A.length;n.style.gridTemplateColumns="repeat(".concat(a,", 1fr)")})).catch((function(n){console.log(n)}))}))})()})();
//# sourceMappingURL=app.bundle.js.map
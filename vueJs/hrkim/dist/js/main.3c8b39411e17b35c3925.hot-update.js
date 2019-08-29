webpackHotUpdate("main",{

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Gallery.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Gallery.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const opacity = 0.6
const images = []
/* harmony default export */ __webpack_exports__["default"] = ({
    data() { // 해당 Vue에서 사용할 데이터 정보
        return {
            //opacity: 0.6,
            title: 'Movie',
            images: []
        }
    },
    created() {
        this.$http.get('http://localhost:3000/movies').then(response => {
                this.images = response.data
            })
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            imgs.style.display = "grid";
            //imgs[0].style.opacity = 0.6;
        },
        imgClick(event) {
            current.src = event.target.src;
            current.classList.add('fade-in');
            setTimeout(() => current.classList.remove('fade-in'), 500);
            event.target.style.opacity = opacity;
        },
        buttonClick(event) {
            const buttonId = event.target.id;
            if ( buttonId === 'listButton' ) {
                imgs.style.display = "table";
            } else {
                imgs.style.display = "grid";
            }
        }
    }
});


/***/ })

})
//# sourceMappingURL=main.3c8b39411e17b35c3925.hot-update.js.map
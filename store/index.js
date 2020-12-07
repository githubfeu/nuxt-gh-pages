export const state = () => ({
  products: [
    {
      id: 1,
      title: "WereWolf",
      description:
        "เมื่อหมู่บ้านเล็กๆอันแสนสุขของคุณได้มีเหล่ามนุษย์หมาป่าใจอำมหิต แฝงกายเข้ามา...คุณและบรรดาชาวบ้านจะสามารถกำจัดพวกมันได้ทันก่อนที่จะตกเป็นเหยื่อของพวกมันจนหมดได้หรือไม่??",
      price: 899,
      images: require("../static/werewolf.png"),
      ratings: 3,
      reviews: 5,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      isRecommend: true,
      isPromotion: false,
      quantity: 1
    },
    {
      id: 2,
      title: "Avalon",
      description:
        "ในเกม Avalon ผู้เล่นจะถูกพาย้อนเวลาไปในยุคของอัศวินและเวทมนต์ โดยผู้เล่นจะถูกแบ่งเป็นสองฝ่าย คือ ฝ่ายคนดี (เหล่าอัศวินของกษัตริย์อาเธอร์) กับฝ่ายคนเลว (ลูกสมุนของจ้าวแห่งศาสตร์มืดมอร์เดรด)",
      images: require("../static/avalon.jpg"),
      price: 850,
      ratings: 5,
      reviews: 10,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      isRecommend: false,
      isPromotion: true,
      quantity: 1
    },
    {
      id: 3,
      title: "Coup",
      description:
        "Coup เกมนี้มีเป้าหมายคือฆ่าคนอื่นให้ตาย และอยู่รอดเป็นคนสุดท้าย และเพื่อความอยู่รอดคุณไม่ต้องพูดความจริงก็ได้ เกมนี้ถ้าเราชนะเพื่อนจะเกลียดเรามาก นับเป็นเกมตอแหลแห่งชาติได้เลย",
      images: require("../static/coup.jpeg"),
      price: 500,
      ratings: 2,
      reviews: 3,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      isRecommend: false,
      isPromotion: false,
      quantity: 1
    }
    // {
    //   id: 4,
    //   title: "Exploding Kittens",
    //   description:
    //     "วิธีเล่นเหมือนการเดิมพันรัสเชียนรูเล็ตต์ที่ต้องอาศัยกลยุทธ์และพลังแมวเหมียว ผู้เล่นจะผลัดกันจั่วการ์ดจนกว่าจะมีคนจั่วเจอแมวระเบิด และระเบิดตัวตายออกจากเกม นอกจากว่าจะมีการ์ดปลดระเบิดที่ช่วยให้รอดตายจากแมวด้วยการใช้ปากกาเลเซอร์ล่อแมว เกาพุง หรือแซนวิชกัญชาแมว ส่วนการ์ดอื่นๆ ในกองมีไว้เพื่อช่วยให้ผู้เล่นสามารถหลีกเลี่ยงหรือย้ายที่แมวระเบิดได้",
    //   images: require("../static/cat.jpeg"),
    //   price: 700,
    //   ratings: 1,
    //   reviews: 0,
    //   isAddedToCart: false,
    //   isAddedBtn: false,
    //   isFavourite: false,
    //   quantity: 1
    // },
    // {
    //   id: 5,
    //   title: "Dark Souls",
    //   description:
    //     "Dark Souls: The Board Game คือเกมแนวการสำรวจดันเจี้ยนลึกลับที่เต็มไปด้วยสัตว์ประหลาดและอันตรายมากมายเล่นได้ตั้งแต่ 1-4 คน",
    //   images: require("../static/darksoul.jpg"),
    //   price: 4000,
    //   ratings: 4,
    //   reviews: 2,
    //   isAddedToCart: false,
    //   isAddedBtn: false,
    //   isFavourite: false,
    //   quantity: 1
    // },
    // {
    //   id: 6,
    //   title: "Uno",
    //   description:
    //     "บอร์ดเกมธรรมดาสามัญประจำบ้าน เรียกว่าเป็นเกมสไตล์ไพ่แบบพื้นฐานที่ไม่ว่าใครก็ต้องรู้จักดี เพราะทั้งพกพาง่าย เล่นก็ง่ายอาศัยการลงไพ่สีเดียวกันเลขเดียวกันถ้าไม่มีก็ต้องจั่วเพิ่มจนกว่าจะมีไพ่ที่สามารถลงต่อได้ แถมยังมีไพ่พิเศษ บังคับให้ต้องลงสองใบ สี่ใบสะสมต่อไปเรื่อยๆ",
    //   images: require("../static/uno.jpg"),
    //   price: 250,
    //   ratings: 5,
    //   reviews: 1,
    //   isAddedToCart: false,
    //   isAddedBtn: false,
    //   isFavourite: false,
    //   quantity: 1
    // }
  ],
  userInfo: {
    isLoggedIn: false,
    isSignedUp: false,
    hasSearched: false,
    name: "",
    productTitleSearched: ""
  },
  systemInfo: {
    openLoginModal: false,
    openSignupModal: false,
    openCheckoutModal: false
  }
});

export const getters = {
  productsAdded: state => {
    return state.products.filter(el => {
      return el.isAddedToCart;
    });
  },
  productsAddedToFavourite: state => {
    return state.products.filter(el => {
      return el.isFavourite;
    });
  },
  getProductById: state => id => {
    return state.products.find(product => product.id == id);
  },
  isUserLoggedIn: state => {
    return state.userInfo.isLoggedIn;
  },
  isUserSignedUp: state => {
    return state.userInfo.isSignedUp;
  },
  getUserName: state => {
    return state.userInfo.name;
  },
  isLoginModalOpen: state => {
    return state.systemInfo.openLoginModal;
  },
  isSignupModalOpen: state => {
    return state.systemInfo.openSignupModal;
  },
  isCheckoutModalOpen: state => {
    return state.systemInfo.openCheckoutModal;
  },
  quantity: state => {
    return state.products.quantity;
  }
};

export const mutations = {
  addToCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = true;
      }
    });
  },
  setAddedBtn: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.isAddedBtn = data.status;
      }
    });
  },
  removeFromCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = false;
      }
    });
  },
  removeProductsFromFavourite: state => {
    state.products.filter(el => {
      el.isFavourite = false;
    });
  },
  isUserLoggedIn: (state, isUserLoggedIn) => {
    state.userInfo.isLoggedIn = isUserLoggedIn;
  },
  isUserSignedUp: (state, isSignedUp) => {
    state.userInfo.isSignedUp = isSignedUp;
  },
  setHasUserSearched: (state, hasSearched) => {
    state.userInfo.hasSearched = hasSearched;
  },
  setUserName: (state, name) => {
    state.userInfo.name = name;
  },
  setProductTitleSearched: (state, titleSearched) => {
    state.userInfo.productTitleSearched = titleSearched;
  },
  showLoginModal: (state, show) => {
    state.systemInfo.openLoginModal = show;
  },
  showSignupModal: (state, show) => {
    state.systemInfo.openSignupModal = show;
  },
  showCheckoutModal: (state, show) => {
    state.systemInfo.openCheckoutModal = show;
  },
  addToFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = true;
      }
    });
  },
  removeFromFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = false;
      }
    });
  },
  quantity: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.quantity = data.quantity;
      }
    });
  },
  SET_USER(state, authUser) {
    state.authUser = authUser;
  }
};
/* 
export const actions = {
  async nuxtServerInit({ commit }) {
    const res = await this.$axios.get("/api/current_user")
    commit("SET_USER", res.data)
  },

  async logout({ commit }) {
    const { data } = await this.$axios.get("/api/logout")
    if (data.ok) commit("SET_USER", null)
  },

  async handleToken({ commit }, token) {
    const res = await this.$axios.post("/api/stripe", token)
    commit("SET_USER", res.data)
  }
} */

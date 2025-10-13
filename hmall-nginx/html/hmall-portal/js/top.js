const topApp = {
  template:`
  <div class="top">
    <div class="py-container">
      <div class="shortcut">
        <ul class="fl">
          <li class="f-item">Welcome to Hmall!</li>
          <li class="f-item" v-if="!user">
            <a href="/login.html">Login</a>　
            <span><a href="#">Register Free</a></span>
          </li>
          <li class="f-item" v-else>
            Welcome <span style="color: #e54346">{{user.username}}</span>
            <span @click="util.logout()"><a href="#">Logout</a></span>
          </li>
        </ul>
        <ul class="fr">
          <li class="f-item"><a href="/">Home</a></li>
          <li class="f-item space"></li>
          <li class="f-item"><a href="/cart.html">My Cart</a></li>
          <li class="f-item space"></li>
          <li class="f-item">My Hmall</li>
          <li class="f-item space"></li>
          <li class="f-item">Hmall Member</li>
          <li class="f-item space"></li>
          <li class="f-item">Business Procurement</li>
          <li class="f-item space"></li>
          <li class="f-item">Follow Hmall</li>
          <li class="f-item space"></li>
          <li class="f-item">Customer Service</li>
          <li class="f-item space"></li>
          <li class="f-item">Site Navigation</li>
        </ul>
      </div>
    </div>
  </div>
  `,
  data(){
    return {
      user: null,
      util
    }
  },
  mounted(){
    this.user = this.util.store.get("user-info")
  },
  methods:{

  },
}

Vue.component("top", topApp);

var waitingProfile = new Vue({
  el: '#user',
  data: {
    user: []
  },
  methods: {
    fetchUser() {
      fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then (json => {waitingProfile.user = json.results[0]});
    }
  },



  created() {
    this.fetchUser()
  }

});

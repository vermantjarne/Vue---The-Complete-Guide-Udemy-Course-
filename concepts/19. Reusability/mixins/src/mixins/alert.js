// import UserAlert from '../components/UserAlert.vue';

export default {
	// Important: components can not be shared through a mixin
  // components: {
  //   UserAlert,
  // },
  data() {
    return {
      alertIsVisible: false,
    };
  },
  methods: {
    showAlert() {
      this.alertIsVisible = true;
    },
    hideAlert() {
      this.alertIsVisible = false;
    },
  },
};
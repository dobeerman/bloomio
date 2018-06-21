import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import FundrisingCampaign from '@/components/FundrisingCampaign';

Vue.use(Router);

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloWorld,
    },
    {
      path: '/fc',
      name: 'fc',
      component: FundrisingCampaign,
    },
  ],
});

<template>
  <div class="team">
    <h2 class="team__title team__title-h2">{{ header }}</h2>

    <b-tabs class="site__tabs">
      <b-tab title="summary">
        <br>summary tab content
      </b-tab>
      <b-tab title="details" >
        <br>details tab content
      </b-tab>
      <b-tab title="team" active>
        <h3 class="team__title team__title-h3">team members</h3>
        <component :is="currentTeamComponent"></component>
      </b-tab>
      <b-tab title="reporting">
        <br>reporting tab content
      </b-tab>
      <b-tab title="news">
        <br>news tab content
      </b-tab>
      <b-tab title="q&a">
        <br>q&a tab content
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import CompanyTeamMembers from './CompanyTeamMembers';
import CompanyTeamMember from './CompanyTeamMember';

export default {
  name: 'CompanyTeam',

  components: { CompanyTeamMembers, CompanyTeamMember },

  data() {
    return {
      header: 'Fundrising campaign',

      currentTeamComponent: 'CompanyTeamMembers',
      teamComponents: ['CompanyTeamMembers', 'CompanyTeamMember'],
    };
  },
};
</script>

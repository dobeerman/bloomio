<template>
  <b-table
    :items="getMembers"
    :fields="fields" class="team__list"
    thead-class="hidden__header"
  >

    <template slot="order" slot-scope="data">
      <span class="order__actions">
        <span
          @click.prevent="reorderMembers({idx: data.index, op: -1})"
          :class="`order__icon order__up${data.index ? '' : ' disabled'}`"
        ></span>
        <span
          @click.prevent="reorderMembers({idx: data.index, op: 1})"
          :class="`order__icon order__down${
            data.index === getMembers.length - 1 ? ' disabled' : ''
          }`"
        ></span>
      </span>
    </template>

    <template slot="avatar" slot-scope="data">
      <img
        :src="data.item.avatar"
        :alt="`${data.item.firstName} ${data.item.lastName}`"
        class="team__list-avatar"
        />
    </template>

    <template slot="name" slot-scope="data">
      {{ data.item.firstName }} {{ data.item.lastName }}
    </template>

    <template slot="position" slot-scope="data">
      {{ data.item.position }}
    </template>

    <template slot="profileComplete" slot-scope="data">
      <incomplete-profile :complete="data.item.complete"></incomplete-profile>
      <!-- {{ completeProfile(data.item.complete) }} -->
    </template>

    <template slot="actions" slot-scope="data">
      <b-button
        class="action__button"
        :disabled="data.item.admin"
      >Remove</b-button>
      <b-button class="action__button">Edit</b-button>
    </template>

  </b-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import IncompleteProfile from './IncompleteProfile';

export default {
  name: 'CompanyTeamMembers',

  components: { IncompleteProfile },

  data() {
    return {
      fields: [
        'order',
        'avatar',
        'name',
        'position',
        {
          key: 'profileComplete',
          class: 'profile__complete',
        },
        {
          key: 'actions',
          class: 'text-right',
        },
      ],
    };
  },

  methods: {
    ...mapActions(['reorderMembers']),
    completeProfile(value) {
      return value < 1 ? 'Incomplete profile' : '';
    },
  },

  computed: {
    ...mapGetters(['getMembers']),
  },
};
</script>

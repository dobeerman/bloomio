<template>
  <div>

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
        <incomplete-profile
          :complete="data.item.complete"
          no-progress-bar
        />
      </template>

      <template slot="actions" slot-scope="data">
        <b-button
          :id="data.item.id"
          class="action__button"
          :disabled="data.item.admin"
          @click.prevent="removeItemModal"
        >Remove</b-button>
        <b-button class="action__button">Edit</b-button>
      </template>

    </b-table>

    <b-modal
      v-model="modalShow"
      ok-title="Remove"
      ok-variant="danger"
      @ok="removeItemPermanently"
    >
      Are you sure to remove "{{ fullName }}"?
    </b-modal>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import IncompleteProfile from './IncompleteProfile';

export default {
  name: 'CompanyTeamMembers',

  components: { IncompleteProfile },

  data() {
    return {
      member: {},

      modalShow: false,

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
    ...mapActions(['reorderMembers', 'removeMember']),

    completeProfile(value) {
      return value < 1 ? 'Incomplete profile' : '';
    },

    removeItemModal(e) {
      this.member = this.getMember(e.target.id);
      this.modalShow = true;
    },

    removeItemPermanently() {
      this.removeMember({ id: this.member.id });
    },
  },

  computed: {
    ...mapGetters(['getMembers', 'getMember']),

    fullName() {
      return `${this.member.firstName} ${this.member.lastName}`;
    },
  },
};
</script>

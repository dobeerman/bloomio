<template>
  <b-navbar toggleable="lg" variant="white">
    <b-container>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand to="/">
        <img
          src="../../assets/logo.svg"
          alt=""
          height="39"
          width="139"
        />
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item>Investors</b-nav-item>
          <b-nav-item>Startups</b-nav-item>
          <b-nav-item>Partners</b-nav-item>

          <b-nav-item-dropdown
            text="Company"
            right
          >
            <b-dropdown-item to="/fc">Company team</b-dropdown-item>
            <b-dropdown-item to="#">item 2</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown
            align-v="center"
            :text="completeness.text"
            right
            class="profile-completeness"
          >
            <b-dropdown-item to="#">EN</b-dropdown-item>
            <b-dropdown-item to="#">ES</b-dropdown-item>
            <b-dropdown-item to="#">RU</b-dropdown-item>
            <b-dropdown-item to="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right no-caret>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <!-- <em>User</em> -->
              <b-img
                rounded="circle"
                blank
                width="24"
                height="24"
                blank-color="#777"
                alt="img"
                class="m-1"
              />
            </template>
            <b-dropdown-item to="#">Profile</b-dropdown-item>
            <b-dropdown-item to="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {

  computed: {
    completeness() {
      const complete = 0.5 * 100; // Placeholder

      return {
        complete,
        text: `Profile completeness: ${complete}%`,
      };
    },
  },
};
</script>

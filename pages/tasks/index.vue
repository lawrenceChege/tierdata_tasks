<template>
  <div class="container fluid">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Tasks</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search tasks</b-button
              >
            </b-nav-form>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>John Doe</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <Kanban />
    <div class="row">
      <BacklogTasks class="col-md-4" />
      <InprogressTasks class="col-md-4" />
      <DoneTasks class="col-md-4" />
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  background-color: rgb(248, 248, 193);
}
.row {
  background-color: rgb(245, 245, 202);
}
</style>

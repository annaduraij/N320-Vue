<!-- Auth: Jay Annadurai            -->
<!-- Proj: N320: Vue - Final        -->
<!-- Date: 8 December 2023          -->
<!-- Desc: Session Category Info    -->

<template>
      <div
          class="category"
          @click="filterByCategory(category)"
      >
        <h5> {{ category }} </h5>
      </div>
</template>

<script>


export default {



  data() {
    return {
      //accordionActive: false,
    }
  },

  //Properties used for the Category
  props: ['category'],

  //Emitters to SessionInfo -> View -> App.vue
  emits: ['filterByCategory'],

  methods: {
    //Fire an Event to Parent with the Category Information
    filterByCategory(category) {
      this.$emit('filterByCategory', category);
    },
  }, //End of Methods

}
</script>

<style scoped>

/* SessionInfo Style */

.SessionContainer {
  border: solid 2px var(--background-color-dark);
  border-radius: 2vh;
  margin: 10px 0px;
  padding: 1vh 1.5vw;
  box-sizing: border-box;
  width: 100%;

  background: var(--background-color-translucent);
}

.SessionContainer div {
  display: flex;
  width: fit-content;
  flex-flow: column nowrap;
  justify-content: center;
  border-radius: var(--border-radius-normal);
}

.SessionTitle {
  font-size: 1.2em;
}

.SessionDescription {
  text-align: justify;
  padding: 5px 2vw;
  margin: 0px 2vw;
}

.SessionPresenter,

.SessionCategories,

.SessionCategories .value {
  display: flex;
  flex-flow: row wrap !important;
}



.label {
  margin-right: 5px;
  color: var(--text-color-dim);
}

</style>
<!-- Auth: Jay Annadurai            -->
<!-- Proj: N320: Vue - Final        -->
<!-- Date: 8 December 2023          -->
<!-- Desc: Generic Button with Slot -->

<template>

  <button class="Button">
    <slot> </slot>
  </button>

</template>

<style scoped>
 .Button {
   border: 1px solid black;
   border-radius: var(--border-radius-extreme);
   padding: 5px 15px;
   margin: 5px 0px;

   font-style: normal;
   font-family: 'Raleway', inherit;

   color: var(--text-color);
   background-color: var(--background-color-dark);
   transition: var(--transitions);
 }

.Button:hover {
  color: var(--text-color-emphasis);
  border: 1px solid white;
  cursor: pointer;
  box-shadow: var(--glow)
}

.Button.Positive {
  color: var(--primary-color);
}

.Button.Negative {
  color: var(--complimentary-color);
}

.Button.Positive:hover {
  color: var(--primary-color-bright);
}

.Button.Negative:hover {
  color: var(--complimentary-color-bright);
}

</style>


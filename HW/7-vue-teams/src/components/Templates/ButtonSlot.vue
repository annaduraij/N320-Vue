<!-- Auth: Jay Annadurai            -->
<!-- Proj: N320: Vue - Teams        -->
<!-- Date: 28 November 2023         -->
<!-- Desc: Generic Button with Slot -->

<template>

<button>
    <slot> </slot>
</button>

</template>

<style scoped>

    button {
        border: 1px solid black;
        border-radius: 20px;
        padding: 6px 10px;
        
        font-style: normal;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        
        color: white;
        background-color: #000000;
        transition: font-size 200ms, border-width 50ms, box-shadow 50ms, padding 50ms;
    }

    button:hover {
        border: 1px solid white;
        cursor: pointer;
        /*font-size: 0.85em;
        padding: 5px; */
        box-shadow:
            0 0 3px white,
            0 0 5px white;;
    }
</style>
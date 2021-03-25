<template>
  <div>
    <input @keyup="search" id="my-input" v-model="input" type="text" />

    <ul id="my-list">
      <li v-for="{ serial } in getSerialList" :key="serial.id">
        serial number: {{ serial }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: document.getElementById("my-input"),
      list: document.getElementById("my-list"),
      input: "",
    };
  },
  computed: {
    getSerialList() {
      return this.$store.getters.getSerialList.filter((e) => e);
    },
  },
  methods: {
    checkLength(serial) {
      return serial.length < 13 || serial.length > 26 ? false : true;
    },
    search(e) {
      this.input = e.target.value;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        if (this.checkLength(e.target.value)) {
          this.$store.dispatch("ADD_SERIAL", e.target.value);
          this.input = "";
          console.log(this.$store.state.serialList);
        }

        return e.target.value;
      }, 500);
    },
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input {
  height: 30px;
}
serial-num {
  min-width: 150px;
}
li {
  padding: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: flex-start;
}
li span {
  min-width: 220px;
}

li span:nth-last-child(-n + 2) {
  border-right: 1px solid black;
  border-left: 1px solid black;
  padding: 0 10px;
}
</style>

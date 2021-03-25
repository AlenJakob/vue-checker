<template>
  <div>
    <input
      class="serial-in"
      @keyup="search"
      id="my-input"
      v-model="input"
      type="text"
    />
    <ul class="my-list" id="my-list">
      <li v-for="{ serial } in getSerialList" :key="serial.id">
        serial number: {{ serial }}
      </li>
    </ul>
  </div>
</template>

<script>
import { validation } from "../mixins/dateValidation.js";
export default {
  mixins: [validation],
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
    // method to got part of data that equals to Date of production
    getPartOfSerial(serial) {
      return serial.slice(-13).substr(5, 4);
    },
    search(e) {
      this.input = e.target.value.replace(/\s/g, "").slice(-13);
      console.log(this.input);
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        if (this.checkLength(e.target.value)) {
          this.$store.dispatch("ADD_SERIAL", e.target.value);

          console.log(this.getPartOfSerial(this.input));
          this.input = "";
          console.log(this.$store.state.serialList);
        }

        return e.target.value;
      }, 500);
    },
  },
  mounted() {
    this.dateValidation(this.input);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  >
.my-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.serial-in {
  margin-left: 30px;
  height: 30px;
}
serial-num {
  min-width: 150px;
}
li {
  max-width: 350px;
  margin: 5px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.274);
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
}
li span:nth-last-child(-n + 2) {
  border-right: 1px solid black;
  border-left: 1px solid black;
  padding: 0 10px;
}
</style>

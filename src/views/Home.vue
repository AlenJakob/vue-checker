<template>
  <div class="home">
    <img class="logo" alt="Vue logo" width="250" src="../assets/logo1.png" />
    <InputSnNumber />
  </div>
</template>

<script>
// @ is an alias to /src
import InputSnNumber from "@/components/InputSnNumber";

export default {
  components: {
    InputSnNumber,
  },
};
</script>

<style >
.logo {
  padding-left: 50px;
}
</style>
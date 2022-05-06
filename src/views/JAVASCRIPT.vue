<template>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data: () => ({

  }),
  computed: {
    ...mapGetters({
      JavaScriptBasicTabs: "JavaScriptBasicTabsName",
      BasicContent: "JavaScriptBasicContent",
    })
  }
}
</script>

<style scoped lang="scss">
#hello:hover{
  background-color: black;
  color: white;
}
#hello{
  font-weight: bold;
  font-size: 20px;
}
#hello >>> .v-tab--active{
  background-color: red;
}
.Content_js{
  background-color: black;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  padding: 25px;
  p{
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
}
::v-deep {
  .v-tabs-bar__content {
    align-items: flex-start;
  }
}
</style>

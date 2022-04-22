<template>
  <v-app>
    <v-content>
      <v-card>
        <v-toolbar
            flat
            color="black"
            dark
        >
          <v-toolbar-title class="flex">
            <h1>
              Introduction
            </h1>
          </v-toolbar-title>
        </v-toolbar>
        <v-tabs vertical>
          <div v-for="(item, index) in JavaScriptBasicTabs" :key="index">
            <v-tab id="hello">
              {{item.Title}}
            </v-tab>
          </div>
          <v-tab-item v-for="(item, index) in BasicContent" :key="index">
            <v-card flat>
              <v-card-text>
                <h1 style="color: black; font-size: 35px;">{{item.Title}}</h1>
                <div class="Content_js">
                  <p v-html="item.Description"></p>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-content>
  </v-app>
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

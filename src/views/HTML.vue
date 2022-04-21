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
              BASIC
            </h1>
          </v-toolbar-title>
        </v-toolbar>
        <v-tabs vertical>
          <div v-for="(item, index) in Basic" :key="index">
            <v-tab id="hello">
              {{item.Title}}
            </v-tab>
          </div>
          <v-tab-item v-for="(item, index) in BasicContent" :key="index">
            <v-card flat>
              <v-card-text>
                <h1 style="color: black; font-size: 35px;">{{item.Title}}</h1>
                <div class="Content_html">
                  <p v-html="item.Description"></p>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>

      <v-card>
        <v-toolbar
            flat
            color="black"
            dark
        >
          <v-toolbar-title class="flex">
            <h1>
              FORMS
            </h1>
          </v-toolbar-title>
        </v-toolbar>
        <v-tabs vertical>
          <div v-for="(item, index) in Forms" :key="index">
            <v-tab>
              {{item.Title}}
            </v-tab>
          </div>
          <v-tab-item v-for="(item, index) in FormsContent" :key="index">
            <v-card flat>
              <v-card-text>
                <h1>{{item.Title}}</h1>
                <p>{{item.Description}}</p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
  }),
  computed: {
    Basic() {
      return this.$store.getters.HTMLBasicTabsName
    },
    Forms() {
      return this.$store.getters.HTMLFormsTabsName
    },
    BasicContent() {
      return this.$store.getters.HTMLBasicContent
    },
    FormsContent() {
      return this.$store.getters.HTMLFormsContent
    }
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
.Content_html{
  background-color: #0E5183;
  width: 60%;
  display: flex;
  justify-content: center;
  margin-left: 320px;
  margin-top: 15px;
  padding: 25px;
  p{
    color: white;
    font-size: 20px;
  }
}
</style>

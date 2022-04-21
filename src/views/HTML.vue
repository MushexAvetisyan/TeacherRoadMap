<template>
  <v-card>
    <v-toolbar
        flat
        color="primary"
        dark
    >
      <v-toolbar-title>HTML</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <div v-for="(item, index) in Tabs" :key="index">
        <v-tab>
          {{item.title}}
        </v-tab>
      </div>
      <v-tab-item v-for="(item, index) in TabsContent" :key="index">
        <v-card flat>
          <v-card-text>
            <h1>{{item.heading}}</h1>
            <p>{{item.Content}}</p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    Tabs: [
      {
        title: "okay"
      },
      {
        title: "Hello"
      },
      {
        title: "okay"
      },
      {
        title: "okay"
      },
      {
        title: "okay"
      },
      {
        title: "okay"
      },
      {
        title: "okay"
      },
      {
        title: "okay"
      },
      {
        title: "okay"
      },
    ],
    TabsContent: [
      {
        heading: "sss",
        Content: "asdasd"
      },
      {
        heading: "sss",
        Content: "asdasd"
      },
      {
        heading: "sss",
        Content: "asdasd"
      },
      {
        heading: "sss",
        Content: "asdasd"
      },
      {
        heading: "sss",
        Content: "asdasd"
      },

    ]
  }),
}
</script>

<style scoped lang="scss">
</style>

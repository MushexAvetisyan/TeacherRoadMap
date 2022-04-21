import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {



    BasicContentTabs: [
      {
        Title: "1.What is HTTP"
      },
      {
        Title: "2.What is HTML?"
      },
      {
        Title: "3.Basic Examples"
      },
      {
        Title: "4.Elements"
      },
      {
        Title: "5.Attributes"
      },
      {
        Title: "6.Headings"
      },
      {
        Title: "7.Paragraphs"
      },
      {
        Title: "8.Styles"
      },
    ],

    BasicContent: [
      {
        Title: "What is HTTP?",
        Description: "<p>1.HTTP stands for Hyper Text Transfer Protocol</p>" +
          "<p>2.WWW is about communication between web clients and servers</p>" +
          "<p>3.Communication between client computers and web servers is done by sending HTTP Requests and receiving HTTP Responses</p>"
      },
      {
        Title: "What is HTML?",
        Description: "<p>1.HTML stands for Hyper Text Markup Language</p>" +
          "<p>2.HTML is the standard markup language for Web pages</p>" +
          "<p>3.HTML elements are the building blocks of HTML pages</p>" +
          "4.HTML elements are represented by <> tags",
      },
      {
        Title: "Basic Examples",
        Description: "<p>All HTML documents must start with a document type declaration: '<'!DOCTYPE html>.</p>" +
          "<p>The HTML document itself begins with '<'html'>' and ends with '<'/html>.</p>" +
          "The visible part of the HTML document is between <span style='color: red'>'<'body> and '<'/body>.</span>"
      },
      {
        Title: "Elements",
        Description: "<p>An HTML element is defined by a start tag, some content, and an end tag.</p>"
      },
      {
        Title: "Attributes",
        Description: "<p>HTML attributes provide additional information about HTML elements.</p>",
      },
      {
        Title: "Headings",
        Description: "<p>HTML headings are titles or subtitles that you want to display on a webpage.</p>",
      },
    ],



    FormsContentTabs: [
      {
        Title: "1.What is Forms"
      },
      {
        Title: "1.What is Forms"
      },
      {
        Title: "1.What is Forms"
      },
      {
        Title: "1.What is Forms"
      },
      {
        Title: "1.What is Forms"
      },
    ],

    FormsContent: [
      {
        Title: "forms",
        Description: "content",
      },
    ],
  },

  getters: {
    HTMLBasicContent: (state) => state.BasicContent,
    HTMLFormsContent: (state) => state.FormsContent,

    HTMLBasicTabsName: (state) => state.BasicContentTabs,
    HTMLFormsTabsName: (state) => state.FormsContentTabs
  },

  mutations: {
  },

  actions: {
  },

  modules: {
  }
})

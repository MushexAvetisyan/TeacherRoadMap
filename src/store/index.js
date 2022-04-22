import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    // HTML----------------------------------------------------------------------------------------------

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
          "4.HTML elements are represented by <span style='color: red'><></span> tags"
      },
      {
        Title: "Basic Examples",
        Description: "<p>1.All HTML documents must start with a document type declaration: '<'!DOCTYPE html>.</p>" +
          "<p>2.The HTML document itself begins with '<'html'>' and ends with '<'/html>.</p>" +
          "<p>3.The visible part of the HTML document is between <span style='color: red'>'<'body> and '<'/body>.</span></p>"
      },
      {
        Title: "Elements",
        Description: "<p>1.An HTML element is defined by a start tag, some content, and an end tag.</p>" +
          "<p>2.Nested HTML Elements</p>" +
          "<p>3.HTML elements can be nested (this means that elements can contain other elements)</p>" +
          "<p>4.All HTML documents consist of nested HTML elements</p>" +
          "<p>5.The following example contains four HTML elements ('<'html>, '<'body>, '<'h1> and '<'p>)</p>"
      },
      {
        Title: "Attributes",
        Description: "<p>1.HTML attributes provide additional information about HTML elements.</p>" +
          "<p>2.All HTML elements can have attributes</p>" +
          "<p>3.Attributes provide additional information about elements</p>" +
          "<p>4.Attributes are always specified in the start tag</p>" +
          "<p>5.Attributes usually come in name/value pairs like: name=\"value\"</p>" +
        "The '<'a> tag defines a hyperlink. The <span style='color: red'>href</span> attribute specifies the URL of the page the link goes to:",
      },
      {
        Title: "Headings",
        Description: "<p>1.HTML headings are titles or subtitles that you want to display on a webpage.</p>" +
        "<p>2.HTML headings are defined with the <span style='color: red'>'<'h1></span> to <span style='color: red'>'<'h6></span> tags</p>" +
          "<p>3.'<'h1> defines the most important heading. '<'h6> defines the least important heading.</p>" +
        "<p>4.Search engines use the headings to index the structure and content of your web pages</p>" +
          "<p>5.Users often skim a page by its headings. It is important to use headings to show the document structure.</p>",
      },
      {
        Title: "Paragraphs",
        Description: "<p>1.A paragraph always starts on a new line, and is usually a block of text.</p>" +
        "<p>2.The HTML <span style='color: red'>'<'p></span> element defines a paragraphp</p>" +
          "<p>3.A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph</p>",
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


    // JAVASCRIPT------------------------------------------------------------------------------------------

    JavaScriptBasicContentTabs: [
      {
        Title: "1.Introduction",
      },
      {
        Title: "2.Where To",
      },
      {
        Title: "3.Output",
      },
      {
        Title: "4.Statement",
      },
      {
        Title: "5.Syntax",
      },
      {
        Title: "6.Variables",
      },
      {
        Title: "7.Let",
      },
      {
        Title: "7.Const",
      },
      {
        Title: "7.Operators",
      },
      {
        Title: "7.Arithmetic",
      },
      {
        Title: "7.Assignment",
      },
      {
        Title: "7.Data Types",
      },
      {
        Title: "7.Functions",
      },
      {
        Title: "7.Objects",
      },
    ],
    JavaScriptContent: [
      {
        Title: "Introduction",
        Description: "<h2>1.JavaScript Can Change HTML Content</h2>" +
          "<br><p>1.One of many JavaScript HTML methods is getElementById()</p>" +
          "<p>2.The example below \"finds\" an HTML element (with id=\"demo\"), and changes the element content (innerHTML) to \"Hello JavaScript\":</p>" +
          "<span style='color: red'>Example</span>" +
          "<p><span style='color: red'>document.getElementById(\"demo\").innerHTML = \"Hello JavaScript\";</span></p>" +
          "<br><br><h2>2.JavaScript Can Change HTML Attribute Values</h2>" +
          "<p>1.In this example JavaScript changes the value of the src (source) attribute of an (\"img\") tag:</p>" +
          "<a href='https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb' target='_blank'>Click For Watch Example</a>" +
          "<h2><br>3.JavaScript Can Change HTML Styles (CSS)</h2>" +
          "<br><p>Changing the style of an HTML element, is a variant of changing an HTML attribute:</p>" +
          "<span style='color: red'>document.getElementById(\"demo\").style.fontSize = \"35px\";</span>" +
          "<h2><br>4.JavaScript Can Hide HTML Elements</h2>" +
          "<br><p>Hiding HTML elements can be done by changing the display style:</p>" +
          "<span style='color: red'>document.getElementById(\"demo\").style.display = \"none\";</span>" +
          "<h2><br>5.JavaScript Can Show HTML Elements</h2>" +
          "<br><p>Showing hidden HTML elements can also be done by changing the display style:</p>" +
          "<span style='color: red'>document.getElementById(\"demo\").style.display = \"block\";</span>"
      }
    ]

  },

  getters: {
    HTMLBasicContent: (state) => state.BasicContent,
    HTMLFormsContent: (state) => state.FormsContent,

    HTMLBasicTabsName: (state) => state.BasicContentTabs,
    HTMLFormsTabsName: (state) => state.FormsContentTabs,

    JavaScriptBasicTabsName: (state) => state.JavaScriptBasicContentTabs,
    JavaScriptBasicContent: (state) => state.JavaScriptContent,
  },

  mutations: {
  },

  actions: {
  },

  modules: {
  }
})

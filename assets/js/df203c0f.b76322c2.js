"use strict";(self.webpackChunkatrim_roadmap_2023=self.webpackChunkatrim_roadmap_2023||[]).push([[9924],{491:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(7294),r=a(6010),n=a(9960),s=a(8824),c=a(1944),o=a(5281),i=a(5999),u=a(9178),m=a(197);function g(e){let{doc:t}=e;return l.createElement("article",{className:"margin-vert--lg"},l.createElement(n.Z,{to:t.permalink},l.createElement("h2",null,t.title)),t.description&&l.createElement("p",null,t.description))}function d(e){let{tag:t}=e;const a=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,i.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:t}))}(),d=(0,i.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:a(t.count),tagName:t.label});return l.createElement(c.FG,{className:(0,r.Z)(o.k.wrapper.docsPages,o.k.page.docsTagDocListPage)},l.createElement(c.d,{title:d}),l.createElement(m.Z,{tag:"doc_tag_doc_list"}),l.createElement(u.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,d),l.createElement(n.Z,{href:t.allTagsPath},l.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement("section",{className:"margin-vert--lg"},t.items.map((e=>l.createElement(g,{key:e.id,doc:e})))))))))}},8824:(e,t,a)=>{a.d(t,{c:()=>i});var l=a(7294),r=a(2263);const n=["zero","one","two","few","many","other"];function s(e){return n.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function i(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}}}]);
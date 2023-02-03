"use strict";(self.webpackChunkatrim_roadmap_2023=self.webpackChunkatrim_roadmap_2023||[]).push([[9180],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),l=c(n),g=a,h=l["".concat(s,".").concat(g)]||l[g]||u[g]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m[l]="string"==typeof e?e:a,o[1]=m;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>m,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_label:"Diagrams - part 2",sidebar_position:11},o="Mermaid diagrams - part 2",m={unversionedId:"projects-2023/diagrams/diagrams-2",id:"projects-2023/diagrams/diagrams-2",title:"Mermaid diagrams - part 2",description:"State diagrams",source:"@site/docs/projects-2023/diagrams/diagrams-2.md",sourceDirName:"projects-2023/diagrams",slug:"/projects-2023/diagrams/diagrams-2",permalink:"/ecimtech-doculibrary/docs/projects-2023/diagrams/diagrams-2",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_label:"Diagrams - part 2",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Diagrams - part 1",permalink:"/ecimtech-doculibrary/docs/projects-2023/diagrams/diagrams-1"},next:{title:"Diagrams - part 3",permalink:"/ecimtech-doculibrary/docs/projects-2023/diagrams/diagrams-3"}},s={},c=[{value:"State diagrams",id:"state-diagrams",level:2},{value:"State diagram 1",id:"state-diagram-1",level:3},{value:"State diagram 2",id:"state-diagram-2",level:3},{value:"State diagram 3",id:"state-diagram-3",level:3},{value:"State diagram 4",id:"state-diagram-4",level:3},{value:"State: With notes",id:"state-with-notes",level:3},{value:"State: Concurrency",id:"state-concurrency",level:3},{value:"Entity-Relationship",id:"entity-relationship",level:2},{value:"ER diagram 1",id:"er-diagram-1",level:3},{value:"ER diagram 2",id:"er-diagram-2",level:3},{value:"ER diagram 3",id:"er-diagram-3",level:3},{value:"User journey",id:"user-journey",level:2},{value:"User journey 1",id:"user-journey-1",level:3},{value:"Pie charts",id:"pie-charts",level:2},{value:"Pie 1",id:"pie-1",level:3},{value:"Pie 2",id:"pie-2",level:3},{value:"Requirement diagram",id:"requirement-diagram",level:2},{value:"Requirement 1",id:"requirement-1",level:3},{value:"Requirement 2",id:"requirement-2",level:3},{value:"Gitgraph diagrams",id:"gitgraph-diagrams",level:2},{value:"Gitgraph 1",id:"gitgraph-1",level:3},{value:"Gitgraph 2",id:"gitgraph-2",level:3},{value:"Tags",id:"tags",level:3},{value:"Branches",id:"branches",level:3},{value:"Checkout existing branch",id:"checkout-existing-branch",level:4},{value:"Merging two branches",id:"merging-two-branches",level:4},{value:"Hiding Branch names and lines",id:"hiding-branch-names-and-lines",level:4}],d={toc:c};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mermaid-diagrams---part-2"},"Mermaid diagrams - part 2"),(0,a.kt)("h2",{id:"state-diagrams"},"State diagrams"),(0,a.kt)("h3",{id:"state-diagram-1"},"State diagram 1"),(0,a.kt)("mermaid",{value:"stateDiagram-v2\n    [*] --\x3e Still\n    Still --\x3e [*]\n\n    Still --\x3e Moving\n    Moving --\x3e Still\n    Moving --\x3e Crash\n    Crash --\x3e [*]"}),(0,a.kt)("h3",{id:"state-diagram-2"},"State diagram 2"),(0,a.kt)("mermaid",{value:"stateDiagram-v2\n    [*] --\x3e First\n    First --\x3e Second\n    First --\x3e Third\n\n    state First {\n        [*] --\x3e fir\n        fir --\x3e [*]\n    }\n    state Second {\n        [*] --\x3e sec\n        sec --\x3e [*]\n    }\n    state Third {\n        [*] --\x3e thi\n        thi --\x3e [*]\n    }"}),(0,a.kt)("h3",{id:"state-diagram-3"},"State diagram 3"),(0,a.kt)("mermaid",{value:"stateDiagram-v2\n    state if_state <<choice>>\n    [*] --\x3e IsPositive\n    IsPositive --\x3e if_state\n    if_state --\x3e False: if n < 0\n    if_state --\x3e True : if n >= 0"}),(0,a.kt)("h3",{id:"state-diagram-4"},"State diagram 4"),(0,a.kt)("mermaid",{value:"stateDiagram-v2\n  state fork_state <<fork>>\n    [*] --\x3e fork_state\n    fork_state --\x3e State2\n    fork_state --\x3e State3\n\n    state join_state <<join>>\n    State2 --\x3e join_state\n    State3 --\x3e join_state\n    join_state --\x3e State4\n    State4 --\x3e [*]"}),(0,a.kt)("h3",{id:"state-with-notes"},"State: With notes"),(0,a.kt)("mermaid",{value:"stateDiagram-v2\n  State1: The state with a note\n  note right of State1\n    Important information! You can write\n    notes.\n  end note\n  State1 --\x3e State2\nnote left of State2 : This is the note to the left."}),(0,a.kt)("h3",{id:"state-concurrency"},"State: Concurrency"),(0,a.kt)("mermaid",{value:"stateDiagram-v2\n    [*] --\x3e Active\n\n    state Active {\n        [*] --\x3e NumLockOff\n        NumLockOff --\x3e NumLockOn : EvNumLockPressed\n        NumLockOn --\x3e NumLockOff : EvNumLockPressed\n        --\n        [*] --\x3e CapsLockOff\n        CapsLockOff --\x3e CapsLockOn : EvCapsLockPressed\n        CapsLockOn --\x3e CapsLockOff : EvCapsLockPressed\n        --\n        [*] --\x3e ScrollLockOff\n        ScrollLockOff --\x3e ScrollLockOn : EvScrollLockPressed\n        ScrollLockOn --\x3e ScrollLockOff : EvScrollLockPressed\n    }"}),(0,a.kt)("h2",{id:"entity-relationship"},"Entity-Relationship"),(0,a.kt)("h3",{id:"er-diagram-1"},"ER diagram 1"),(0,a.kt)("mermaid",{value:"erDiagram\n    CUSTOMER ||--o{ ORDER : places\n    ORDER ||--|{ LINE-ITEM : contains\n    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses"}),(0,a.kt)("h3",{id:"er-diagram-2"},"ER diagram 2"),(0,a.kt)("mermaid",{value:"erDiagram\n    CUSTOMER ||--o{ ORDER : places\n    CUSTOMER {\n        string name\n        string custNumber\n        string sector\n    }\n    ORDER ||--|{ LINE-ITEM : contains\n    ORDER {\n        int orderNumber\n        string deliveryAddress\n    }\n    LINE-ITEM {\n        string productCode\n        int quantity\n        float pricePerUnit\n    }"}),(0,a.kt)("h3",{id:"er-diagram-3"},"ER diagram 3"),(0,a.kt)("mermaid",{value:"erDiagram\n    CAR ||--o{ NAMED-DRIVER : allows\n    CAR {\n        string registrationNumber\n        string make\n        string model\n    }\n    PERSON ||--o{ NAMED-DRIVER : is\n    PERSON {\n        string firstName\n        string lastName\n        int age\n    }"}),(0,a.kt)("h2",{id:"user-journey"},"User journey"),(0,a.kt)("h3",{id:"user-journey-1"},"User journey 1"),(0,a.kt)("mermaid",{value:"journey\n    title My working day\n    section Go to work\n      Make tea: 5: Me\n      Go upstairs: 3: Me\n      Do work: 1: Me, Cat\n    section Go home\n      Go downstairs: 5: Me\n      Sit down: 5: Me"}),(0,a.kt)("h2",{id:"pie-charts"},"Pie charts"),(0,a.kt)("h3",{id:"pie-1"},"Pie 1"),(0,a.kt)("mermaid",{value:'pie title Pets adopted by volunteers\n    "Dogs" : 386\n    "Cats" : 85\n    "Rats" : 15'}),(0,a.kt)("h3",{id:"pie-2"},"Pie 2"),(0,a.kt)("mermaid",{value:'pie showData\n    title Key elements in Product X\n    "Calcium" : 42.96\n    "Potassium" : 50.05\n    "Magnesium" : 10.01\n    "Iron" :  5'}),(0,a.kt)("h2",{id:"requirement-diagram"},"Requirement diagram"),(0,a.kt)("h3",{id:"requirement-1"},"Requirement 1"),(0,a.kt)("mermaid",{value:"requirementDiagram\n\n    requirement test_req {\n    id: 1\n    text: the test text.\n    risk: high\n    verifymethod: test\n    }\n\n    element test_entity {\n    type: simulation\n    }\n\n    test_entity - satisfies -> test_req"}),(0,a.kt)("h3",{id:"requirement-2"},"Requirement 2"),(0,a.kt)("mermaid",{value:'    requirementDiagram\n\n    requirement test_req {\n    id: 1\n    text: the test text.\n    risk: high\n    verifymethod: test\n    }\n\n    functionalRequirement test_req2 {\n    id: 1.1\n    text: the second test text.\n    risk: low\n    verifymethod: inspection\n    }\n\n    performanceRequirement test_req3 {\n    id: 1.2\n    text: the third test text.\n    risk: medium\n    verifymethod: demonstration\n    }\n\n    interfaceRequirement test_req4 {\n    id: 1.2.1\n    text: the fourth test text.\n    risk: medium\n    verifymethod: analysis\n    }\n\n    physicalRequirement test_req5 {\n    id: 1.2.2\n    text: the fifth test text.\n    risk: medium\n    verifymethod: analysis\n    }\n\n    designConstraint test_req6 {\n    id: 1.2.3\n    text: the sixth test text.\n    risk: medium\n    verifymethod: analysis\n    }\n\n    element test_entity {\n    type: simulation\n    }\n\n    element test_entity2 {\n    type: word doc\n    docRef: reqs/test_entity\n    }\n\n    element test_entity3 {\n    type: "test suite"\n    docRef: github.com/all_the_tests\n    }\n\n\n    test_entity - satisfies -> test_req2\n    test_req - traces -> test_req2\n    test_req - contains -> test_req3\n    test_req3 - contains -> test_req4\n    test_req4 - derives -> test_req5\n    test_req5 - refines -> test_req6\n    test_entity3 - verifies -> test_req5\n    test_req <- copies - test_entity2'}),(0,a.kt)("h2",{id:"gitgraph-diagrams"},"Gitgraph diagrams"),(0,a.kt)("h3",{id:"gitgraph-1"},"Gitgraph 1"),(0,a.kt)("mermaid",{value:"    gitGraph\n       commit\n       commit\n       commit"}),(0,a.kt)("h3",{id:"gitgraph-2"},"Gitgraph 2"),(0,a.kt)("mermaid",{value:"gitGraph\n   commit\n   commit\n   branch develop\n   checkout develop\n   commit\n   commit\n   checkout main\n   merge develop\n   commit\n   commit"}),(0,a.kt)("h3",{id:"tags"},"Tags"),(0,a.kt)("mermaid",{value:' gitGraph\n       commit\n       commit id: "Normal" tag: "v1.0.0"\n       commit\n       commit id: "Reverse" type: REVERSE tag: "RC_1"\n       commit\n       commit id: "Highlight" type: HIGHLIGHT tag: "8.8.4"\n       commit'}),(0,a.kt)("h3",{id:"branches"},"Branches"),(0,a.kt)("mermaid",{value:"    gitGraph\n       commit\n       commit\n       branch develop\n       commit\n       commit\n       commit"}),(0,a.kt)("h4",{id:"checkout-existing-branch"},"Checkout existing branch"),(0,a.kt)("mermaid",{value:"gitGraph\n       commit\n       commit\n       branch develop\n       commit\n       commit\n       commit\n       checkout main\n       commit\n       commit"}),(0,a.kt)("h4",{id:"merging-two-branches"},"Merging two branches"),(0,a.kt)("mermaid",{value:"gitGraph\n    commit\n    commit\n    branch develop\n    commit\n    commit\n    commit\n    checkout main\n    commit\n    commit\n    merge develop\n    commit\n    commit"}),(0,a.kt)("h4",{id:"hiding-branch-names-and-lines"},"Hiding Branch names and lines"),(0,a.kt)("mermaid",{value:"%%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': {'showBranches': false}} }%%\n      gitGraph\n        commit\n        branch hotfix\n        checkout hotfix\n        commit\n        branch develop\n        checkout develop\n        commit id:\"ash\" tag:\"abc\"\n        branch featureB\n        checkout featureB\n        commit type:HIGHLIGHT\n        checkout main\n        checkout hotfix\n        commit type:NORMAL\n        checkout develop\n        commit type:REVERSE\n        checkout featureB\n        commit\n        checkout main\n        merge hotfix\n        checkout featureB\n        commit\n        checkout develop\n        branch featureA\n        commit\n        checkout develop\n        merge hotfix\n        checkout featureA\n        commit\n        checkout featureB\n        commit\n        checkout develop\n        merge featureA\n        branch release\n        checkout release\n        commit\n        checkout main\n        commit\n        checkout release\n        merge main\n        checkout develop\n        merge release\n"}))}l.isMDXComponent=!0}}]);
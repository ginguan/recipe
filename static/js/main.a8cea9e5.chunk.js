(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,n,i){},102:function(e,n,i){},120:function(e,n,i){"use strict";i.r(n);var a=i(0),t=i.n(a),r=i(80),o=i.n(r),s=(i(100),i(72)),d=i(19),m=(i(102),i(9)),l=i(190),g=i(194),u=i(191),c=i(195),h=i(196),z=i(193),S=i(197),p=i(198),k=i(192),y=i(117),f=i.n(y),E=i(114),C=i.n(E),B=i(182),T=i(188),b=i(40),w=i.n(b),L=i(113),V=i.n(L),j=i(74),G=i.n(j),x=i(199),q=i(187),M=i(118),W=i(184),v=i(200),O=i(201),R=["All","Non-Alcoholic","Vodka","Liqueur","Gin","Rum","Tequila","Whiskey","Brandy","Collins","Quiz"];var D=function(e){var n=e.logo,i=a.useState(null),t=Object(m.a)(i,2),r=t[0],o=t[1],s=function(){o(null)};return a.createElement(x.a,{position:"static",style:{backgroundColor:"#607d8b"}},a.createElement(q.a,{maxWidth:"xl"},a.createElement(v.a,{disableGutters:!0},a.createElement(G.a,{sx:{display:{xs:"none",md:"flex"},mr:1}}),a.createElement(O.a,{variant:"h6",noWrap:!0,component:"a",href:"/recipe",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"Review"),a.createElement(l.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},a.createElement(u.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},color:"inherit"},a.createElement(V.a,null)),a.createElement(M.a,{id:"menu-appbar",anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(r),onClose:s,sx:{display:{xs:"block",md:"none"}}},R.map(function(e){return a.createElement(W.a,{key:e,component:"a",href:"http://ginguan.github.io/recipe/#/".concat(e)},a.createElement(O.a,{textAlign:"center"},e))}))),a.createElement(G.a,{sx:{display:{xs:"flex",md:"none"},mr:1}}),a.createElement(O.a,{variant:"h5",noWrap:!0,component:"a",href:"http://ginguan.github.io/recipe",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},n),a.createElement(l.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}},R.map(function(e){return a.createElement(T.a,{key:e,component:"a",href:"http://ginguan.github.io/recipe/#/".concat(e),onClick:s,sx:{my:2,color:"white",display:"block"}},e)})))))},A=function(e){var n=e.row,i=(e.setRows,e.rows,Object(a.useState)(!1)),r=Object(m.a)(i,2),o=r[0],s=r[1];return t.a.createElement(t.a.Fragment,null,t.a.createElement(k.a,{sx:{"& > *":{borderBottom:"unset"}}},t.a.createElement(z.a,null,t.a.createElement(u.a,{"aria-label":"expand row",size:"small",onClick:function(){return s(!o)}},o?t.a.createElement(C.a,null):t.a.createElement(f.a,null))),t.a.createElement(z.a,{component:"th",scope:"row",style:{fontWeight:"bold",color:"MidnightBlue"}},n.name),t.a.createElement(z.a,null,n.tag),t.a.createElement(z.a,null,n.glass),t.a.createElement(z.a,null,n.method),t.a.createElement(z.a,null,n.note)),t.a.createElement(k.a,null,t.a.createElement(z.a,{style:{paddingLeft:130,paddingBottom:0,paddingTop:0},colSpan:6},t.a.createElement(g.a,{in:o,timeout:"auto",unmountOnExit:!0},t.a.createElement(l.a,{sx:{margin:1}},t.a.createElement(c.a,{align:"center"},t.a.createElement(h.a,null,n.ingredients.map(function(e){return t.a.createElement(k.a,null,t.a.createElement(z.a,{width:"30%",component:"th",scope:"row",style:{color:"ForestGreen"}},e.measure),t.a.createElement(z.a,{align:"left",style:{color:"ForestGreen"}},e.ingredient))}))))))))},P=function(e){var n=e.drinkSet,i=e.header,r=e.isAnswer,o=Object(a.useState)(n),s=Object(m.a)(o,2),d=s[0],l=s[1],g=Object(a.useState)(n),u=Object(m.a)(g,2),y=u[0],f=u[1],E=Object(a.useState)(""),C=Object(m.a)(E,2),w=C[0],L=C[1],V=Object(a.useState)("asc"),j=Object(m.a)(V,2),G=j[0],x=j[1],q=function(e){l(b.orderBy(d,e,G)),f(b.orderBy(y,e,G)),x("asc"===G?"desc":"asc")};return t.a.createElement(S.a,null,!r&&t.a.createElement(D,{logo:i}),!r&&t.a.createElement(B.a,{onChange:function(e){!function(e){L(e.target.value),f(d.filter(function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())||n.tag.toLowerCase().includes(e.target.value.toLowerCase())||n.glass.toLowerCase().includes(e.target.value.toLowerCase())||n.method.toLowerCase().includes(e.target.value.toLowerCase())}))}(e)},style:{padding:"20px"},placeholder:"search",value:w}),t.a.createElement(c.a,{align:"center",style:{width:"80%",tableLayout:"fixed"}},t.a.createElement(p.a,null,t.a.createElement(k.a,null,t.a.createElement(z.a,null,t.a.createElement(T.a,{onClick:function(){l(n),f(n),L("")}},"Reset")),t.a.createElement(z.a,{style:{fontWeight:"bold"},sortDirection:"asc"},"Drinks",t.a.createElement(T.a,{onClick:function(){return q("name")}},"^")),t.a.createElement(z.a,{style:{fontWeight:"bold"},sortDirection:"asc"},"Base",t.a.createElement(T.a,{onClick:function(){return q("tag")}},"^")),t.a.createElement(z.a,{style:{fontWeight:"bold"},sortDirection:"asc"},"Glasss",t.a.createElement(T.a,{onClick:function(){return q("glass")}},"^")),t.a.createElement(z.a,{style:{fontWeight:"bold"},sortDirection:"asc"},"Methods",t.a.createElement(T.a,{onClick:function(){return q("method")}},"^")),t.a.createElement(z.a,{style:{fontWeight:"bold"},sortDirection:"asc"},"Note",t.a.createElement(T.a,{onClick:function(){return q("note")}},"^")))),t.a.createElement(h.a,null,y.map(function(e){return t.a.createElement(A,{row:e,setRows:l,rows:y})}))))},J=[{name:"Shirley Temple",tag:"Non-alcoholic",method:"Build on ice",glass:"Tall",ingredients:[{measure:"0.5 oz",ingredient:"Grenadine"},{ingredient:"Orange Juice"},{ingredient:"7-up"}]},{name:"Lime Rickey",tag:"Non-alcoholic",method:"Build on ice",glass:"Tall",ingredients:[{measure:"1.0 oz",ingredient:"Lime Juice"},{measure:"0.5 oz",ingredient:"Simple syrup"},{ingredient:"Soda water"}]}],F=[{name:"Tom Collins",tag:"??",method:"Build on ice",glass:"Tall",ingredients:[{measure:"2.0 oz",ingredient:"Gin"},{measure:"1.0 oz",ingredient:"Lemon Juice"},{measure:"0.5 oz",ingredient:"Simple Syrup"},{ingredient:"Soda water"}]},{name:"Comrade Collins",tag:"??",method:"Build on ice",glass:"Tall",ingredients:[{measure:"2.0 oz",ingredient:"Vodaka"},{measure:"1.0 oz",ingredient:"Lemon Juice"},{measure:"0.5 oz",ingredient:"Simple Syrup"},{ingredient:"Soda water"}]},{name:"Juan Collins",tag:"??",method:"Build on ice",glass:"Tall",ingredients:[{measure:"2.0 oz",ingredient:"Tequila"},{measure:"1.0 oz",ingredient:"Lemon Juice"},{measure:"0.5 oz",ingredient:"Simple Syrup"},{ingredient:"Soda water"}]},{name:"Pedro Collins",tag:"??",method:"Build on ice",glass:"Tall",ingredients:[{measure:"2.0 oz",ingredient:"Rum"},{measure:"1.0 oz",ingredient:"Lemon Juice"},{measure:"0.5 oz",ingredient:"Simple Syrup"},{ingredient:"Soda water"}]},{name:"Pierre Collins",tag:"??",method:"Build on ice",glass:"Tall",ingredients:[{measure:"2.0 oz",ingredient:"Cognac"},{measure:"1.0 oz",ingredient:"Lemon Juice"},{measure:"0.5 oz",ingredient:"Simple Syrup"},{ingredient:"Soda water"}]},{name:"Michael Collins",tag:"??",method:"Build on ice",glass:"Tall",ingredients:[{measure:"2.0 oz",ingredient:"Irish Whiskey"},{measure:"1.0 oz",ingredient:"Lemon Juice"},{measure:"0.5 oz",ingredient:"Simple Syrup"},{ingredient:"Soda water"}]},{name:"Sandy Collins",tag:"??",method:"Build on ice",glass:"Tall",ingredients:[{measure:"2.0 oz",ingredient:"Scotch"},{measure:"1.0 oz",ingredient:"Lemon Juice"},{measure:"0.5 oz",ingredient:"Simple Syrup"},{ingredient:"Soda water"}]}],I=[{name:"Bartender's Root Bear",tag:"Liqueur",method:"Build on ice",glass:"Tall",ingredients:[{measure:"1.0 oz",ingredient:"Coffe liqueur"},{measure:"1.0 oz",ingredient:"Galliano"},{measure:"Half",ingredient:"Coke"},{measure:"Half",ingredient:"Soda"}]},{name:"Brown Cow",tag:"Liqueur",method:"Build on ice",glass:"Short",ingredients:[{measure:"1.0 oz",ingredient:"Coffe liqueur"},{ingredient:"Cream/Milk"}]},{name:"Monkey's Cow",tag:"Liqueur",method:"Build on ice",glass:"Short",ingredients:[{measure:"0.5 oz",ingredient:"Coffe liqueur"},{measure:"0.5 oz",ingredient:"Banana liqueur"},{ingredient:"Cream/Milk"}]},{name:"Fuzzy Navel",tag:"Liqueur",method:"Build on ice",glass:"Short",ingredients:[{measure:"1.0 oz",ingredient:"Peach Schnapps"},{ingredient:"Orange juice"}]},{name:"Campari Spritz",tag:"Liqueur",method:"Build on ice",glass:"Wine glass",ingredients:[{measure:"1.0 oz",ingredient:"Campari"},{measure:"2.0 oz",ingredient:"Sparkling Wine"},{measure:"1oz",ingredient:"Soda water"}]},{name:"Golden Cadillac",tag:"Liqueur",method:"Shake & Strain",glass:"Martini",ingredients:[{measure:"1.0 oz",ingredient:"Galliano"},{measure:"1.0 oz",ingredient:"Cacao"},{measure:"1.0 oz",ingredient:"Cream"}]},{name:"Amaretto Sour",tag:"Liqueur",method:"Wet & Dry Shake",glass:"Short",ingredients:[{measure:"2.0 oz",ingredient:"Amaretto"},{measure:"1.0 oz",ingredient:"Lemon juice"},{measure:"0.5 oz",ingredient:"Egg White"},{measure:"Few drops",ingredient:"bitters"}]}],N=[{name:"Vodka Slime",tag:"Vodka",method:"Build on ice",glass:"Short",ingredients:[{measure:"1.0 oz",ingredient:"Vodka"},{measure:"0.25 oz",ingredient:"Lime juice"},{ingredient:"7-up"}]},{name:"Screwdriver",tag:"Vodka",method:"Build on ice",glass:"Short",ingredients:[{measure:"1.0 oz",ingredient:"Vodka"},{ingredient:"Orange juice"}]},{name:"Screw-up",tag:"Vodka",method:"Build on ice",glass:"Short",ingredients:[{measure:"1.0 oz",ingredient:"Vodka"},{measure:"Half",ingredient:"Orange juice"},{measure:"Half",ingredient:"7-UP"}]},{name:"Cape Cod",tag:"Vodka",method:"Build on ice",glass:"Short",ingredients:[{measure:"1.0 oz",ingredient:"Vodka"},{ingredient:"Cranberry juice"}]},{name:"Greyhound",tag:"Vodka",method:"Build on ice",glass:"short",ingredients:[{measure:"1.0 oz",ingredient:"Vodka"},{ingredient:"Grapefruit juice"}]},{name:"Salty dog",tag:"Vodka",method:"Build on ice, Salted rim",glass:"short",ingredients:[{measure:"1.0 oz",ingredient:"Vodka"},{ingredient:"Grapefruit juice"}]},{name:"Sea Breeze",tag:"Vodka",method:"Build on ice",glass:"Tall",ingredients:[{measure:"2.0 oz",ingredient:"Vodka"},{ingredient:"Cranberry juice"},{ingredient:"Grapefruit juice"}]},{name:"Bay Breeze",tag:"Vodka",method:"Build on ice",glass:"Tall",ingredients:[{measure:"2.0 oz",ingredient:"Vodka"},{ingredient:"Cranberry juice"},{ingredient:"Pineapple juice"}]},{name:"Moscow Mule",tag:"Vodka",method:"Build on ice",glass:"Mug",ingredients:[{measure:"1.0 oz",ingredient:"Vodka"},{ingredient:"Ginger beer"},{measure:"0.25 oz",ingredient:"Lime juice"}]},{name:"Bloody Mary",tag:"Vodka",method:"Build on ice, Salted rim",glass:"Tall",ingredients:[{measure:"4 dahses",ingredient:"Tabasco"},{measure:"4 dashes",ingredient:"Worcestershire"},{measure:"2.0 oz",ingredient:"Vodka"},{ingredient:"Tomato juice"}]},{name:"Caesar",tag:"Vodka",method:"Build on ice, Celery salt rim",glass:"Tall",ingredients:[{measure:"4 dahses",ingredient:"Tabasco"},{measure:"4 dashes",ingredient:"Worcestershire"},{measure:"2.0 oz",ingredient:"Vodka"},{ingredient:"Clamato juice"}]},{name:"Harvey Wallbanger",tag:"Vodka",method:"Build on ice",glass:"Short",ingredients:[{measure:"3/4 oz",ingredient:"Vodka"},{ingredient:"Orange juice"},{measure:"1/4 oz",ingredient:"Galliano"}]},{name:"Sex on the Beach",tag:"Vodka",method:"Build on ice",glass:"Tall",ingredients:[{measure:"1.5 oz",ingredient:"Vodka"},{measure:"0.5 oz",ingredient:"Peach Schnapps"},{ingredient:"Orange juice"},{ingredient:"Cranberry juice"}]},{name:"Black Russian",tag:"Vodka",method:"Gentlemen's",glass:"Short",ingredients:[{measure:"1.5 oz",ingredient:"Vodka"},{measure:"0.5 oz",ingredient:"Coffee liqueur"}]},{name:"White Russian",tag:"Vodka",method:"Gentlemen's",glass:"Short",ingredients:[{measure:"1.5 oz",ingredient:"Vodka"},{measure:"0.5 oz",ingredient:"Coffee liqueur"},{measure:"1.0 oz",ingredient:"Cream"}]},{name:"Paralyzer",tag:"Vodka",method:"Build on ice",glass:"Tall",ingredients:[{measure:"1.5 oz",ingredient:"Vodka"},{measure:"0.5 oz",ingredient:"Coffee liqueur"},{ingredient:"Coke"},{measure:"1.0 oz",ingredient:"Cream"}]},{name:"Crantini",tag:"Vodka",method:"Shake & Strain",glass:"Martini",ingredients:[{measure:"1.5 oz",ingredient:"Vodka"},{measure:"0.5 oz",ingredient:"Triple sec"},{measure:"1.0 oz",ingredient:"Cranberry juice"}]},{name:"Purple Haze",tag:"Vodka",method:"Shake & Strain",glass:"Martini",ingredients:[{measure:"1.5 oz",ingredient:"Vodka"},{measure:"0.5 oz",ingredient:"Blue Curacao"},{measure:"1.0 oz",ingredient:"Cranberry juice"}]},{name:"Cosmopolitan",tag:"Vodka",method:"Shake & Strain",glass:"Martini",ingredients:[{measure:"1.5 oz",ingredient:"Vodka"},{measure:"0.5 oz",ingredient:"Triple sec"},{measure:"0.5 oz",ingredient:"Cranberry juice"},{measure:"0.5 oz",ingredient:"Lime juice"}]},{name:"Lemon Drop",tag:"Vodka",method:"Shake & Strain, Sugar Rim",glass:"Martini",ingredients:[{measure:"1.5 oz",ingredient:"Vodka"},{measure:"0.5 oz",ingredient:"Triple sec"},{measure:"1.0 oz",ingredient:"Lemon juice"}]},{name:"Peachtini",tag:"Vodka",method:"Shake & Strain",glass:"Martini",ingredients:[{measure:"1.5 oz",ingredient:"Vodka"},{measure:"0.5 oz",ingredient:"Peach Schnapps"},{measure:"1.0 oz",ingredient:"Orange juice"}]},{name:"Negrovski",tag:"Vodka",method:"Gentlemen's",glass:"Short",ingredients:[{measure:"2/3 oz",ingredient:"Vodka"},{measure:"2/3 oz",ingredient:"Campari"},{measure:"2/3 oz",ingredient:"Sweet Vermouth"}]}],H=[{name:"Tom Collins",tag:"Gin",method:"Build on ice",glass:"Tall",ingredients:[{measure:"2.0 oz",ingredient:"Gin"},{measure:"1.0 oz",ingredient:"Lemon Juice"},{measure:"0.5 oz",ingredient:"Simple Syrup"},{ingredient:"Soda water"}]},{name:"French 75",tag:"Gin",method:"Shake & Strain",glass:"Champagne flute",ingredients:[{measure:"1.0 oz",ingredient:"Gin"},{measure:"1.0 oz",ingredient:"Lemon Juice"},{measure:"0.5 oz",ingredient:"Simple Syrup"},{ingredient:"Sparkling wine"}]},{name:"Gin Smash",tag:"Gin",method:"Build on ice",glass:"Tall",ingredients:[{measure:"3",ingredient:"Lemon wedges"},{measure:"4-6",ingredient:"Mint leaves"},{measure:"0.5 oz",ingredient:"Simple Syrup"},{measure:"2.0 oz",ingredient:"Gin"},{ingredient:"Soda water"}]},{name:"Negroni",tag:"Gin",method:"Gentlemen's",glass:"Short",note:"Vodka version: Negrovski",ingredients:[{measure:"2/3 oz",ingredient:"Gin"},{measure:"2/3 oz",ingredient:"Campari"},{measure:"2/3 oz",ingredient:"Sweet Vermouth"}]},{name:"Americano",tag:"Gin's trans",method:"Build on ice",glass:"Short",ingredients:[{measure:"0.5 oz",ingredient:"Campari"},{measure:"0.5 oz",ingredient:"Sweet Vermouth"},{ingredient:"Soda water"}]},{name:"Gimlet",tag:"Gin",method:"Shake & Strain",glass:"Martini",note:"Need review",ingredients:[{measure:"2.0 oz",ingredient:"Gin"},{measure:"1 oz",ingredient:"Lime juice"},{measure:"0.5 oz",ingredient:"Simple Syrup"}]},{name:"White Lady",tag:"Gin",method:"Shake & Strain",glass:"Martini",note:"Gimlet: change Triple Sec to simple syrup, lemono to lime",ingredients:[{measure:"1.5 oz",ingredient:"Gin"},{measure:"0.5 oz",ingredient:"Triple Sec"},{measure:"1 oz",ingredient:"Lemon juice"}]},{name:"Wet Martini",tag:"Gin/Vodka",method:"Stir & Strain",glass:"Martini",note:"Olive/Lemon twist",ingredients:[{measure:"1.5 oz",ingredient:"Gin/Vodka"},{measure:"0.5 oz",ingredient:"Dry Vermouth"}]},{name:"Dry Martini",tag:"Gin/Vodka",method:"Stir & Strain",glass:"Martini",note:"Dirty -  1 spoonful olive brine",ingredients:[{measure:"1.75 oz",ingredient:"Gin/Vodka"},{measure:"0.25 oz",ingredient:"Dry Vermouth"}]},{name:"Extra Dry Martini",tag:"Gin/Vodka",method:"Stir & Strain",glass:"Martini",note:"Roll the dry vermouth",ingredients:[{measure:"2.0 oz",ingredient:"Gin/Vodka"},{measure:"5 drops",ingredient:"Dry Vermouth"}]}],U=[{name:"Cuba Libre",tag:"Rum",method:"Build on ice",glass:"Short",ingredients:[{measure:"1.0 oz",ingredient:"White Rum"},{ingredient:"Coke"}]},{name:"Dark & Stormy",tag:"Rum",method:"Build on ice",glass:"Tall",note:"Gosling's Rum",ingredients:[{ingredient:"Ginger beer"},{measure:"2.0 oz",ingredient:"Dark Rum"}]},{name:"Daiquiri",tag:"Rum",method:"Shake & Strain",glass:"Martini",note:"Rum version Gimlet",ingredients:[{measure:"2.0 oz",ingredient:"White Rum"},{measure:"1.0 oz",ingredient:"Lime juice"},{measure:"0.5 oz",ingredient:"Simple Syrup"}]},{name:"Mojito",tag:"Rum",method:"Build on ice",glass:"Tall",ingredients:[{measure:"3",ingredient:"Fresh lime wedges"},{measure:"4-6",ingredient:"Mint leaves"},{measure:"0.5 oz",ingredient:"Simple Syrup"},{measure:"2.0 oz",ingredient:"White Rum"},{ingredient:"Soda water"}]},{name:"Pina Colada",tag:"Rum",method:"Shake & Pour",glass:"Tall",ingredients:[{measure:"2.0 oz",ingredient:"White Rum"},{measure:"3.0 oz",ingredient:"Pineapple Juice"},{measure:"1.0 oz",ingredient:"Coconut Cream"}]},{name:"Chi-Chi",tag:"Vodaka",method:"Shake & Pour",glass:"Tall",note:"Pina colada Vodaka version",ingredients:[{measure:"2.0 oz",ingredient:"Vodka"},{measure:"3.0 oz",ingredient:"Pineapple Juice"},{measure:"1.0 oz",ingredient:"Coconut Cream"}]},{name:"Blue Hawaiian",tag:"Rum",method:"Shake & Pour",glass:"Tall",ingredients:[{measure:"1.5 oz",ingredient:"White rum"},{measure:"0.5 oz",ingredient:"Blue Curacao"},{measure:"3.0 oz",ingredient:"Pineapple juice"},{measure:"1.0 oz",ingredient:"Coconut crea"}]},{name:"Easy Mai Tai",tag:"Rum",method:"Shake & Pour",glass:"Double",note:"Difficult",ingredients:[{measure:"1.0 oz",ingredient:"Dark rum"},{measure:"0.5 oz",ingredient:"Amaretto"},{measure:"0.5 oz",ingredient:"Triple sec"},{measure:"1.0 oz",ingredient:"Lime juice"}]}],Q=[{name:"Tequila Sunrise",tag:"Tequila",method:"Build on ice",glass:"Tall",ingredients:[{measure:"2.0 oz",ingredient:"Tequila"},{measure:"0.5 oz",ingredient:"Granedine"},{ingredient:"Orange juice"}]},{name:"Poloma",tag:"Tequila",method:"Build on ice",glass:"Tall",note:"Dont forget simple syrup",ingredients:[{measure:"2.0 oz",ingredient:"Tequila"},{measure:"1.0 oz",ingredient:"Grapefruit juice"},{measure:"0.5 oz",ingredient:"Simple Syrup"},{ingredient:"Soda water"}]},{name:"Tequila Wallbanger",tag:"Tequila",method:"Build on ice",glass:"Short",ingredients:[{measure:"3/4 oz",ingredient:"Tequila"},{ingredient:"Orange juice"},{measure:"1/4 oz",ingredient:"Galliano"}]},{name:"Bloody Maria",tag:"Tequila",method:"Build on ice, Salted rim",glass:"Tall",ingredients:[{measure:"2 oz",ingredient:"Tequila"},{measure:"4 dash",ingredient:"Tabascoo sauce"},{measure:"4 dash",ingredient:"Worcestershire"},{ingredient:"Tomato juice"}]},{name:"Brave Bull",tag:"Tequila",method:"Gentlemen's",glass:"Short",ingredients:[{measure:"1.5 oz",ingredient:"Tequila"},{measure:"0.5 oz",ingredient:" Coffee liqueur"}]},{name:"Tequila Paralyzer",tag:"Tequila",method:"Build on ice",glass:"Tall",ingredients:[{measure:"1.5 oz",ingredient:"Tequila"},{measure:"0.5 oz",ingredient:"Coffee Liqueur"},{ingredient:"Coke"},{measure:"1.0 oz",ingredient:"Cream"}]},{name:"Matador",tag:"Tequila",method:"Shake & Strain",glass:"Martini",ingredients:[{measure:"2 oz",ingredient:"Tequila"},{measure:"1 oz",ingredient:"Pineapple juice"},{measure:"1/4 oz",ingredient:"Lime juice"}]},{name:"Margarita",tag:"Tequila",method:"Shake & Pour, Salted rim",glass:"Double Rocks",ingredients:[{measure:"1.5 oz",ingredient:"Tequila"},{measure:"0.5 oz",ingredient:"Triple sec"},{measure:"1.0 oz",ingredient:"Lime juice"}]},{name:"Blue Margarita",tag:"Tequila",method:"Shake & Pour",glass:"Double rocks",ingredients:[{measure:"1.5 oz",ingredient:"Tequila"},{measure:"0.5 oz",ingredient:"Blue Curacao"},{measure:"1.0 oz",ingredient:"Lime juice"}]},{name:"Golden Margarita",tag:"Tequila",method:"Shake & Pour",glass:"Double rocks",ingredients:[{measure:"1.5 oz",ingredient:"Tequila"},{measure:"0.5 oz",ingredient:"Grand Marnier"},{measure:"1.0 oz",ingredient:"Lime juice"}]},{name:"Long Island Iced Tea",tag:"Vodka, Gin, Rum, Tequila",method:"Builld on ice",glass:"Tall",ingredients:[{measure:"0.5 oz",ingredient:"Vodka, Gin, Rum, Tequila"},{measure:"0.5 oz",ingredient:"Triple Sec"},{ingredient:"Coke"},{measure:"1.0 oz",ingredient:"Lemon juice"}]},{name:"Electric Iced Tea",tag:"Vodka, Gin, Rum, Tequila",method:"Builld on ice",glass:"Tall",ingredients:[{measure:"0.5 oz",ingredient:"Vodka, Gin, Rum, Tequila"},{measure:"0.5 oz",ingredient:"Blue Curacao"},{ingredient:"7-Up"},{measure:"1.0 oz",ingredient:"Lemon juice"}]}],K=[{name:"Michael Collins",tag:"Irish Whiskey",method:"Build on ince",glass:"Tall",ingredients:[{measure:"2.0 oz",ingredient:"Irish Whiskey"},{measure:"1.0 oz",ingredient:"Lemon juice"},{measure:"0.5 oz",ingredient:"Simple Syrup"},{ingredient:"Soda Water"}]},{name:"Lynchburg Lemonade",tag:"Jack Daniels",method:"Build on ice",glass:"Tall",ingredients:[{measure:"1.5 oz",ingredient:"Jack Daniels"},{measure:"0.5 oz",ingredient:"Triple Sec"},{measure:"1.0 oz",ingredient:"Lemon juice"},{ingredient:"7-UP"}]},{name:"Whiskey Sour",tag:"Whiskey",method:"Wet & Dry Shake",glass:"Short",ingredients:[{measure:"2.0 oz",ingredient:"Whiskey"},{measure:"1.0 oz",ingredient:"Lemon juice"},{measure:"0.5 oz",ingredient:"Simple syrup"},{measure:"3/4 oz",ingredient:"Egg White"},{ingredient:"bitters"}]},{name:"Manhattan",tag:"Rye",method:"Stir & Strain",glass:"Martini",note:"Perfect Manhgattan => 0.25oz sweet/dry vermouth",ingredients:[{measure:"1.5 oz",ingredient:"Whiskey"},{measure:"0.5 oz",ingredient:"Sweet Vermouth"},{measure:"4 dashes",ingredient:"Bitters"}]},{name:"Rob Roy",tag:"Scotch",method:"Stir & Strain",glass:"Martini",ingredients:[{measure:"1.5 oz",ingredient:"Scotch"},{measure:"0.5 oz",ingredient:"Sweet vermouth"},{measure:"4 dash",ingredient:"Bitters"}]},{name:"Emerald",tag:"Irish Whiskey",method:"Stir & Strain",glass:"Martini",ingredients:[{measure:"1.5 oz",ingredient:"Irish Whiskey"},{measure:"0.5 oz",ingredient:"Sweet vermouth"},{measure:"4 dash",ingredient:"Bitters"}]},{name:"Godfather",tag:"Scotch",method:"Gentlemen's",glass:"Short",ingredients:[{measure:"1.5 oz Scotch",ingredient:"Scotch"},{measure:"0.5 oz",ingredient:"Amaretto"}]},{name:"Godmother",tag:"Vodka",method:"Gentlemen's",glass:"Short",note:"+ 1oz cream to be Godchild",ingredients:[{measure:"1.5 oz Vodka",ingredient:"Vodka"},{measure:"0.5 oz",ingredient:"Amaretto"}]},{name:"Rusty Nail",tag:"Scotch",method:"Gentlemen's",glass:"Short",ingredients:[{measure:"1.5 oz",ingredient:"Scotch"},{measure:"0.5 oz",ingredient:"Drambuie (\u8702\u871c\u9152)"}]},{name:"Boulevardier",tag:"Bourbon",method:"Gentlemen's",glass:"Short",ingredients:[{measure:"2/3 oz",ingredient:"Burbon"},{measure:"2/3 oz",ingredient:"Campari"},{measure:"2/3 oz",ingredient:"Sweet Vermouth"}]},{name:"Old Fashioned",tag:"Bourbon",method:"Muddle",glass:"Short / Double",ingredients:[{measure:"1",ingredient:"Raw Sugar"},{ingredient:"Bitters"},{measure:"dash of",ingredient:"Water"},{measure:"2.0 oz",ingredient:"Bourbon"}]}],Z=[{name:"Sangria",tag:"Brandy",method:"Build on ice",glass:"Wine glass",ingredients:[{measure:"3.0 oz",ingredient:"Wine"},{measure:"0.5 oz",ingredient:"Brandy"},{measure:"0.5 oz",ingredient:"Triple sec"},{measure:"1.0 oz",ingredient:"7-Up"},{measure:"1.0 oz",ingredient:"Orange juice"}]},{name:"Mimosa",tag:"Sparkling wine",method:"Build",glass:"Champagne flute",ingredients:[{measure:"Half",ingredient:"Sparkling wine"},{measure:"Half",ingredient:"Orange juice"}]},{name:"Sidecar",tag:"Brandy",method:"Shake & Strain, sugar rim",glass:"Martini",ingredients:[{measure:"1.5 oz",ingredient:"Brandy"},{measure:"0.5 oz",ingredient:"Triple sec"},{measure:"1.0 oz",ingredient:"Lemon juice"}]},{name:"Sidecar No.Blue",tag:"Brandy",method:"Shake & Strain, sugar rim",glass:"Martini",ingredients:[{measure:"1.5 oz",ingredient:"Brandy"},{measure:"0.5 oz",ingredient:"Blue Curacao"},{measure:"1.0 oz",ingredient:"Lemon juice"}]},{name:"Brandy Alexandar",tag:"Brandy",method:"Shake & Strain",glass:"Martini",note:"Alexandar => Gin",ingredients:[{measure:"1.0 oz",ingredient:"Brandy"},{measure:"1.0 oz",ingredient:"Cacao"},{measure:"1.0 oz",ingredient:"Cream"}]},{name:"French Connection",tag:"Cognac",method:"Gentlemen's",glass:"Short",ingredients:[{measure:"1.0 oz",ingredient:"Cognac"},{measure:"1.0 oz",ingredient:"Amaretto"}]},{name:"Brandy Seperator/ Dirty Mother",tag:"Brandy",method:"Gentlemen's",glass:"Short",note:"Add 1.0 oz cream => Dirty White Mother",ingredients:[{measure:"1.5 oz",ingredient:"Brandy"},{measure:"0.5 oz",ingredient:"Coffee liqueur"}]}],X=i(4),Y=function(e){var n=e.drinkSet,i=Object(a.useState)(w.a.shuffle(n).slice(0,4)),r=Object(m.a)(i,2),o=r[0],s=r[1],d=Object(a.useState)(!1),l=Object(m.a)(d,2),g=l[0],u=l[1];return t.a.createElement("div",null,t.a.createElement(D,{logo:"QUIZ"}),o.map(function(e){return t.a.createElement("div",{style:{paddingLeft:"45%",paddingTop:"30px",fontWeight:"bold",fontSize:"20px"}},e.name)}),t.a.createElement("div",{style:{paddingLeft:"45%",paddingTop:"30px",fontWeight:"bold",fontSize:"20px"}},t.a.createElement(T.a,{onClick:function(){s(w.a.shuffle(n).slice(0,4)),window.location.reload()}},"Shuffled")),t.a.createElement("div",{style:{paddingLeft:"45%",paddingTop:"30px",fontWeight:"bold",fontSize:"20px"}},t.a.createElement(T.a,{onClick:function(){return u(!g)}},"Answers")),g&&t.a.createElement(P,{drinkSet:o,header:"",isAnswer:!0}),t.a.createElement("div",{style:{paddingLeft:"20%"}},o.map(function(e){return t.a.createElement(B.a,{label:e.name,color:"secondary",style:{padding:"10px"}})})),t.a.createElement("div",{style:{paddingLeft:"20%",paddingTop:"10px"}},o.map(function(e){return t.a.createElement(B.a,{style:{padding:"10px",maxWidth:"195px"},label:"method",multiline:!0,rows:2})})),t.a.createElement("div",{style:{paddingLeft:"20%",paddingTop:"10px"}},o.map(function(e){return t.a.createElement(B.a,{style:{padding:"10px",maxWidth:"195px"},label:"ingredient",multiline:!0,rows:4})})))};var $=function(){var e=[].concat(Object(d.a)(J),Object(d.a)(N),Object(d.a)(I),Object(d.a)(H),Object(d.a)(U),Object(d.a)(Q),Object(d.a)(K),Object(d.a)(Z));return t.a.createElement(t.a.Fragment,null,t.a.createElement(X.c,null,t.a.createElement(X.a,{path:"/",element:t.a.createElement(P,{drinkSet:e,header:"ALL",isAnswer:!1})}),t.a.createElement(X.a,{path:"/All",element:t.a.createElement(P,{drinkSet:e,header:"ALL",isAnswer:!1})}),t.a.createElement(X.a,{path:"/non-alcoholic",element:t.a.createElement(P,{drinkSet:J,header:"NON-ALCOHOLIC",isAnswer:!1})}),t.a.createElement(X.a,{path:"/vodka",element:t.a.createElement(P,{drinkSet:N,header:"VODKA",isAnswer:!1})}),t.a.createElement(X.a,{path:"/liqueur",element:t.a.createElement(P,{drinkSet:I,header:"LIQUEUR",isAnswer:!1})}),t.a.createElement(X.a,{path:"/gin",element:t.a.createElement(P,{drinkSet:H,header:"GIN",isAnswer:!1})}),t.a.createElement(X.a,{path:"/collins",element:t.a.createElement(P,{drinkSet:F,header:"Collins test",isAnswer:!1})}),t.a.createElement(X.a,{path:"/rum",element:t.a.createElement(P,{drinkSet:U,header:"Rum",isAnswer:!1})}),t.a.createElement(X.a,{path:"/tequila",element:t.a.createElement(P,{drinkSet:Q,header:"Tequila",isAnswer:!1})}),t.a.createElement(X.a,{path:"/whiskey",element:t.a.createElement(P,{drinkSet:K,header:"Whiskey",isAnswer:!1})}),t.a.createElement(X.a,{path:"/brandy",element:t.a.createElement(P,{drinkSet:Z,header:"Brandy",isAnswer:!1})}),t.a.createElement(X.a,{path:"/quiz",element:t.a.createElement(Y,{drinkSet:e})})))},_=function(e){e&&e instanceof Function&&i.e(1).then(i.bind(null,181)).then(function(n){var i=n.getCLS,a=n.getFID,t=n.getFCP,r=n.getLCP,o=n.getTTFB;i(e),a(e),t(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(s.a,{basename:"/"},t.a.createElement($,null)))),_()},92:function(e,n,i){e.exports=i(120)}},[[92,3,2]]]);
//# sourceMappingURL=main.a8cea9e5.chunk.js.map
(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(31),s=n.n(o),i=(n(40),n(11)),c=n.n(i),l=n(12),u=n(4),d=n(8),h=n(6),m=n(5),p=(n(42),n(43),n(66)),f=n(67),v=n(19),b=n.n(v),g=n(0),j=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleDetails=function(){!0===e.state.showDetails?e.setState({showDetails:!1}):e.setState({showDetails:!0})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=b()(t.start.dateTime).format("MMMM Do YYYY, h:mm a");return Object(g.jsx)(p.a,{className:"event-card",children:Object(g.jsxs)(p.a.Body,{children:[Object(g.jsxs)(p.a.Title,{className:"summary",children:[Object(g.jsx)("b",{children:"Event: "}),t.summary]}),Object(g.jsxs)(p.a.Subtitle,{className:"location",children:[Object(g.jsxs)("p",{children:[Object(g.jsx)("b",{children:"Location: "}),t.location]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("b",{children:"When: "}),"".concat(n)]})]}),this.state.showDetails&&Object(g.jsxs)(p.a.Text,{className:"card-text",children:[Object(g.jsx)("p",{children:Object(g.jsx)("b",{children:"About the Event: "})}),Object(g.jsxs)("p",{className:"event-description",children:[Object(g.jsx)("b",{children:Object(g.jsx)("i",{children:"Description: "})})," ",t.description]}),Object(g.jsxs)("p",{className:"organizerEmail",children:[Object(g.jsx)("b",{children:Object(g.jsx)("i",{children:"Organizer Email: "})}),t.organizer.email]}),Object(g.jsxs)("p",{className:"status",children:[Object(g.jsx)("b",{children:Object(g.jsx)("i",{children:"Event Status: "})}),t.status]})]}),Object(g.jsx)("div",{className:"event-button",children:Object(g.jsx)(f.a,{className:"details-btn",variant:"dark",onClick:function(){return e.handleDetails()},children:this.state.showDetails?"Hide Details":"Show Details"})})]})})}}]),n}(a.Component),w=j,y=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(g.jsx)("ul",{className:"EventList-grid",children:e.map((function(e){return Object(g.jsx)("li",{children:Object(g.jsx)(w,{event:e})},e.id)}))})}}]),n}(a.Component),O=y,x=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,display:"block",fontWeight:"600",lineHeight:"25px",top:"200px",left:"10px"}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"Alert",children:Object(g.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),k=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(x),T=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(x),S=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,showSuggestions:!0,suggestions:a,infoText:""});e.setState({query:n,infoText:"We cannot find the city you are looking for. Please try another city",showSuggestions:!1})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"CitySearch",children:[Object(g.jsx)(k,{text:this.state.infoText}),Object(g.jsx)("p",{className:"city-search-text",children:"Search for a City:"}),Object(g.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(g.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(g.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(g.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(g.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),Z=S,E=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"NumberOfEvents",children:[Object(g.jsx)("p",{children:"Number of Events"}),Object(g.jsx)("input",{type:"number",min:"1",max:"100",id:"num-events",className:"num-events",value:this.props.numberOfEvents,onChange:function(t){return e.props.updateNumberOfEvents(t)}}),Object(g.jsx)(T,{text:this.props.errorText})]})}}]),n}(a.Component),N=E,M=n(65),W=n.p+"static/media/meet_logo.9e0d4ea5.png";var D=function(e){return Object(g.jsx)("header",{className:"header",children:Object(g.jsx)(M.a,{children:Object(g.jsx)("img",{src:W,className:"meet-logo",alt:"meet-logo"})})})},C=n.p+"static/media/welcome_logo.d4524a00.png",J=n(34),A=n(21),B=n.n(A),L=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200522T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-22T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200523T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-23T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-23T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-23T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],q=n(14),I=n.n(q),R=function(e){var t=e.map((function(e){return e.location}));return Object(J.a)(new Set(t))},U=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,H(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,B.a.get("https://ytd9osr13i.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&z(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return console.log(e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://ytd9osr13i.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return console.log(e)}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},F=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return I.a.done(),e.abrupt("return",L);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),I.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,U();case 11:if(!(n=e.sent)){e.next=21;break}return Y(),a="https://ytd9osr13i.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+n,e.next=17,B.a.get(a);case 17:return(r=e.sent).data&&(o=R(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),I.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,currentLocation:"all"},e.updateEvents=function(t,n){F().then((function(n){var a=("all"===t?n:n.filter((function(e){return e.location===t}))).slice(0,e.state.numberOfEvents);e.mounted&&e.setState({events:a,currentLocation:t})}))},e.updateNumberOfEvents=function(){var t=Object(l.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((a=n.target.value?parseInt(n.target.value):32)<1||a>32)){t.next=6;break}return t.next=4,e.setState({errorText:"Please choose a number between 1 and 32",numberOfEvents:a});case 4:t.next=9;break;case 6:return t.next=8,e.setState({errorText:"",numberOfEvents:a});case 8:e.updateEvents(e.state.currentLocation,e.state.numberOfEvents);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,F().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.numberOfEvents),locations:R(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(D,{}),Object(g.jsx)("div",{className:"welcome-message",children:Object(g.jsx)("img",{src:C,className:"welcome-logo responsive",alt:"welcome-message"})}),Object(g.jsxs)("div",{className:"search-numEvents",children:[Object(g.jsx)(N,{numberOfEvents:this.state.numberOfEvents,updateNumberOfEvents:this.updateNumberOfEvents,errorText:this.state.errorText}),Object(g.jsx)(Z,{locations:this.state.locations,updateEvents:this.updateEvents})]}),Object(g.jsx)(O,{events:this.state.events})]})}}]),n}(a.Component),G=_,V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(33).config("f8c20f48c7b543b9ae249162174662ad").install(),s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(G,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Meet","/service-worker.js");V?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):X(t,e)}))}}(),P()}},[[64,1,2]]]);
//# sourceMappingURL=main.28b7e8f1.chunk.js.map
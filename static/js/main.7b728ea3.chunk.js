(this.webpackJsonpstart=this.webpackJsonpstart||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(20),s=n.n(c),i=(n(26),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),s(t),i(t)}))}),o=n(7),r=n(14),l=n(9),u=n(10),h=n(12),j=n(11),b=(n(27),n(1)),d=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:"Home"})})},x=n(2),m=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:"About"})})},O=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={fontSize:16,inputData:0,result:0},a.calculateResult=function(){console.log("hello"),a.setState({result:a.state.inputData/a.state.fontSize})},a.handleInputDataChange=function(t){a.setState({inputData:t.target.value},(function(){a.calculateResult()}))},a.handleFontSizeChange=function(t){a.setState({fontSize:t.target.value})},console.log("Start RemCalculator"),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"shouldComponentUpdate",value:function(t,e){return!0}},{key:"componentDidUpdate",value:function(t,e){}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"RemCalculator Content",children:[Object(b.jsx)("h1",{children:this.props.title}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"fontSize",children:"Font Size"}),Object(b.jsx)("input",{type:"number",id:"fontSize",value:this.state.fontSize,onChange:this.handleFontSizeChange})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"insertedNumber",children:"Size(px)"}),Object(b.jsx)("input",{type:"number",id:"insertedNumber",value:this.state.inputData,onChange:this.handleInputDataChange})]}),Object(b.jsxs)("div",{children:[this.state.result," rem"]}),Object(b.jsx)("button",{onClick:this.calculateResult,children:"Calculate"})]})}}]),n}(a.Component);O.defaultProps={title:"Rem Calculator"};var p=O,v=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={inputText:"",outputText:"",variableName:"returnHtml"},a.convert=function(t){var e=t.split(/\r?\n/),n=[];return e.forEach((function(t){n.push(a.state.variableName+" += '"+t+"';")})),n.join("\n")},a.handleClickConvertButton=function(){a.setState({outputText:a.convert(a.state.inputText)})},a.handleChangeInputText=function(t){a.setState({inputText:t.target.value})},console.log("Start TemplateConverter"),a}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"\ud15c\ud50c\ub9bf \ucee8\ubc84\ud130"}),Object(b.jsx)("textarea",{cols:"30",rows:"10",value:this.state.inputText,onChange:this.handleChangeInputText}),Object(b.jsx)("button",{onClick:this.handleClickConvertButton,children:"\ubcc0\ud658"}),Object(b.jsx)("textarea",{cols:"30",rows:"10",value:this.state.outputText,readOnly:!0})]})}}]),n}(a.Component),f=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={menuList:{home:!0,showRemCalculator:!1}},t.showMenu=function(e){var n=t.state.menuList;switch(Object.keys(n).forEach((function(t){n[t]=!1})),t.setState({menuList:n}),e){case"remCalculator":t.setState({menuList:Object(r.a)(Object(r.a)({},t.state.menuList),{},{showRemCalculator:!0})});break;default:t.setState({menuList:Object(r.a)(Object(r.a)({},t.state.menuList),{},{home:!0})})}},t.showHome=function(){t.showMenu("home")},t.showRemCalculator=function(){t.showMenu("remCalculator")},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)("header",{className:"app-header",children:"Welcome"}),Object(b.jsxs)("ul",{className:"nav",children:[Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{exact:!0,to:"/",activeClassName:"active",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{exact:!0,to:"/about",activeClassName:"active",children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{exact:!0,to:"/rem",activeClassName:"active",children:"rem \uacc4\uc0b0\uae30"})}),Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{exact:!0,to:"/converter",activeClassName:"active",children:"\ud15c\ud50c\ub9bf \ubcc0\ud658\uae30"})})]}),Object(b.jsx)(x.a,{exact:!0,path:"/",component:d}),Object(b.jsx)(x.a,{exact:!0,path:"/about",component:m}),Object(b.jsx)(x.a,{exact:!0,path:"/rem",component:p}),Object(b.jsx)(x.a,{exact:!0,path:"/converter",component:v})]})}}]),n}(a.Component),C=function(){return Object(b.jsx)(o.a,{children:Object(b.jsx)(f,{})})};s.a.render(Object(b.jsx)(C,{}),document.querySelector("#root")),i()}},[[34,1,2]]]);
//# sourceMappingURL=main.7b728ea3.chunk.js.map
(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,a){e.exports=a(24)},18:function(e,t,a){},19:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(10),s=a.n(i),l=(a(18),a(7)),c=a(12),d=a(2),r=a(3),u=a(5),h=a(4),m=a(1),p=a(6),b=(a(19),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={isEditing:!1,task:a.props.title},a.handleClick=a.handleClick.bind(Object(m.a)(a)),a.toggleForm=a.toggleForm.bind(Object(m.a)(a)),a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleUpdate=a.handleUpdate.bind(Object(m.a)(a)),a.handleToggle=a.handleToggle.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){this.props.removeTodo(this.props.id)}},{key:"toggleForm",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleChange",value:function(e){this.setState({task:e.target.value})}},{key:"handleUpdate",value:function(e){e.preventDefault(),this.props.updateTodo(this.props.id,this.state.task),this.setState({isEditing:!1})}},{key:"handleToggle",value:function(e){this.props.toggleTodo(this.props.id)}},{key:"render",value:function(e){return this.state.isEditing?o.a.createElement("div",{className:"Todo"},o.a.createElement("form",{className:"Todo-edit-form",onSubmit:this.handleUpdate},o.a.createElement("input",{type:"text",value:this.state.task,name:"task",onChange:this.handleChange}),o.a.createElement("button",null,"Save"))):o.a.createElement("div",{className:"Todo"},o.a.createElement("li",{className:this.props.completed?"Todo-task completed":"Todo-task",onClick:this.handleToggle},this.props.title),o.a.createElement("div",{className:"Todo-buttons"},o.a.createElement("button",{onClick:this.toggleForm},o.a.createElement("i",{class:"fas fa-pen"})),o.a.createElement("button",{onClick:this.handleClick},o.a.createElement("i",{class:"fas fa-trash"}))))}}]),t}(n.Component)),g=a(8),f=a(11),v=a.n(f),k=(a(22),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={task:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.createTodo(Object(l.a)({},this.state,{id:v()(),completed:!1})),this.setState({task:""})}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit,className:"NewTodoForm"},o.a.createElement("input",{onChange:this.handleChange,placeholder:"New Task",value:this.state.task,type:"text",name:"task"}),o.a.createElement("button",null,"Create Todo"))}}]),t}(n.Component)),j=(a(23),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={todos:[]},a.create=a.create.bind(Object(m.a)(a)),a.remove=a.remove.bind(Object(m.a)(a)),a.update=a.update.bind(Object(m.a)(a)),a.toggleCompletion=a.toggleCompletion.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"create",value:function(e){this.setState({todos:[].concat(Object(c.a)(this.state.todos),[e])})}},{key:"remove",value:function(e){this.setState({todos:this.state.todos.filter((function(t){return t.id!==e}))})}},{key:"update",value:function(e,t){var a=this.state.todos.map((function(a){return a.id===e?Object(l.a)({},a,{task:t}):a}));this.setState({todos:a})}},{key:"toggleCompletion",value:function(e){var t=this.state.todos.map((function(t){return t.id===e?Object(l.a)({},t,{completed:!t.completed}):t}));this.setState({todos:t})}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return o.a.createElement(b,{title:t.task,key:t.id,id:t.id,completed:t.completed,removeTodo:e.remove,updateTodo:e.update,toggleTodo:e.toggleCompletion})}));return o.a.createElement("div",{className:"TodoList"},o.a.createElement("h1",null,"Todo List ",o.a.createElement("span",null,"A Simple React Todo App")),o.a.createElement("ul",null,t),o.a.createElement(k,{createTodo:this.create}))}}]),t}(n.Component));var O=function(){return o.a.createElement("div",null,o.a.createElement(j,null))};s.a.render(o.a.createElement(O,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.1997dece.chunk.js.map
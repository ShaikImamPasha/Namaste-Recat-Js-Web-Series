//const heading=React.createElement("h1",{id:"heading"},"hloo world using react js!!!");
//nested 
const parent=React.createElement("div",{},   //react is object and createElement is method
  //paraent is object
React.createElement("div",{id:"child_1"},
[React.createElement("div",{},[
React.createElement("div",{},
React.createElement("h4",{},"under child_1")),
React.createElement("div",{},"")]),
React.createElement("h2",{},"this is h2 tag")
]),
React.createElement("div",{id:"chils_2"},
[React.createElement("h1",{},"this is h1 tag"),
React.createElement("h2",{},"this is h2 tag")]
)
);
//jsx

const root=ReactDOM.createRoot(document.getElementById("root"));
//console.log(heading);
root.render(parent);
const { createContext } = require("react");
const UserContext=createContext({
    loggedIn: "Defauilt"
})
export default UserContext;
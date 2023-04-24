import { Context } from "./Context";

function ContextProvider({ children }: any) {
	return <Context.Provider value={{}}>{children}</Context.Provider>;
}

export default ContextProvider;

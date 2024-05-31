import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { FormCustomHook } from "./02-useEffect/FormCustomHook";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memo/Memorize";
import { MemoHook } from "./06-memo/MemoHook";
import { CallbackHook } from "./06-memo/CallbackHook";

ReactDOM.createRoot(document.getElementById("root")).render(
	<CallbackHook />
);

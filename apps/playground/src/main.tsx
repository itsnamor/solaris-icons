import { Optimized } from "$/optimized";
import { Original } from "$/original";
import "$/tailwindcss/_main.css";

import { createRoot } from "react-dom/client";

// Support URL query params for testing
const params = new URLSearchParams(window.location.search);
const view = params.get("view");

const component = view === "original" ? <Original /> : <Optimized />;

// biome-ignore lint/style/noNonNullAssertion: This is the main entry point
createRoot(document.getElementById("root")!).render(component);

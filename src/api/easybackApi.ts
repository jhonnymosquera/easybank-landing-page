import axios from "axios";

const origin = typeof window != "undefined" ? window.location.origin : "";

const easybackApi = axios.create({
	baseURL: `${origin || "http://localhost:3000"}/api/`,
});

export default easybackApi;

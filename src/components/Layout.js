import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Footer from "./Footer";
import Nav from "./Nav";

function Layout({ children }) {
	return (
		<>
			<GlobalStyles />
			<Nav />
			<p>Page stuff</p>
			{children}
			<Footer />
		</>
	);
}

export default Layout;

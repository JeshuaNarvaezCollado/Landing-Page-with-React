import React from "react";
import NavBar from "./nav.jsx";
import Card from "/workspace/Landing-Page-/src/js/component/cards.jsx";
import Jumbo from "/workspace/Landing-Page-/src/js/component/jumbo.jsx"
import Footer from "/workspace/Landing-Page-/src/js/component/footer.jsx"


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar />
			<div className="m-auto" style={{ "max-width": "" }}>
				<div>
					<Jumbo/>
				</div>
				<div className="row row-cols-1 row-cols-md-4 g-4">
					<div className="col">
						<Card image="" title="This is a title" text="Working" label="Awesome" />
					</div>
					<div className="col">
						<Card image="" title="This is a title" text="Working" label="Awesome" />
					</div>
					<div className="col">
						<Card image="" title="This is a title" text="Working" label="Awesome" />
					</div>
					<div className="col">
						<Card image="" title="This is a title" text="Working" label="Awesome" />
					</div>
				</div>
			</div>
			<div>
				<Footer />
			</div>

		</div>
	);
};

export default Home;
import React from "react";

//create your first component
const Jumbo = () => {
	return (
		<div className="container-fluid bg-light p-5 mt-4 mb-3 ms-0 me-0 " >
			<div className="row h-100">
				<h1 className="display-5 fw-bold">A Warm Welcome!</h1>
				<p className="text-start">Hey does this work correctly? OH awesome it does!</p>
			</div>
				<a href="#" className="btn btn-danger">Blue Btn? Nah reds better!</a>
		</div>

	);
};


export default Jumbo;
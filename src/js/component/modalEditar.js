import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext.js";

export const ModalEditar = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	const { actions } = useContext(Context);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body"></div>
					<form>
						<div className="form-group">
							<label>Full Name</label>
							<input
								type="text"
								value={fullName}
								onChange={e => setFullName(e.target.value)}
								className="form-control"
								placeholder="Full Name"
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input
								type="email"
								value={email}
								onChange={e => setEmail(e.target.value)}
								className="form-control"
								placeholder="Enter email"
							/>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input
								type="phone"
								value={phone}
								onChange={e => setPhone(e.target.value)}
								className="form-control"
								placeholder="Enter phone"
							/>
						</div>
						<div className="form-group">
							<label>Address</label>
							<input
								type="text"
								value={address}
								onChange={e => setAddress(e.target.value)}
								className="form-control"
								placeholder="Enter address"
							/>
						</div>
					</form>{" "}
					<div className="modal-footer">
						<button type="button" className="btn btn-primary">
							Oh no!
						</button>
						<button
							onClick={() => actions.editarContacto(fullName, email, phone, address, props.id)}
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal">
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
ModalEditar.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ModalEditar.defaultProps = {
	show: false,
	onClose: null
};

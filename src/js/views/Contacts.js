import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.js";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { ModalEditar } from "../component/modalEditar.js";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		id: undefined
	});

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.obtenerContactos();
	}, []);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contactos.map(item => (
							<ContactCard
								fullName={item.full_name}
								email={item.email}
								phone={item.phone}
								address={item.address}
								key={item.id}
								id={item.id}
								onDelete={() => setState({ showModal: true, id: item.id })}
								onEdit={() => setState({ showModal: true, id: item.id })}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} id={state.id} onClose={() => setState({ showModal: false })} />
			<ModalEditar show={state.showModal} id={state.id} onClose={() => setState({ showModal: false })} />
		</div>
	);
};

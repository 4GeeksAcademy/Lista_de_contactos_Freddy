const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			// aqui vamos a guardar todos los estados globales de nuestra app

			contactos: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			// son todas las funciones globales de nuestra app. por ejemplo: Agregar usuario.
			// actions es un objeto, por lo tanto hay que asignarle su propiedad y valor.

			agregarContacto: (name, email, phone, address) => {
				let datos = {
					full_name: name,
					email: email,
					agenda_slug: "freddy",
					address: address,
					phone: phone
				};
				// esta es la URL donde se va hacer el POST(Guardar),
				// con su respectiva configuración (metodo, tipo de dato y cuerpo)

				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(datos),
					headers: { "Content-Type": "application/json" }
				})
					// estas son las promesas (Convertir a .JSON), mostrar por consola
					// y mostrar si hubo errores

					.then(response => response.json())

					.then(data => console.log(data))

					.catch(error => console.log(error));
			},

			obtenerContactos: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/freddy")

				.then(response => response.json())

					.then(data => setStore({contactos:data}))

					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;

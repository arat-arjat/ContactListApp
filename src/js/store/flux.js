const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contactos: [
				{
					nombre: "patricio",
					apellido: "Barria"
				},
				{
					nombre: "pilar",
					apellido: "matinez"
				},
				{
					nombre: "Luis",
					apellido: "Martinez"
				}
			]
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			nuevoContacto: newItens => {
				console.log(newItens);
			}
		}
	};
};

export default getState;

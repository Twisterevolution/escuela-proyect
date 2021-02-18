<template>
	<v-container>
		<h1>ADMINISTRACION DE ROLES</h1>
		<v-btn color="success" @click="sendapp">dropapp</v-btn>
		<v-file-input
			class="mt-2"
			outlined
			dense
			label="SELECCIONA EL ARCHIVO A SUBIR"
			v-model="foto"
			filled
			prepend-icon="mdi-camera"
		></v-file-input>
        <v-text-field
            label="Nombre del Trabajador"
        ></v-text-field>
        <v-text-field
            label="Apellido Paterno del Trabajador"
        ></v-text-field>
        <v-text-field
            label="Apellido Materno del Trabajador"
        ></v-text-field>
	</v-container>
</template>

<script>
import axios from "axios";
export default {
	name: "admroles",
	data() {
		return {
			foto: [],
		};
	},
	methods: {
		sendapp: function() {
			const tok = "rOWhordwqtYAAAAAAAAAAY6uzEuyqVCUAm2LnjLqmSfXXdH9Sz9dtCLZdCb-98Qe";
            console.log(this.foto);
            let archName= this.foto.name
            let lastDot = archName.lastIndexOf('.')
            let ext =archName.substring(lastDot+1)
            let nombre ="juna"
            let fecha = "2021"
            let que = "contrato" 
			const uploadToExternalService = async function uploadToExternalService(token, content) {
				try {
					let res = await axios.post(
						`https://api-content.dropbox.com/2/files/upload`,
						content,
						{
							headers: {
								Authorization: "Bearer " + token,
								"Content-Type": "application/octet-stream",
                                "Dropbox-API-Arg":`{"path": "/Homework/math/${nombre}-${que}-${fecha}.${ext}","mode": "add","autorename": true,"mute": false,"strict_conflict": false}`,
							},
							//  body: content,
						},
					);
					if (res.status == 200) {
						// test for status you want, etc
						console.log(res.status);
					}
					if (res.status == 400) {
						console.log(res);
					}
					return res.data;
				} catch (err) {
					console.error(err);
				}
			};

			uploadToExternalService(tok, this.foto).then((res) => console.log(res));
		},
	},
};
</script>

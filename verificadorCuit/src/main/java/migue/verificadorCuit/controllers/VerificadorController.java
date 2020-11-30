package migue.verificadorCuit.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import migue.verificadorCuit.dto.CuitDto;

@RestController
@CrossOrigin(origins = "https://immense-garden-23426.herokuapp.com/", allowedHeaders="*")
@RequestMapping("cuit")
public class VerificadorController {

	
	@PostMapping("/")
	public ResponseEntity verificarCuit(@RequestBody CuitDto cuit) {
		try {
			Boolean respuesta = cuit.validarCuit(cuit.getCuit());
			if(respuesta) {
				return ResponseEntity.ok("El numero de cuit "+ cuit.getCuit() + " es correcto.");
			}
			else {
				return ResponseEntity.ok("El numero de cuit " + cuit.getCuit() + " es incorrecto.");
			}
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Hubo un problema: "+e);
		}
	}
}

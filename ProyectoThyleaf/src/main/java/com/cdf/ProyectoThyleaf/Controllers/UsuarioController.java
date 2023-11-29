package com.cdf.ProyectoThyleaf.Controllers;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")

public class UsuarioController {
    @GetMapping("")
    public String usuario(Model model){
        String saludo = "Hola como esta familia";
        model.addAttribute("saludo",saludo);
        return "index";
    }
}

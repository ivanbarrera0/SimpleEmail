package com.example.SimpleMail.controller;

import com.example.SimpleMail.entities.Email;
import com.example.SimpleMail.service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class Controller {

    private Service service;

    @Autowired
    public Controller(Service service) {
        this.service = service;
    }

    @PostMapping(path = "/retrievedEmail")
    public Email retrievedEmail(@RequestBody Email email) {
        return service.retrievedEmail(email);
    }
}

package com.example.SimpleMail.service;

import com.example.SimpleMail.entities.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

@org.springframework.stereotype.Service
public class Service {

    private JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String username;

    @Autowired
    public Service(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public Email retrievedEmail(Email email) {

        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setTo(email.getRecipient());
        simpleMailMessage.setSubject(email.getSubject());
        simpleMailMessage.setText(email.getMessage());
        simpleMailMessage.setFrom(username);
        javaMailSender.send(simpleMailMessage);

        System.out.println("Email sent successfully!");

        return email;
    }
}

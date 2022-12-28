package com.bolsadeideas.springboot.backend.apirest.models.services;


import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;


//import com.bolsadeideas.springboot.backend.apirest.utils.EmailSenderService;

@Component
public class EmailServiceImpl implements EmailService {
	
	private static final Log log = LogFactory.getLog(EmailServiceImpl.class);

	
    @Autowired
    private JavaMailSender emailSender;
    
   // private EmailSenderService emailService;

    @Override
    public void sendSimpleMessage(String to, String subject, String text) {
    	
    	SimpleMailMessage message = new SimpleMailMessage(); 
        message.setFrom("prueba.tfc.22@gmail.com");
        message.setTo(to); 
        message.setSubject(subject); 
        message.setText(text);
        emailSender.send(message);
    	log.info("done sending email");
        
    }

}
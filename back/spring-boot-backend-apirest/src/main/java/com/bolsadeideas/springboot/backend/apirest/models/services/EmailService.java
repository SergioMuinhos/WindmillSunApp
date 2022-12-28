package com.bolsadeideas.springboot.backend.apirest.models.services;

public interface EmailService {
	void sendSimpleMessage(String to, String subject, String text);
}

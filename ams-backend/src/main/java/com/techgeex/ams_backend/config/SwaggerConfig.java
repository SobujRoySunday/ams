package com.techgeex.ams_backend.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI amsOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("Academic Management System API")
                        .version("v1.0")
                        .description("API documentation for AMS backend.")
                        .contact(new Contact().name("TechGeex Team")
                                .email("sorbopriyo@gmail.com")));
    }
}

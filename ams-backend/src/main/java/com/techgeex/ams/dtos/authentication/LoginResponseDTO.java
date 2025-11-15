package com.techgeex.ams.dtos.authentication;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginResponseDTO {
    private String token;
    private long expiresIn;
}
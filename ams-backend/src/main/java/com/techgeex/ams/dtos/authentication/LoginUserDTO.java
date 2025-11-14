package com.techgeex.ams.dtos.authentication;

import lombok.Data;

@Data
public class LoginUserDTO {
    private String email;
    private String password;
}
package com.techgeex.ams.dtos.user;

import lombok.Data;

@Data
public class CreateAdminDTO {
    private String email;
    private String password;
    private String fullName;
}
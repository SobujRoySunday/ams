package com.techgeex.ams.dtos.user;

import lombok.Data;

@Data
public class CreateFacultyDTO {
    private String email;
    private String fullName;
    private String password;
    private String qualification;
    private String department;
}

package com.techgeex.ams.dtos.user;

import lombok.Data;

@Data
public class CreateStudentDTO {
    private String email;
    private String fullName;
    private String password;
    private String rollNumber;
    private String course;
    private String semester;
}

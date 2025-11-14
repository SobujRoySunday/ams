package com.techgeex.ams.models.user;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "students")
@Getter
@Setter
@SuperBuilder(toBuilder = true) // Inherits and extends the Employee builder
@NoArgsConstructor // Required by JPA specification
public class Student extends Profile {
    private String rollNumber;
    private String course;
    private String semester;
}

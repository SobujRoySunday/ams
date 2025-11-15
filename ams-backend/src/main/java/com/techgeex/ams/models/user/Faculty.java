package com.techgeex.ams.models.user;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "faculties")
@Getter
@Setter
@SuperBuilder(toBuilder = true) // Inherits and extends the Employee builder
@NoArgsConstructor // Required by JPA specification
public class Faculty extends Profile {
    private String department;
    private String qualification;
}

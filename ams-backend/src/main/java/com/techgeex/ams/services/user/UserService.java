package com.techgeex.ams.services.user;

import com.techgeex.ams.dtos.user.CreateAdminDTO;
import com.techgeex.ams.dtos.user.CreateFacultyDTO;
import com.techgeex.ams.dtos.user.CreateStudentDTO;
import com.techgeex.ams.models.authentication.Role;
import com.techgeex.ams.models.authentication.User;
import com.techgeex.ams.models.user.Faculty;
import com.techgeex.ams.models.user.Profile;
import com.techgeex.ams.models.user.Student;
import com.techgeex.ams.repositories.authentication.RoleRepository;
import com.techgeex.ams.repositories.authentication.UserRepository;
import com.techgeex.ams.repositories.user.ProfileRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final ProfileRepository profileRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${ADMIN_EMAIL}")
    private String adminEmail;

    @Value("${ADMIN_PASSWORD}")
    private String adminPassword;

    public UserService(PasswordEncoder passwordEncoder, RoleRepository roleRepository, ProfileRepository profileRepository, UserRepository userRepository) {
        this.passwordEncoder = passwordEncoder;
        this.roleRepository = roleRepository;
        this.profileRepository = profileRepository;
        this.userRepository = userRepository;
    }

    public List<User> allUsers() {
        return new ArrayList<>(userRepository.findAll());
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }

    @PostConstruct
    public void init() {
        // Initialized roles
        List<String> newRoles = List.of("ROLE_ADMIN", "ROLE_FACULTY", "ROLE_STUDENT");

        for (String roleName : newRoles) {
            roleRepository.findByName(roleName)
                    .or(() -> {
                        Role role = new Role();
                        role.setName(roleName);
                        return Optional.of(roleRepository.save(role));
                    });
        }

        System.out.println("✅ Default roles initialized successfully!");

        // Default admin account
        User adminUser = userRepository.findByEmail(adminEmail).orElse(null);
        if (adminUser == null) {
            Set<Role> roles = new HashSet<>();
            Role adminRole = roleRepository.findByName("ROLE_ADMIN").orElseThrow();
            roles.add(adminRole);

            adminUser = User.builder()
                    .email(adminEmail)
                    .fullName("SuperAdmin")
                    .password(passwordEncoder.encode(adminPassword))
                    .roles(roles)
                    .build();
            userRepository.save(adminUser);
            System.out.println("✅ Default admin account initialized successfully!");
        }
    }

    public User createAdmin(CreateAdminDTO createAdminDTO) {
        Set<Role> roles = new HashSet<>();
        Role adminRole = roleRepository.findByName("ROLE_ADMIN").orElseThrow();
        roles.add(adminRole);
        User user = User.builder()
                .email(createAdminDTO.getEmail())
                .fullName(createAdminDTO.getFullName())
                .password(passwordEncoder.encode(createAdminDTO.getPassword()))
                .roles(roles)
                .build();
        return userRepository.save(user);
    }

    public User createFaculty(CreateFacultyDTO createFacultyDTO) {
        Set<Role> roles = new HashSet<>();
        Role facultyRole = roleRepository.findByName("ROLE_FACULTY").orElseThrow();
        roles.add(facultyRole);

        User user = User.builder()
                .email(createFacultyDTO.getEmail())
                .fullName(createFacultyDTO.getFullName())
                .password(passwordEncoder.encode(createFacultyDTO.getPassword()))
                .roles(roles)
                .build();
        User newUser = userRepository.save(user);
        Profile profile = Faculty.builder()
                .department(createFacultyDTO.getDepartment())
                .user(newUser)
                .qualification(createFacultyDTO.getQualification())
                .build();
        profileRepository.save(profile);
        return newUser;
    }

    public User createStudent(CreateStudentDTO createStudentDTO) {
        Set<Role> roles = new HashSet<>();
        Role studentRole = roleRepository.findByName("ROLE_STUDENT").orElseThrow();
        roles.add(studentRole);

        User user = User.builder()
                .email(createStudentDTO.getEmail())
                .fullName(createStudentDTO.getFullName())
                .password(passwordEncoder.encode(createStudentDTO.getPassword()))
                .roles(roles)
                .build();
        User newUser = userRepository.save(user);
        Profile profile = Student.builder()
                .course(createStudentDTO.getCourse())
                .rollNumber(createStudentDTO.getRollNumber())
                .semester(createStudentDTO.getSemester())
                .user(newUser)
                .build();
        profileRepository.save(profile);
        return newUser;
    }
}
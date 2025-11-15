package com.techgeex.ams.controllers.user;

import com.techgeex.ams.dtos.user.CreateAdminDTO;
import com.techgeex.ams.dtos.user.CreateFacultyDTO;
import com.techgeex.ams.dtos.user.CreateStudentDTO;
import com.techgeex.ams.models.authentication.User;
import com.techgeex.ams.services.CsvService;
import com.techgeex.ams.services.user.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RequestMapping("/api/users")
@RestController
public class UserController {
    private final UserService userService;
    private final CsvService csvService;

    public UserController(UserService userService, CsvService csvService) {
        this.userService = userService;
        this.csvService = csvService;
    }

    @GetMapping("/me")
    public ResponseEntity<User> authenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();
        return ResponseEntity.ok(currentUser);
    }

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<User>> allUsers() {
        List <User> users = userService.allUsers();
        return ResponseEntity.ok(users);
    }

    @PostMapping("/uploadAdmins")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> uploadAdmins(@RequestParam("file") MultipartFile file) throws Exception{
        List<CreateAdminDTO> admins = csvService.parseCsvToBeans(file, CreateAdminDTO.class);
        int total = admins.size();
        int success = 0;
        for(CreateAdminDTO admin: admins){
            User existingUser = userService.findByEmail(admin.getEmail());
            if(existingUser == null){
                userService.createAdmin(admin);
                success++;
            }
        }
        String message = "Records added: " + success + "/" + total;
        return ResponseEntity.ok(message);
    }

    @PostMapping("/uploadFaculties")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> uploadFaculties(@RequestParam("file") MultipartFile file) throws Exception{
        List<CreateFacultyDTO> faculties = csvService.parseCsvToBeans(file, CreateFacultyDTO.class);
        int total = faculties.size();
        int success = 0;
        for(CreateFacultyDTO faculty: faculties){
            User existingUser = userService.findByEmail(faculty.getEmail());
            if(existingUser == null){
                userService.createFaculty(faculty);
                success++;
            }
        }
        String message = "Records added: " + success + "/" + total;
        return ResponseEntity.ok(message);
    }

    @PostMapping("/uploadStudents")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> uploadStudents(@RequestParam("file") MultipartFile file) throws Exception{
        List<CreateStudentDTO> students = csvService.parseCsvToBeans(file, CreateStudentDTO.class);
        int total = students.size();
        int success = 0;
        for(CreateStudentDTO student: students){
            User existingUser = userService.findByEmail(student.getEmail());
            if(existingUser == null){
                userService.createStudent(student);
                success++;
            }
        }
        String message = "Records added: " + success + "/" + total;
        return ResponseEntity.ok(message);
    }

    @PostMapping("/createAdmin")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<User> createAdmin(@RequestBody CreateAdminDTO createAdminDTO){
        User existingUser = userService.findByEmail(createAdminDTO.getEmail());
        if(existingUser == null){
            User createdUser = userService.createAdmin(createAdminDTO);
            return ResponseEntity.ok(createdUser);
        }
        return ResponseEntity.badRequest().body(null);
    }

    @PostMapping("/createFaculty")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<User> createFaculty(@RequestBody CreateFacultyDTO createFacultyDTO)
    {
        User existingUser = userService.findByEmail(createFacultyDTO.getEmail());
        if(existingUser == null){
            User createdUser = userService.createFaculty(createFacultyDTO);
            return ResponseEntity.ok(createdUser);
        }
        return ResponseEntity.badRequest().body(null);
    }

    @PostMapping("/createStudent")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<User> createStudent(@RequestBody CreateStudentDTO createStudentDTO)
    {
        User existingUser = userService.findByEmail(createStudentDTO.getEmail());
        if(existingUser == null) {
            User createdUser = userService.createStudent(createStudentDTO);
            return ResponseEntity.ok(createdUser);
        }
        return ResponseEntity.badRequest().body(null);
    }
}
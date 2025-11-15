package com.techgeex.ams.controllers.authentication;

import com.techgeex.ams.dtos.authentication.LoginResponseDTO;
import com.techgeex.ams.dtos.authentication.LoginUserDTO;
import com.techgeex.ams.dtos.user.*;
import com.techgeex.ams.models.authentication.User;
import com.techgeex.ams.services.authentication.AuthenticationService;
import com.techgeex.ams.services.authentication.JwtService;
import com.techgeex.ams.services.user.UserService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    private final JwtService jwtService;
    private final AuthenticationService authenticationService;

    public AuthenticationController(
            JwtService jwtService,
            AuthenticationService authenticationService,
            UserService userService
    ) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> authenticate(@RequestBody LoginUserDTO loginUserDto, HttpServletResponse response) {
        User authenticatedUser = authenticationService.authenticate(loginUserDto);
        String jwtToken = jwtService.generateToken(authenticatedUser);
        long expiresIn = jwtService.getExpirationTime()/1000;
        ResponseCookie responseCookie = ResponseCookie
                .from("authToken", jwtToken)
                .httpOnly(true)
                .secure(true)
                .path("/")
                .maxAge(expiresIn)
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, responseCookie.toString());
        return ResponseEntity.ok(
                LoginResponseDTO
                        .builder()
                        .token(jwtToken)
                        .expiresIn(expiresIn)
                        .build()
        );
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletResponse response) {
        ResponseCookie responseCookie = ResponseCookie
                .from("authToken", "")
                .httpOnly(true)
                .secure(true)
                .path("/")
                .maxAge(0)
                .build();

        response.addHeader(HttpHeaders.SET_COOKIE, responseCookie.toString());

        return ResponseEntity.ok("Logged out successfully");
    }
}
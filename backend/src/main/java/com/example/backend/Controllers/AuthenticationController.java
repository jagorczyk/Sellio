package com.example.backend.Controllers;

import com.example.backend.JwtAuthentication.JwtDto;
import com.example.backend.JwtAuthentication.JwtService;
import com.example.backend.User.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("authentication")
public class AuthenticationController {
    @Autowired
    private UserServiceImplementation userServiceImplementation;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtService jwtService;

    @PostMapping("/register")
    public UserClass register(@RequestBody UserClass user) throws BadCredentialsException {
        if (user.getUsername() == null || user.getUsername().trim().isEmpty()) {
            throw new IllegalArgumentException("Nazwa użytkownika nie może być pusta.");
        }

        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            throw new BadCredentialsException("Ta nazwa użytkownika jest już zajęta.");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        if (user.getRole() == null || user.getRole().isEmpty()) {
            user.setRole("User");
        }

        return userServiceImplementation.save(user);
    }

    @PostMapping("/login")
    public JwtDto login(@RequestBody UserDto user) {
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    user.username(), user.password()
            ));
            return new JwtDto(jwtService.generateToken(userServiceImplementation.loadUserByUsername(user.username())));
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Wprowadzono nieprawidłowe dane.");
        }
    }

    @GetMapping("/token")
    public boolean validity(@RequestHeader("Authorization") String auth) {
        String token = auth.substring(7);
        return jwtService.isTokenValid(token);
    }
}


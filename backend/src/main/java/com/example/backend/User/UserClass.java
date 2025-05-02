package com.example.backend.User;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="sellio_users")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserClass {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String username;
    private String password;
    private String role;
}

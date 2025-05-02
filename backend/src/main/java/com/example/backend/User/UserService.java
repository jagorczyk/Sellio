package com.example.backend.User;

public interface UserService {
    UserClass save(UserClass userClass);
    UserClass findByUsername(String username);
}
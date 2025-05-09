package com.example.backend.User;

import org.hibernate.annotations.DialectOverride;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService, UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserClass> user = userRepository.findByUsername(username);
        if (user.isEmpty()) {
            throw new UsernameNotFoundException("User '" + username + "' not found");
        }

        var userObject = user.get();
        return User.builder()
                .username(userObject.getUsername())
                .password(userObject.getPassword())
                .roles(userObject.getRole())
                .build();
    }


    @Override
    public UserClass save(UserClass user) {
        if (user.getRole() == null) {
            user.setRole("User");
        }
        return userRepository.save(user);
    }

    @Override
    public UserClass findByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));
    }
}

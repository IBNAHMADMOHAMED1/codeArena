package io.arena.api.service.user;

import io.arena.api.model.User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImp implements UserService {
    @Override
    public Optional<User> getUserByEmail(String email) {
        return null;
    }
}

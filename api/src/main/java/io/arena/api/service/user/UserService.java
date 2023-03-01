package io.arena.api.service.user;

import io.arena.api.model.User;

import java.util.Optional;

public interface UserService {
    Optional<User> getUserByEmail(String email);
}

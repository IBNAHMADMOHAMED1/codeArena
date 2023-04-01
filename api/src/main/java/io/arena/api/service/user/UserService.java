package io.arena.api.service.user;

import io.arena.api.model.Programer;

import java.util.Optional;

public interface UserService {
    Optional<Programer> getUserByEmail(String email);
}

package io.arena.api.controller;

import io.arena.api.service.user.UserServiceImp;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class AuthenticatController {
    private final UserServiceImp userServiceImp;
}

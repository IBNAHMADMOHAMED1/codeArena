package io.arena.api.exeptions;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.web.bind.annotation.ControllerAdvice;

import java.io.IOException;

@ControllerAdvice
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, org.springframework.security.core.AuthenticationException authException) throws IOException, ServletException {
        ResponseEntity<String> responseEntity = new ResponseEntity<>(""+authException.getMessage(), HttpStatus.BAD_REQUEST);
        // write the response entity to the response
        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        response.getWriter().write(responseEntity.getBody());
    }
}

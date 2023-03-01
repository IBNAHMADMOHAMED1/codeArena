package io.arena.api.config;

import io.arena.api.helper.JwtHelper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthFilter extends OncePerRequestFilter {
    private final JwtHelper jwtHelper;
    private final UserDetailsService userDetailsService;
    private String jwt;
    @Autowired
    @Lazy
    public JwtAuthFilter(JwtHelper jwtHelper, UserDetailsService userDetailsService) {
        this.jwtHelper = jwtHelper;
        this.userDetailsService = userDetailsService;
    }
    public String getJwt() {
        return jwt;
    }
    public void setJwt(String jwt) {
        this.jwt = jwt;
    }
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        final String authorizationHeader = request.getHeader("Authorization");
        final String jwtToken;
        final String userEmail;
        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }
        jwtToken = authorizationHeader.substring(7); // Bearer + space
        setJwt(jwtToken);
        jwtHelper.setToken(jwtToken);
        userEmail = jwtHelper.extrcatUsername(jwtToken);  // extract email from token
        if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);
            if (jwtHelper.validateToken(jwtToken, userDetails)) {
                UsernamePasswordAuthenticationToken authTonken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authTonken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));  // set details
                SecurityContextHolder.getContext().setAuthentication(authTonken);
            }
        }
        filterChain.doFilter(request, response);
    }
}

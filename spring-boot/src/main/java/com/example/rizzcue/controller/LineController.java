package com.example.rizzcue.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class LineController {

    @GetMapping("lines")
    public String getLines() {
        return "This is a placeholder for the lines endpoint.";
    }
}

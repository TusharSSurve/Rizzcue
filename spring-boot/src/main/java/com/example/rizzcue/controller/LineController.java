package com.example.rizzcue.controller;

import com.example.rizzcue.model.ApiResponse;
import com.example.rizzcue.model.Line;
import com.example.rizzcue.service.LineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class LineController {
    @Autowired
    LineService service;

    @GetMapping("lines")
    public ResponseEntity<ApiResponse<?>> getLines(@RequestParam(required = false, defaultValue = "false") boolean is_nsfw) {
        List<Line> lines = service.getLines(is_nsfw);
        if(lines == null || lines.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse<String>(404,"No lines found.", null));
        }
        return ResponseEntity.ok(new ApiResponse<List<Line>>(200,"Lines fetched successfully.", lines));
    }

    @PostMapping("addLine")
    public ResponseEntity<ApiResponse<Line>> addLine(@RequestBody Line line) {
        if(line.getLine1() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse<>(400, "Line1 cannot be null.", null));
        }
        Line savedLine = service.addLine(line);
        return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse<>(201, "Line added successfully.", savedLine));
    }
}

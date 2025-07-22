package com.example.rizzcue.service;

import com.example.rizzcue.model.Line;
import com.example.rizzcue.repo.LineRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LineService {
    @Autowired
    private LineRepo repo;
    public List<Line> getLines(boolean is_nsfw) {
        return is_nsfw ? repo.findAll() : repo.findByIsNsfwFalse();
    }

    public Line addLine(Line line) {
        return repo.save(line);
    }
}

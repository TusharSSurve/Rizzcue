package com.example.rizzcue.repo;

import com.example.rizzcue.model.Line;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LineRepo extends MongoRepository<Line,String> {
    List<Line> findByIsNsfwFalse();
}

package com.example.rizzcue.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Line {
    @Id
    private String id;
    private String line1;
    private String line2;
    private boolean is_nsfw;
    private int likes;
}

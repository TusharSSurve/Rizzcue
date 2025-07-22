package com.example.rizzcue.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@Document(collection = "RizzCue")
@AllArgsConstructor
@NoArgsConstructor
public class Line {
    @Id
    private String id;
    private String line1;
    private String line2;
    @Field("is_nsfw")
    @JsonProperty("is_nsfw")
    private boolean isNsfw;
    private int likes;
}

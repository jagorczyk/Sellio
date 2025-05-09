package com.example.backend.Item;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="sellio_items")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemClass {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String img_url;
    private int price;
    private int quantity;
}

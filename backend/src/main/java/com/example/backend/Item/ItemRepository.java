package com.example.backend.Item;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ItemRepository extends JpaRepository<ItemClass, Long> {
    @Query("SELECT i FROM ItemClass i WHERE i.name = :name")
    ItemClass findByName(@Param("name") String name);
}

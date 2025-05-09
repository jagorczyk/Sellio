package com.example.backend.Item;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ItemService {
    Page<ItemClass> findAll(Pageable pageable);
    ItemClass save(ItemClass item);
    ItemClass findByName(String name);
}

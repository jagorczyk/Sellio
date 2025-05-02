package com.example.backend.Controllers;

import com.example.backend.Item.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/items")
public class ItemsController {

    @Autowired
    private ItemService itemService;

    @PostMapping
    public ItemClass addItem(@RequestBody ItemDto itemDto) {
        ItemClass item = new ItemClass();
        item.setName(itemDto.name());
        itemService.save(item);
        return item;
    }

    @GetMapping
    public Page<ItemClass> getItems(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return itemService.findAll(pageable);
    }
}

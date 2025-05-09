package com.example.backend.Controllers;

import com.example.backend.Item.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
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
        item.setPrice(itemDto.price());
        item.setQuantity(itemDto.quantity());
        item.setImg_url(itemDto.img_url());
        itemService.save(item);
        return item;
    }

    @GetMapping
    public Page<ItemClass> getItems(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return itemService.findAll(pageable);
    }

    @GetMapping("info")
    public ResponseEntity<?> getItemInfo(@RequestParam String name) {
        ItemClass item = itemService.findByName(name);
        if (item == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(item);
    }
}

package com.example.backend.Item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class ItemServiceImplementation implements ItemService {
    @Autowired
    private ItemRepository itemRepository;

    @Override
    public Page<ItemClass> findAll(Pageable pageable) {
        return itemRepository.findAll(pageable);
    }

    @Override
    public ItemClass save(ItemClass itemClass) {
        return itemRepository.save(itemClass);
    }
}

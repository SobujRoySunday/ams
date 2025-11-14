package com.techgeex.ams.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FallbackController {
    @RequestMapping(value = "/{path:[^\\.]*}")
    public String redirectToReact() {
        return "forward:/index.html";
    }
}
package com.example.exam.controller;

import com.example.exam.service.MemberService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {

    @Resource(name="memberService")
    private MemberService memberService;

    @GetMapping("/api/hello")
    public String hello(){
        return "hi, reactBoot";
    }
    @GetMapping("/")
    public String index(){
        return "hi, it's sample";
    }
}

package org.premiership.controller;

import org.premiership.model.Round;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("/api/proxy")
@CrossOrigin(origins = "http://localhost:4200")
public class ProxyController {

    private static final String DATA_URL = "https://s3.eu-central-1.amazonaws.com/js-assignment/data.json";

    @GetMapping("rounds")
    public List<Round> getRounds() {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List<Round>> response = restTemplate.exchange(DATA_URL, HttpMethod.GET,
                null, new ParameterizedTypeReference<List<Round>>() {});
        return response.getBody();
    }
}

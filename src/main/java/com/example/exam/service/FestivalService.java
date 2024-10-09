package com.example.exam.service;

import com.example.exam.mapper.FestivalMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.List;

@Service
public class FestivalService {
    private final String API_URL = "https://apis.data.go.kr/B551011/KorService1/searchFestival1?numOfRows=1000" +
            "&pageNo=1" +
            "&MobileOS=ETC&MobileApp=" +
            "&_type=json" +
            "&listYN=Y" +
            "&arrange=A" +
            "&eventStartDate=20241001" +
            "&serviceKey=aEszZJrRS7J3uIHinlD6%2BXf40lXZ0bwXuXsakXfMelXFrpdnIqaKb2r1qffl8v954ZIh2UNtlbh%2FhL0%2B2%2FeV2g%3D%3D";

    public String getFestivalData() throws IOException {
        StringBuilder urlBuilder = new StringBuilder("https://apis.data.go.kr/B551011/KorService1/searchFestival1");
        urlBuilder.append("?" + URLEncoder.encode("serviceKey","UTF-8") + "=aEszZJrRS7J3uIHinlD6%2BXf40lXZ0bwXuXsakXfMelXFrpdnIqaKb2r1qffl8v954ZIh2UNtlbh%2FhL0%2B2%2FeV2g%3D%3D");
        urlBuilder.append("&" + URLEncoder.encode("MobileOS","UTF-8") + "=" + URLEncoder.encode("ETC", "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("MobileApp","UTF-8") + "=" + URLEncoder.encode("TravelTest", "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("numOfRows","UTF-8") + "=" + URLEncoder.encode("50", "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("pageNo","UTF-8") + "=" + URLEncoder.encode("1", "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("_type","UTF-8") + "=" + URLEncoder.encode("JSON", "UTF-8")); // JSON으로 변경
        urlBuilder.append("&" + URLEncoder.encode("listYN","UTF-8") + "=" + URLEncoder.encode("Y", "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("arrange","UTF-8") + "=" + URLEncoder.encode("A", "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("eventStartDate","UTF-8") + "=" + URLEncoder.encode("20241001", "UTF-8"));

        URL url = new URL(urlBuilder.toString());
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Content-type", "application/json");

        BufferedReader rd;
        if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        } else {
            rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
        }

        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
            sb.append(line);
        }
        rd.close();
        conn.disconnect();

        return sb.toString(); // JSON 데이터 반환
    }
}



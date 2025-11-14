package com.techgeex.ams.services;

import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import com.opencsv.bean.HeaderColumnNameMappingStrategy;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.List;

@Service
public class CsvService {
    public <T> List<T> parseCsvToBeans(MultipartFile file, Class<T> beanClass) throws Exception {
        // Create the mapping strategy
        HeaderColumnNameMappingStrategy<T> mappingStrategy = new HeaderColumnNameMappingStrategy<>();
        mappingStrategy.setType(beanClass); // Set the target bean class

        try (Reader reader = new BufferedReader(new InputStreamReader(file.getInputStream()))) {
            CsvToBean<T> csvToBean = new CsvToBeanBuilder<T>(reader)
                    .withMappingStrategy(mappingStrategy) // Use the defined strategy
                    .withIgnoreLeadingWhiteSpace(true)
                    .build();

            return csvToBean.parse();
        }
    }
}
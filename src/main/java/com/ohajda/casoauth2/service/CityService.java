package com.ohajda.casoauth2.service;

import com.ohajda.casoauth2.domain.City;
import com.ohajda.casoauth2.repository.CityRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.List;

/**
 * Service Implementation for managing City.
 */
@Service
@Transactional
public class CityService {

    private final Logger log = LoggerFactory.getLogger(CityService.class);
    
    @Inject
    private CityRepository cityRepository;

    /**
     * Save a city.
     *
     * @param city the entity to save
     * @return the persisted entity
     */
    public City save(City city) {
        log.debug("Request to save City : {}", city);
        City result = cityRepository.save(city);
        return result;
    }

    /**
     *  Get all the cities.
     *  
     *  @return the list of entities
     */
    @Transactional(readOnly = true) 
    public List<City> findAll() {
        log.debug("Request to get all Cities");
        List<City> result = cityRepository.findAll();

        return result;
    }

    /**
     *  Get one city by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Transactional(readOnly = true) 
    public City findOne(Long id) {
        log.debug("Request to get City : {}", id);
        City city = cityRepository.findOne(id);
        return city;
    }

    /**
     *  Delete the  city by id.
     *
     *  @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete City : {}", id);
        cityRepository.delete(id);
    }
}

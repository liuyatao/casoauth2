package com.ohajda.casoauth2.web.rest;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.inject.Inject;

@Controller
@RequestMapping("/app")
public class LogoutResource {
    private final Logger log = LoggerFactory.getLogger(LogoutResource.class);

    private static final String PROPERTY_CAS_URL_LOGOUT = "cas.url.logout";
    private static final String PROPERTY_CAS_URL_SERVICE = "cas.url.service";

    @Inject
    private Environment env;

     @RequestMapping("/logout")
     public String logout() {

     log.debug("/logout redirect");

     String logoutUrl = env.getProperty(PROPERTY_CAS_URL_LOGOUT)+"?service="+env.getProperty(PROPERTY_CAS_URL_SERVICE);

     return "redirect:"+logoutUrl;
     }

}

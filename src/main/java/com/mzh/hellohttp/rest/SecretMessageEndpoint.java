package com.mzh.hellohttp.rest;

import com.mzh.hellohttp.service.SecretMessageService;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

@Path("")
public class SecretMessageEndpoint {

    @Inject SecretMessageService secretMessageService;

    @GET
    @Path("/secretmessage")
    @Produces(APPLICATION_JSON)
    public Response getSecretMessage() {
        String secretMessageText = secretMessageService.getSecretMessage();
        SecretMessage msg = new SecretMessage();
        msg.setText(secretMessageText);
        return Response.ok(msg, MediaType.APPLICATION_JSON).build();
    }
}

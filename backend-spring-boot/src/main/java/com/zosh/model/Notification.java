package com.zosh.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Entity
@Data
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "recipient_id")
    private User customer;
    
    @ManyToOne
    private Restaurant restaurant;
    
    private String message;

    @Temporal(TemporalType.TIMESTAMP)
    private Date sentAt;
    
    private boolean readStatus;
    
    
}


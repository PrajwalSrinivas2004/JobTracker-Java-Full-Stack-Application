package com.example.JobTracker.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String companyName;
    private String role;
    private String status;
    private LocalDate dateApplied;

    // Constructors
    public Job() {}

    public Job(String companyName, String role, String status, LocalDate dateApplied) {
        this.companyName = companyName;
        this.role = role;
        this.status = status;
        this.dateApplied = dateApplied;
    }

    // Getters and Setters
    public Long getId() { return id; }

    public String getCompanyName() { return companyName; }
    public void setCompanyName(String companyName) { this.companyName = companyName; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDate getDateApplied() { return dateApplied; }
    public void setDateApplied(LocalDate dateApplied) { this.dateApplied = dateApplied; }
}
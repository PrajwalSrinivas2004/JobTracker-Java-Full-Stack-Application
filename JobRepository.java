package com.example.JobTracker.repository;

import com.example.JobTracker.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {
}
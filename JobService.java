package com.example.JobTracker.service;

import com.example.JobTracker.model.Job;
import com.example.JobTracker.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public Job addJob(Job job) {
        return jobRepository.save(job);
    }

    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }

    public Job updateJob(Long id, Job updatedJob) {
        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Job not found"));

        job.setCompanyName(updatedJob.getCompanyName());
        job.setRole(updatedJob.getRole());
        job.setStatus(updatedJob.getStatus());
        job.setDateApplied(updatedJob.getDateApplied());

        return jobRepository.save(job);
    }
public Job getJobById(Long id) {
    return jobRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Job not found"));
}

}
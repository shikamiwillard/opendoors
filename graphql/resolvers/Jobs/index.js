// The Job schema.
import Job from "../../../models/Jobs";

export default {
    Query: {
        job: (root, args) => {
            return new Promise((resolve, reject) => {
                Job.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        jobs: () => {
            return new Promise((resolve, reject) => {
                Job.find({})
                    .populate()
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    });
            });
        }
    },
    Mutation: {
        addJob: (root, {
            id,
            job_title,
            company_name,
            company_logo,
            about_company,
            location,
            tech_stack,
            qualifications,
            bonus_skills,
            responsibilities,
            benefits,
            apply,
            date_posted,
            deadline,
        }) => {
            const newJob = new Job({
                id,
                job_title,
                company_name,
                company_logo,
                about_company,
                location,
                tech_stack,
                qualifications,
                bonus_skills,
                responsibilities,
                benefits,
                apply,
                date_posted,
                deadline,
            });

            return new Promise((resolve, reject) => {
                newJob.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        editJob: (root, {
            id,
            job_title,
            company_name,
            company_logo,
            about_company,
            location,
            tech_stack,
            qualifications,
            bonus_skills,
            responsibilities,
            benefits,
            apply,
            date_posted,
            deadline,
        }) => {
            return new Promise((resolve, reject) => {
                Job.findOneAndUpdate({
                    id
                }, {
                    $set: {
                        job_title,
                        company_name,
                        company_logo,
                        about_company,
                        location,
                        tech_stack,
                        qualifications,
                        bonus_skills,
                        responsibilities,
                        benefits,
                        apply,
                        date_posted,
                        deadline,
                    }
                }).exec(
                    (err, res) => {
                        err ? reject(err) : resolve(res);
                    }
                );
            });
        },
        deleteJob: (root, args) => {
            return new Promise((resolve, reject) => {
                Job.findOneAndRemove(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    }
};
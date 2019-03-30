export default `
  type Job {
    id: String!
    job_title: String!
    company_name: String!
    company_logo: String!
    about_company: String!
    location: String!
    tech_stack: String!
    qualifications: String!
    bonus_skills: String!
    responsibilities: String!
    benefits: String!
    apply: String!
    date_posted: String!
    deadline: String!
  }
  type Query {
    job(id: String!): Job
    jobs: [Job]
  }
  type Mutation {
    addJob( id: String!,
            job_title: String!,
            company_name: String!,
            company_logo: String!,
            about_company: String!,
            location: String!,
            tech_stack: String!,
            qualifications: String!,
            bonus_skills: String!,
            responsibilities: String!,
            benefits: String!,
            apply: String!,
            date_posted: String!,
            deadline: String,
            ): Job

    editJob(id: String, 
            job_title: String,
            company_name: String,
            company_logo: String,
            about_company: String,
            location: String,
            tech_stack: String,
            qualifications: String,
            bonus_skills: String,
            responsibilities: String,
            benefits: String,
            apply: String,
            date_posted: String,
            deadline: String,
            ): Job

    deleteJob(id: String, 
            job_title: String,
            company_name: String,
            company_logo: String,
            about_company: String,
            location: String,
            tech_stack: String,
            qualifications: String,
            bonus_skills: String,
            responsibilities: String,
            benefits: String,
            apply: String,
            date_posted: String,
            deadline: String,
            ): Job
  }
`;
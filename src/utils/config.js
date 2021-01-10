const apiEndPoints = {
  baseUrl: "http://localhost:3001/api/v1",
  createOrShowAllCompanies() {
    return `${apiEndPoints.baseUrl}/companies`;
  },
  createOrShowJobListings(companyId) {
    return `${apiEndPoints.baseUrl}/companies/${companyId}/job_listings`;
  },
  allJobListings() {
    return `${apiEndPoints.baseUrl}/job_listings`;
  },
  updateOrDeleteJobListing(companyId, jobListingId) {
    return `${apiEndPoints.baseUrl}/companies/${companyId}/job_listings/${jobListingId}`;
  },
};

// # baseUrl = locahost:3001/api/v1/
// # GET companies = companies
// # GET companies/job listings = /companies/:company_id/job_listings
// # GET job listings = /job_listings
// # POST create company = /companies (add name data)
// # POST create job listing = /companies/:company_id/job_listings
// # PATCH or PUT update job listing = /companies/:company_id/job_listings/:job_listing_id
// # DELETE destroy a job listing = /companies/:company_id/job_listings/:job_listing_id

export default apiEndPoints;
